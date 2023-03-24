const { Bar_tabs } = require("../models");

const items = [
  {
    tab_name: "Some Alcoholic",
    paid: false,
    card_autorized: true,
    card_last_four: "3345",
  },
  {
    tab_name: "Full Stack Panteon Party ",
    paid: false,
    card_autorized: false,
    card_last_four: "",
  },
  {
    tab_name: "Full Stack Panteon Party 2",
    paid: false,
    card_autorized: false,
    card_last_four: "",
  },
  {
    tab_name: "Full Stack Panteon Party 3",
    paid: true,
    card_autorized: false,
    card_last_four: "",
  },
];

const seedBar = () => Bar_tabs.bulkCreate(items);

module.exports = seedBar;
