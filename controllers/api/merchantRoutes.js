const router = require("express").Router();
const { Merchant } = require("../../models");
const emails = require("../../helpers/emails");

/* 
URL route:    /api/merchant
*/

// Create new merchant account
router.post("/signup", async (req, res) => {
  /*
req.body should be:

{
  business_name: STRING,
  email: STRING,
  username: STRING,
  password: STRING
}

*/
  try {
    // create merchant in Db
    const newMerchant = await Merchant.create(req.body);
    // send welcome email
    await emails.sendWelcomeEmail(newMerchant.email).catch(console.error);

    res.status(200).json(newMerchant);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Merchant Login
router.post("/login", async (req, res) => {
  /* 
req.body should be:

{
  username: STRING,
  password: STRING
}

*/
  try {
    const dbMerchantData = await Merchant.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbMerchantData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    const validPassword = await dbMerchantData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      // add merchant id to session
      req.session.currentMerchant = dbMerchantData.id;
      res
        .status(200)
        .json({ user: dbMerchantData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Merchant Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json("message: You have been logged out").end();
    });
  } else {
    res.status(404).end();
  }
  console.log("logged out");
});

module.exports = router;
