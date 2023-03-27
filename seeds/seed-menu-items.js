const { Menu_items } = require('../models');

const items = [
    {
        item_name: 'Large Pepperoni Pizza',
        price: 15.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "pizza",
        image: "https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Hamburger',
        price: 10.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "dandheld",
        image: "https://media.giphy.com/media/ov84XDR9DQ6cv5ZgCR/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Hot Buffalo Wings',
        price: 12.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "appertizer",
        image: "https://media.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Philly Cheese Steak',
        price: 9.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://media.giphy.com/media/UrXTGJE68Oumn5v7t5/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'BLT',
        price: 8.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Chicken Parmesan',
        price: 9.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "main",
        image: "https://media.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Nachos Grande',
        price: 7.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "apptizer",
        image: "https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Grilled Salmon',
        price: 14.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "main",
        image: "https://media.giphy.com/media/ov84XDR9DQ6cv5ZgCR/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Shrimp Cilatro Wrap',
        price: 8.25,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://media.giphy.com/media/UrXTGJE68Oumn5v7t5/giphy.gif",
        merchant_id:1
    },
    {
        item_name: 'Peanut Butter Sandwich',
        price: 6.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://media.giphy.com/media/ov84XDR9DQ6cv5ZgCR/giphy.gif",
        merchant_id:1
    },
 {
        item_name: ' Long Island Iced Tea',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "alcoholic",
        image: "https://media.giphy.com/media/3osxYoufeOGOA7xiX6/giphy.gif",
        merchant_id: 1
    }, 
    {
        item_name: ' Bloody Mary',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "alcoholic",
        image: "https://media.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif",
        merchant_id: 1
    },
    {
        item_name: 'Mojito',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "alcoholic",
        image: "https://media.giphy.com/media/UrXTGJE68Oumn5v7t5/giphy.gif",
        merchant_id: 1
    },
    {
        item_name: 'Margarita',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "alcoholic",
        image: "https://media.giphy.com/media/ov84XDR9DQ6cv5ZgCR/giphy.gif",
        merchant_id: 1
    },
    {
        item_name: 'Mai Tai',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "alcoholic",
        image: "https://media.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif",
        merchant_id: 1
    },
    {
        item_name: 'Moscow Mule ',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "alcoholic",
        image: "https://media.giphy.com/media/ov84XDR9DQ6cv5ZgCR/giphy.gif",
        merchant_id: 1
    },
    {
        item_name: 'Gift Card',
        price: 25.00,
        description: "lorem",
        available: true,
        type: "other",
        subtype: "gift",
        image: "https://media.giphy.com/media/ov84XDR9DQ6cv5ZgCR/giphy.gif",
        merchant_id: 1
    },
    {
        item_name: 'T-shirt',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "other",
        subtype: "wear",
        image: "https://media.giphy.com/media/ov84XDR9DQ6cv5ZgCR/giphy.gif",
        merchant_id: 1
    },
];

const seedMenu = () => Menu_items.bulkCreate(items);

module.exports = seedMenu;