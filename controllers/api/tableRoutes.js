const router = require("express").Router();
const { Tables, Ticket, Merchant, Employee } = require("../../models");

/* 
URL route:    /api/tables
*/

// Get all table data for that merchant
router.get("/", async (req, res) => {
  try {
    const tablesData = await Tables.findAll({
      where: { merchant_id: req.session.currentMerchant },
      include: [
        {
          model: Ticket,
        },
        {
          model: Merchant,
          attributes: [
            "business_name",
            "email",
            "address",
            "city",
            "state",
            "zip",
            "phone",
          ],
        },
      ],
    });
    res.status(200).json(tablesData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all table data by id
router.get("/:id", async (req, res) => {
  try {
    const tablesData = await Tables.findAll({
      include: [
        {
          model: Ticket,
        },
        {
          model: Merchant,
          attributes: [
            "business_name",
            "email",
            "address",
            "city",
            "state",
            "zip",
            "phone",
          ],
        },
      ],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tablesData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add new Table
router.post("/", async (req, res) => {
  /* 
req.body fields:

{
    table_name: STRING,
    max_size: INTEGER,
    available: BOOLEAN,
}

*/
  try {
    req.body.merchant_id = req.session.currentMerchant;
    const tableData = await Tables.create(req.body);
    res.status(200).json(tableData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update table data
router.put("/", async (req, res) => {
  /* 
req.body fields:

{
    id: INT,
    table_name: STRING,
    available: BOOLEAN,
}

*/

  try {
    const tableData = await Tables.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(tableData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete Table
router.delete("/", async (req, res) => {
  /* 
req.body fields:

{
    id: INT,
}

*/
  try {
    await Tables.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json("Table has been deleted.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
