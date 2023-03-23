const router = require("express").Router();
const { Tables } = require("../../models");

/* 
URL route:    /api/tables
*/

// Select a table
router.post("/select", async (req, res) => {
  /*

req.body :   {table_id: INT}

*/

  try {
    req.session.currentTableID = req.body.table_id;
    res.status(200).json("Table Selected");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all table data
router.get("/", async (req, res) => {
  try {
    const tablesData = await Tables.findAll();
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
