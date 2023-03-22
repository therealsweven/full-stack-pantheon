const { Allergens } = require('../models');

const items = [
    {
        type: 'shellfish',
    },
    {
        type: 'milk',
    },
    {
        type: 'nuts',
    }
];

const seedAllergens = () => Allergens.bulkCreate(items);

module.exports = seedAllergens;