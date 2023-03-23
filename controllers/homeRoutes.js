/*
home  /
merchant login   /login
merchant signup  /signup

*/

const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.status(200).render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  try {
    res.status(200).render("signUp");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.status(200).render("merchantlogin");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
