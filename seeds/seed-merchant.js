const { Merchant } = require("../models");
const bcrypt = require("bcrypt");
const password = async () => {
  bcrypt.hash("abc123", 10);
};
console.log(password);
const items = [
  {
    business_name: "Aldos's Sports Bar",
    email: "borntobebobby@gmail.com",
    username: "merchant1",
    password: "abc123",
    address: "1234 Who St",
    city: "Faraway",
    state: "Tejas",
    zip: "76210",
    phone: "(940)-231-8729",
  },
  {
    business_name: "Brewery",
    email: "borntobebobby@gmail.com",
    username: "merchnat2",
    password: password,
    address: "4321 Whom Blvd",
    city: "Faraway",
    state: "New Yawk",
    zip: "22222",
    phone: "(212)-800-7450",
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
