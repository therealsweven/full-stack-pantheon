const { Menu_item_allergens } = require('../models/Menu_item_allergens');


const items = [
    {
        allergen_id: 3,
        menu_item_id: 10
    },
    {
        allergen_id: 2,
        menu_item_id: 1
    }
];

const seedMenuAllergens = () => Menu_item_allergens.bulkCreate(items);

module.exports = seedMenuAllergens;