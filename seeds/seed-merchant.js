const { Merchant } = require("../models");
const bcrypt = require("bcrypt");

////// SEED PASSWORDS ARE abc123

const seedMerchant = async () => {
  const password = await bcrypt.hash("abc123", 10);
  console.log(password);
  const items = [
    {
      business_name: "Aldos's Sports Bar",
      email: "borntobebobby@gmail.com",
      username: "merchant1",
      password: password,
      address: "1234 Who St",
      city: "Faraway",
      state: "Tejas",
      zip: "76210",
      phone: "(940)-231-8729",
    },
    {
      business_name: "Brewery",
      email: "robssimpson11@gmail.com",
      username: "merchant2",
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
  await Merchant.bulkCreate(items);
};
module.exports = seedMerchant;
