/*
employee login  /pos/login
tables   /pos/tables
main  /pos/main
admin /pos/admin
*/
const { Bar_tabs, Ticket } = require("../models");
const router = require("express").Router();
const Op = require("sequelize").Op;

// employee login page
router.get("/login", (req, res) => {
  try {
    res.status(200).render("userLogin");
  } catch (err) {
    res.status(500).json(err);
  }
});

// table/tab select page
router.get("/tables", async (req, res) => {
  try {
    const tabData = await Ticket.findAll({
      where: {
        paid: false,
        bar_tab_id: { [Op.ne]: null },
      },
      include: [{ model: Bar_tabs }],
    });
    const tickets = tabData.map((element) => element.get({ plain: true }));
    console.log(tickets[0].bar_tab.tab_name);
    console.log(tickets);
    res.status(200).render("tableMap", { tickets });
  } catch (err) {
    res.status(500).json(err);
  }
});

// main pos landing page for putting in orders
router.get("/main/:id", (req, res) => {
  try {
    ticketData = Ticket.findOne({
      where: {
        id: req.params.id,
      },
    });
    ticket = ticketData.get({ plain: true });
    res.status(200).render("landingPage", ticket);
  } catch (err) {
    res.status(500).json(err);
  }
});

// checkout page
router.get("/checkout/:id", (req, res) => {
  try {
    ticketData = Ticket.findOne({
      where: {
        id: req.params.id,
      },
    });
    ticket = ticketData.get({ plain: true });

    res.status(200).render("checkout", ticket);
  } catch (err) {
    res.status(500).json(err);
  }
});

// admin page
router.get("/admin", (req, res) => {
  try {
    res.status(200).render("admin");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
