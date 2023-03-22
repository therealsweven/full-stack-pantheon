const router = require("express").Router();
const { Menu } = require("../../models");

/* 
URL route:    /api/menu
*/

// GET full menu
router.get("/", async (req, res) => {
  try {
    const menuData = await Menu.findAll();

    res.status(200).json(menuData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one item's data by ID in request url
router.get("/:id", async (req, res) => {
  try {
    const menuData = await Menu.findByPk(req.params.id);

    res.status(200).json(menuData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add new menu item
router.post("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  item_name:  STRING,
  description:  STRING,
  price: DECIMAL,
  available: BOOLEAN,
  type: STRING,
  image_filename: STRING
}

*/
  try {
    const menuItem = await Menu.create(req.body);
    res.status(200).json(menuItem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Menu Item
router.put("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  id: INT,
  item_name:  STRING,
  description:  STRING,
  price: DECIMAL,
  available: BOOLEAN,
  type: STRING,
  image_filename: STRING
}

*/
  try {
    const menuItem = await Menu.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(menuItem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Remove Menu Item
router.delete("/", async (req, res) => {
  /*
Request Body should be as follows:

{
  id:  INT
}

*/

  try {
    await Menu.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(`message: ${req.body.item_name} has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
