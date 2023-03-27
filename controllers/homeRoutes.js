const { Merchant } = require("../models");
/*
home  /
merchant login   /login
merchant signup  /signup

*/
const path = require("path");
const router = require("express").Router();

// homepage
router.get("/", (req, res) => {
  try {
    /////// cookie work
    console.log(req.cookies);
    if (req.cookies.loggedIn === true) {
      res.redirect("/pos/login");
      return;
    } else {
      res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// merchant signup
router.get("/signup", (req, res) => {
  try {
    res.status(200).render("signUp");
  } catch (err) {
    res.status(500).json(err);
  }
});

// merchant login
router.get("/login", (req, res) => {
  try {
    res.status(200).render("merchantlogin");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Merchant Logout
router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      // res.status(204).json("message: You have been logged out").end();
      res.status(204).redirect("/");
    });
  } else {
    res.status(404).end();
  }
  console.log("logged out");
});

// merchant forgot password
router.get("/forgotPassword", (req, res) => {
  try {
    res.status(200).render("forgotPassword");
  } catch (err) {
    res.status(500).json(err);
  }
});

// merchant settings
router.get("/settings", async (req, res) => {
  try {
    console.log(req.session.currentMerchant);
    const merchantData = await Merchant.findOne({
      where: { id: req.session.currentMerchant },
    });
    console.log(merchantData);
    const merchant = merchantData.get({ plain: true });
    console.log(merchant);
    res.status(200).render("merchantSettings", merchant);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
