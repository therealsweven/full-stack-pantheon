const { Tables } = require('../models');

const items = [
    {
        table_name: 'table 1',
        max_size: 4,
        available: true, 
        merchant_id: 1,
    },
    {
        table_name: 'table 2',
        max_size: 4,
        available: false, 
        merchant_id: 1,
    },
    {
        table_name: 'booth 1',
        max_size: 6,
        available: true, 
        merchant_id: 1,
    },
    {
        table_name: 'patio 1',
        max_size: 6,
        available: true,
        merchant_id: 1,
    },
];

const seedTables = () => Tables.bulkCreate(items);

module.exports = seedTables;