const router = require("express").Router();
const { Merchant } = require("../models/merchant");
const helpers = require("../../helpers/helpers");
const bcrypt = require("bcrypt");
/* 
URL route:    /api/merchant
*/

// Send Create Account Page
router.get("/new", (req, res) => {
  try {
    res.status(200).sendFile("MERCHANT LOGIN"); //change file name
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new merchant account
router.post("/new", async (req, res) => {
  /*
req.body should be:

{
  location_name: STRING,
  email: STRING,
  username: STRING,
  password: STRING
}

*/
  try {
    // create merchant in Db
    const newMerchant = await Merchant.create(req.body);
    // send welcome email
    await helpers.sendWelcomeEmail(newMerchant.email).catch(console.error);

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

    // const validPassword = await dbMerchantData.checkPassword(req.body.password);
    const validPassword = await bcrypt.compareSync(
      req.body.password,
      dbMerchantData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
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
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
