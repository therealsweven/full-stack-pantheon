const { Merchant } = require("../models");

const items = [
  {
    location_name: "Aldos's Sports Bar",
    email: "borntobebobby@gmail.com",
    username: "merchnat1",
    password: "abc123",
  },
  {
    location_name: "Brewery",
    email: "borntobebobby@gmail.com",
    username: "merchnat2",
    password: "abc123",
  },
];

const seedMerchant = () => Merchant.bulkCreate(items);

module.exports = seedMerchant;
