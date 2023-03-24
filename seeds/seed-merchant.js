const { Merchant } = require("../models");

const items = [
  {
    business_name: "Aldos's Sports Bar",
    email: "borntobebobby@gmail.com",
    username: "merchnat1",
    password: "abc123",
  },
  {
    business_name: "Brewery",
    email: "borntobebobby@gmail.com",
    username: "merchnat2",
    password: "abc123",
  },
  // {
  //   "business_name": "Choctaw Cafe",
  //   "email": "borntobebobby@gmail.com",
  //   "username": "Choctaw",
  //   "password": "password123"
  // }
];

const seedMerchant = () => Merchant.bulkCreate(items);

module.exports = seedMerchant;
