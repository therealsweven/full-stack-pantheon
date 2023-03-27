const router = require("express").Router();
const {
  Ticket,
  Ticket_items,
  Menu_items,
  Merchant,
  Employee,
  Tables,
  Bar_tabs,
} = require("../../models");

/* 
URL route:    /api/tickets
*/

// GET all open tickets
router.get("/open", async (req, res) => {
  try {
    const ticketsData = await Ticket.findAll({
      where: { merchant_id: req.session.currentMerchant },
      include: [
        {
          model: Menu_items,
        },
        {
          model: Tables,
        },
        {
          model: Bar_tabs,
        },
        {
          model: Merchant,
          attributes: [
            "business_name",
            "email",
            "address",
            "city",
            "state",
            "zip",
            "phone",
          ],
        },
        {
          model: Employee,
          attributes: ["name", "role", "is_manager"],
        },
      ],
      where: {
        paid: false,
      },
    });

    res.status(200).json(ticketsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one ticket's data by ID in request url
router.get("/:id", async (req, res) => {
  try {
    const ticketData = await Ticket.findByPk(req.params.id, {
      include: [
        {
          model: Menu_items,
        },
        {
          model: Tables,
        },
        {
          model: Bar_tabs,
        },
        {
          model: Merchant,
          attributes: [
            "business_name",
            "email",
            "address",
            "city",
            "state",
            "zip",
            "phone",
          ],
        },
        {
          model: Employee,
          attributes: ["name", "role", "is_manager"],
        },
      ],
    });

    res.status(200).json(ticketData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Look for open ticket at tableid
router.get("/:tableid/open", async (req, res) => {
  req.session.tableID = req.params.tableid;
  try {
    const ticketData = await Ticket.findOne({
      where: {
        table_id: req.params.tableid,
        paid: false,
        merchant_id: req.session.currentMerchant,
      },
      include: [{ model: Bar_tabs, Tables }],
    });
    console.log(ticketData);
    if (!ticketData) {
      res.status(400).json("No open tickets");
      return;
    }
    const ticket = ticketData.get({ plain: true });
    //req.session.ticket_id = ticketData.id;
    res.status(200).json(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add new ticket
router.post("/", async (req, res) => {
  /*
Request Body should be as follows:

{

}

*/
  try {
    req.body.employee_id = req.session.currentEmployeeID;
    req.body.merchant_id = req.session.currentMerchant;
    //req.body.table_id = req.session.currentTableID;
    //req.body.tab_id = req.session.currentTabID;

    const ticketData = await Ticket.create(req.body);
    res.status(200).json(ticketData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Ticket
router.put("/:id", async (req, res) => {
  /*
Request Body should be as follows:

{
  paid: BOOLEAN,
  tip_amount: DECIMAL,
  discount: DECIMAL,
  notes: MULTILINE STRING,
}

*/
  try {
    const ticketData = await Ticket.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(ticketData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Remove Ticket
router.delete("/:id", async (req, res) => {
  try {
    await Ticket.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("message: Ticket has been deleted.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Link menu item to a ticket
router.post("/item", async (req, res) => {
  /*
Request Body should be as follows:

{
  "ticket_id": INT
  "menu_item_id": INT
  "notes": STRING (optional)
}
*/
  try {
    const [ticket_item, created] = await Ticket_items.findOrCreate({
      where: {
        ticket_id: req.body.ticket_id,
        menu_item_id: req.body.menu_item_id,
      },
      defaults: {
        ticket_id: req.body.ticket_id,
        menu_item_id: req.body.menu_item_id,
        notes: req.body.notes,
      },
    });
    if (created) {
      res.status(200).json(ticket_item);
    } else {
      const increaseQuantity = await Ticket_items.update(
        { quantity: ticket_item.quantity + 1 },
        {
          where: {
            id: ticket_item.id,
          },
        }
      );
      res.status(200).json({ message: "Quantity increased" });
    }
    //return response
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Remove item from a ticket
router.get("/removeitem/:id", async (req, res) => {
  /*
Request Body should be as follows:
{
  "ticket_id": INT
  "item_id": INT
}
*/
  console.log(req.body);
  try {
    //locate record
    const ticket_itemData = await Ticket_items.findByPk(
      req.params.id
      //   {
      //   where: {
      //     ticket_id: req.body.ticket_id,
      //     menu_item_id: req.body.menu_item_id
      //   },
      // }
    );

    console.log(ticket_itemData.quantity);
    console.log(ticket_itemData.quantity - 1 < 0);
    if (!(ticket_itemData.quantity -1 <= 0)) {
      const decreaseQuantity = await Ticket_items.update(
        { quantity: ticket_itemData.quantity - 1 },
        {
          where: {
            id: ticket_itemData.id,
          },
        }
      );
      res.status(200).json({ message: "Quantity decreased" });
    } else {
      await Ticket_items.destroy({
        where: {
          id: ticket_itemData.id,
        },
      });
      res.status(200).json("message: Item has been removed.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// set tabletab name in session
router.post("/setTableTab", async (req, res) => {
  console.log(req.body);
  req.session.setTableTab = req.body.setTableTab;
  req.session.tableSelected = true;
  res.json("message: setTableTab set");
});
module.exports = router;
