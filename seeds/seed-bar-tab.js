const { Bar_tabs } = require("../models");

const items = [
  {
    tab_name: "Joe Doe",
    paid: false,
    card_autorized: true,
    card_last_four: "3345",
    merchant_id: 1
  },
  {
    tab_name: "Full Stack Panteon Party ",
    paid: false,
    card_autorized: false,
    card_last_four: "",
    merchant_id: 1
  },
  {
    tab_name: "Full Stack Panteon Party 2",
    paid: false,
    card_autorized: false,
    card_last_four: "",
    merchant_id: 1
  },
  {
    tab_name: "Full Stack Panteon Party 3",
    paid: true,
    card_autorized: false,
    card_last_four: "",
    merchant_id: 1
  },
];

const seedBar = () => Bar_tabs.bulkCreate(items);

module.exports = seedBar;
