const router = require("express").Router();
const { Tables } = require("../../models");

/* 
URL route:    /api/tables
*/

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

// Update table data
router.put("/", async (req, res) => {
  try {
    const tableData = await Tables.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
