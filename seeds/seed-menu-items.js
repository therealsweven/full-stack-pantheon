const { Menu_items } = require('../models');

const items = [
    {
        item_name: 'Large Pepperoni Pizza',
        price: 15.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "pizza",
        image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        merchant_id:1
    },
    {
        item_name: 'Hamburger',
        price: 10.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "dandheld",
        image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        merchant_id:1
    },
    {
        item_name: 'Hot Buffalo Wings',
        price: 12.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "appertizer",
        image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
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
        item_name: 'Chicken Parmesan',
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
 {
        item_name: ' Long Island Iced Tea',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "",
        merchant_id: 1
    }, 
    {
        item_name: ' Bloody Mary',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "",
        merchant_id: 1
    },
    {
        item_name: 'Mojito',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "",
        merchant_id: 1
    },
    {
        item_name: 'Margarita',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "",
        merchant_id: 1
    },
    {
        item_name: 'Mai Tai',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "",
        merchant_id: 1
    },
    {
        item_name: 'Moscow Mule ',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "",
        merchant_id: 1
    },

];

const seedMenu = () => Menu_items.bulkCreate(items);

module.exports = seedMenu;