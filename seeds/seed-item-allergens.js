const { Menu_item_allergens } = require('../models');


const items = [
    {
        allergen_id: 3,
        menu_item_id: 10
    },
    {
        allergen_id: 2,
        menu_item_id: 1
    },
    {
        allergen_id: 6,
        menu_item_id: 1
    },
    {
        allergen_id: 4,
        menu_item_id: 1
    },
    {
        allergen_id: 2,
        menu_item_id: 3
    },
    {
        allergen_id: 7,
        menu_item_id: 3
    }
];

const seedMenuAllergens = () => Menu_item_allergens.bulkCreate(items);

module.exports = seedMenuAllergens;