const { Menu_items } = require('../models');

const items = [
    {
        item_name: 'Large Pepperoni Pizza',
        price: 15.00,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "pizza",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Hamburger',
        price: 10.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "dandheld",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Hot Buffalo Wings',
        price: 12.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "appertizer",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Philly Cheese Steak',
        price: 9.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'BLT',
        price: 8.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Parmesan Chicken',
        price: 9.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "main",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Nachos Grande',
        price: 7.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "apptizer",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Grilled Salmon',
        price: 14.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "main",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Shrimp Cilatro Wrap',
        price: 8.25,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "",
        merchant_id:1
    },
    {
        item_name: 'Peanut Butter Sandwich',
        price: 6.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "",
        merchant_id:1
    },
];

const seedMenu = () => Menu_items.bulkCreate(items);

module.exports = seedMenu;