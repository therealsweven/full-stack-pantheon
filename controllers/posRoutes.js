/*
employee login  /pos/login
tables   /pos/tables
main  /pos/main
admin /pos/admin
*/

const router = require("express").Router();

router.get("/login", (req, res) => {
  try {
    res.status(200).render("userLogin");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/tables", (req, res) => {
  try {
    res.status(200).render("tableMap");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/main", (req, res) => {
  try {
    res.status(200).render("landingPage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/checkout", (req, res) => {
  try {
    res.status(200).render("checkout");
  } catch (err) {
    res.status(500).json(err);
  }
});

/*

/pos/admin/employees
/pos/admin/menu
/pos/admin/orders
/pos/admin/editOrder
/pos/admin/customize
*/
router.get("/admin", (req, res) => {
  try {
    res.status(200).render("landing_admin");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
