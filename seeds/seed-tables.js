const { Tables } = require("../models");

const items = [
  {
    table_name: "Table 1",
    max_size: 4,
    available: true,
    merchant_id: 1,
  },
  {
    table_name: "Table 2",
    max_size: 4,
    available: false,
    merchant_id: 1,
  },
  {
    table_name: "Booth 1",
    max_size: 6,
    available: true,
    merchant_id: 1,
  },
  {
    table_name: "Booth 2",
    max_size: 6,
    available: true,
    merchant_id: 1,
  },
  {
    table_name: "Patio 1",
    max_size: 6,
    available: true,
    merchant_id: 1,
  },
  {
    table_name: "Patio 2",
    max_size: 6,
    available: true,
    merchant_id: 1,
  },
  {
    table_name: "Patio 3",
    max_size: 6,
    available: true,
    merchant_id: 1,
  },
  {
    table_name: "Patio 4",
    max_size: 6,
    available: true,
    merchant_id: 1,
  },
  {
    table_name: "Patio 5",
    max_size: 6,
    available: true,
    merchant_id: 1,
  },
];

const seedTables = () => Tables.bulkCreate(items);

module.exports = seedTables;
