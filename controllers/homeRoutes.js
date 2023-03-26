/*
home  /
merchant login   /login
merchant signup  /signup

*/
const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
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

router.get("/forgotPassword", (req, res) => {
  try {
    res.status(200).render("forgotPassword");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
