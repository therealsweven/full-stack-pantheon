const { Menu_item_allergens } = require('../models');


const items = [
    {
        allergen_id: 3,
        menu_item_id: 1
    },
    {
        allergen_id: 7,
        menu_item_id: 1
    },
    {
        allergen_id: 3,
        menu_item_id: 4
    },
    {
        allergen_id: 7,
        menu_item_id: 4
    },
    {
        allergen_id: 5,
        menu_item_id: 10
    },
    {
        allergen_id: 7,
        menu_item_id: 5
    },
    {
        allergen_id: 2,
        menu_item_id: 8
    },
    {
        allergen_id: 1,
        menu_item_id: 9
    }
];

const seedMenuAllergens = () => Menu_item_allergens.bulkCreate(items);

module.exports = seedMenuAllergens;