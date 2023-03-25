/*
employee login  /pos/login
tables   /pos/tables
main  /pos/main
admin /pos/admin
*/
const { Bar_tabs, Ticket } = require("../models");
const router = require("express").Router();

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
    const tabData = await Bar_tabs.findAll({
      where: {
        paid: false,
      },
      // include: [{ model: Ticket }],
    });
    const tabs = tabData.map((element) => element.get({ plain: true }));
    console.log(tabs);
    res.status(200).render("tableMap", { tabs });
  } catch (err) {
    res.status(500).json(err);
  }
});

// main pos landing page for putting in orders
router.get("/main", (req, res) => {
  try {
    res.status(200).render("landingPage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// checkout page
router.get("/checkout", (req, res) => {
  try {
    res.status(200).render("checkout");
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
