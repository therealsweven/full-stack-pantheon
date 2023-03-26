const { Allergens } = require("../models");

const items = [
  {
    type: "shellfish",
  },
  {
    type: "fish",
  },
  {
    type: "milk",
  },
  {
    type: "eggs",
  },
  {
    type: "peanuts",
  },
  {
    type: "tree nuts",
  },
  {
    type: "wheat",
  },
  {
    type: "soy",
  },
];

const seedAllergens = () => Allergens.bulkCreate(items);

module.exports = seedAllergens;
