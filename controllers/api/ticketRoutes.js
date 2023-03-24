const router = require("express").Router();
const { Ticket, Ticket_items, Menu_items } = require("../../models");

/* 
URL route:    /api/tickets
*/

// GET all open tickets
router.get("/open", async (req, res) => {
  try {
    const ticketsData = await Ticket.findAll({
      include: [{ model: Menu_items }],
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
    const ticketData = await Ticket.findByPk(req.params.id);

    res.status(200).json(ticketData);
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
  order_number: LINESTRING,
}

*/
  try {
    req.body.employee_id = req.session.currentEmployeeID;
    req.body.merchant_id = req.session.currentMerchant;
    req.body.table_id = req.session.currentTableID;
    req.body.tab_id = req.session.currentTabID;

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
  "item_id": INT
  "notes": STRING (optional)
}

*/
  try {
    const ticketData = await Ticket_items.create(req.body);
    res.status(200).json(ticketData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Remove item from a ticket
router.delete("/item", async (req, res) => {
  /*
Request Body should be as follows:

{
  "ticket_id": INT
  "item_id": INT
}

*/
  try {
    await Ticket_items.destroy({
      where: {
        ticket_id: req.body.ticket_id,
        item_id: req.body.item_id
      },
    });
    res.status(200).json("message: Item has been removed.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
