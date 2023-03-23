const router = require("express").Router();
const { Ticket, Ticket_items } = require("../../models");

/* 
URL route:    /api/tickets
*/

// GET all open tickets
router.get("/open", async (req, res) => {
  try {
    const ticketsData = await Ticket.findAll({
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
  table_id: INTEGER,
  tab_id: INTEGER,
  employee_id:
}

*/
  try {
    const ticketData = await Ticket.create(req.body);
    res.status(200).json(ticketData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Ticket
router.put("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  id:  INT,
  name:  STRING,
  role:  STRING,
  discount: DECIMAL,
  notes: MULTILINE STRING,
  table_id: INT,
  tab_id: INT,
}

*/
  try {
    const ticketData = await Employee.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(ticketData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Remove Ticket
router.delete("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  id:  INT
}

*/

  try {
    await Ticket.destroy({
      where: {
        id: req.body.id,
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
