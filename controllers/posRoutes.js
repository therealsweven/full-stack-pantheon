/*
employee login  /pos/login
tables   /pos/tables
main  /pos/main
admin /pos/admin
*/

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
router.get("/tables", (req, res) => {
  try {
    res.status(200).render("tableMap");
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
