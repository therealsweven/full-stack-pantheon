const router = require("express").Router();
const { Bar_tabs, Ticket } = require("../../models");

/* 
URL route:    /api/tab/
*/


// Get all table data
router.get("/", async (req, res) => {
  try {
    const tabData = await Bar_tabs.findAll({
      include: [{model: Ticket}]
    });
    res.status(200).json(tabData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add new bar tab
router.post("/", async (req, res) => {
  /* 
req.body fields:

{
    tab_name: STRING,
    paid: BOOLEAN
    card_autorized: BOOLEAN,
    card_last_four: STRING
}

*/
  try {
    req.body.merchant_id = req.session.currentMerchant;
    const tabData = await Bar_tabs.create(req.body);
    res.status(200).json(tabData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update BarTab data
router.put("/:id", async (req, res) => {
  /* 
req.body fields:

{
    tab_name: STRING,
    paid: BOOLEAN
    card_autorized: BOOLEAN,
    card_last_four: STRING
}

*/
  try {
    const tabData = await Bar_tabs.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tabData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete Bar Tab
router.delete("/:id", async (req, res) => {

  try {
    await Bar_tabs.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Table has been deleted.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
