const router = require("express").Router();
const { Merchant, Employee } = require("../../models");
const emails = require("../../helpers/emails");
const { v4: uuidv4 } = require("uuid");

/* 
URL route:    /api/merchant
*/

//get merchant by session
router.get("/", async (req, res) => {
  try {
    const merchantData = await Merchant.findAll({
      where: {
        id: req.session.currentMerchant,
      },
    });
    res.status(200).json(merchantData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get merchant by id
router.get("/:id", async (req, res) => {
  try {
    const merchantData = await Merchant.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(merchantData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create new merchant account
router.post("/signup", async (req, res) => {
  /*
req.body should be:

{
  business_name: STRING,
  email: STRING,
  username: STRING,
  password: STRING,
  address: STRING,
  city: STRING,
  state: STRING,
  zip: STRING,
  phone: STRING,
}

*/
  try {
    console.log(req.body);
    // create merchant in Db
    const newMerchant = await Merchant.create(req.body);

    await Employee.create({
      name: "admin",
      email: newMerchant.email,
      role: "admin",
      login_id: "admin",
      is_manager: true,
      merchant_id: newMerchant.id,
    });
    // send welcome email
    await emails.sendWelcomeEmail(newMerchant).catch(console.error);

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
      req.session.currentMerchantName = dbMerchantData.business_name;
      res.cookie("loggedIn", true, { maxAge: 3000000, httpOnly: true });
      res.redirect("/pos/login");
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

// forgot password
router.post("/forgotPassword", async (req, res) => {
  console.log(req.body);
  try {
    const merchantData = await Merchant.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!merchantData) {
      res.status(400).json("No account found");
      return;
    }
    const merchant = merchantData.get({ plain: true });
    const tempPW = uuidv4();

    await Merchant.update(
      { password: tempPW },
      { where: { id: merchant.id }, individualHooks: true }
    );
    //send email
    emails.sendPWResetEmail(merchantData, tempPW);

    res.status(200).json("Password Reset Email Sent");
  } catch (err) {
    res.status(500).json(err);
  }
});

// forgot username
router.post("/forgotUsername", async (req, res) => {
  console.log(req.body);
  try {
    const merchantData = await Merchant.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!merchantData) {
      res.status(400).json("No account found");
      return;
    }
    const merchant = merchantData.get({ plain: true });
    //send email
    emails.sendUsernameEmail(merchantData);

    res.status(200).json("Email Sent. Check your inbox.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Merchant Settings Login
router.post("/settings/login", async (req, res) => {
  /* 
req.body should be:
{
  password: STRING
}
*/
  try {
    const dbMerchantData = await Merchant.findOne({
      where: {
        id: req.session.currentMerchant,
      },
    });

    const validPassword = await dbMerchantData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    res.status(200).json({ message: "Password Correct" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update merchant account info
router.put("/", async (req, res) => {
  console.log(req.body);
  try {
    await Merchant.update(req.body, {
      where: { id: req.session.currentMerchant },
      individualHooks: true,
    });

    res.status(200).json("Account Successfully Updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
