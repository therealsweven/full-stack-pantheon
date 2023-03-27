const { Allergens } = require("../models");

const items = [
  {
    type: "Shellfish",
  },
  {
    type: "Fish",
  },
  {
    type: "Milk",
  },
  {
    type: "Eggs",
  },
  {
    type: "Peanuts",
  },
  {
    type: "Tree nuts",
  },
  {
    type: "Wheat",
  },
  {
    type: "Soy",
  },
];

const seedAllergens = () => Allergens.bulkCreate(items);

module.exports = seedAllergens;
