const router = require("express").Router();
const { Merchant } = require("../models/merchant");
const helpers = require("../helpers/helpers");

// id, location_name, username, password
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
email: STRING,
location_name: STRING,
username: STRING,
password: STRING
}

*/
  try {
    const newMerchant = await Merchant.create(req.body);
    await sendWelcomeEmail().catch(console.error);

    res.status(200).json(newMerchant);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
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

    // class Merchant extends Model {
    //   checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    //   }
    // }

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

// Logout
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
