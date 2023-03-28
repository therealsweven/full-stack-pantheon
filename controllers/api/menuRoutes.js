const router = require("express").Router();
const { Menu_items, Allergens, Menu_item_allergens } = require("../../models");

/* 
URL route:    /api/menu
*/

// GET full menu
router.get("/", async (req, res) => {
  try {
    const menuData = await Menu_items.findAll({
      where: {
        merchant_id: req.session.currentMerchant,
      },
      include: [{ model: Allergens }],
    });

    res.status(200).json(menuData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one item's data by ID in request url
router.get("/:id", async (req, res) => {
  try {
    const menuData = await Menu_items.findByPk(req.params.id, {
      include: [{ model: Allergens }],
    });

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
  subtype: STRING
  image: STRING
  allergen_ids: ARRAY of INT
}
*/
  req.body.merchant_id = req.session.currentMerchant;
  Menu_items.create(req.body)
    .then((menuData) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.allergen_ids.length) {
        const allergenArray = req.body.allergen_ids.map((allergen_id) => {
          return {
            menu_item_id: menuData.id,
            allergen_id,
          };
        });
        return Menu_item_allergens.bulkCreate(allergenArray);
      }
      // if no product tags, just respond
      res.status(200).json(menuData);
    })
    .then((allergenIds) => res.status(200).json(allergenIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
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
  allergen_ids: ARRAY of INT
}

*/
  try {
    console.log(req.body);
    const menuItem = await Menu_items.update(req.body, {
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
    await Menu_items.destroy({
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
