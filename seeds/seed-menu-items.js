const { Menu_items } = require('../models');

const items = [
    {
        item_name: 'Large Pepperoni Pizza',
        price: 15.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "pizza",
        image: "https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go-500x375.jpg",
        merchant_id:1
    },
    {
        item_name: 'Hamburger',
        price: 10.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "dandheld",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
        merchant_id:1
    },
    {
        item_name: 'Hot Buffalo Wings',
        price: 12.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "appertizer",
        image: "https://www.thespruceeats.com/thmb/gXxOmyrw76vsaqjClOUm55cbZ0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-buffalo-hot-wings-recipe-100937-hero-01-611327a035df408fa3771fe8970d8521.jpg",
        merchant_id:1
    },
    {
        item_name: 'Philly Cheese Steak',
        price: 9.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://www.willcookforsmiles.com/wp-content/uploads/2022/09/Philly-Cheesesteak-closeup-sq.jpg",
        merchant_id:1
    },
    {
        item_name: 'BLT',
        price: 8.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
        merchant_id:1
    },
    {
        item_name: 'Chicken Parmesan',
        price: 9.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "main",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        merchant_id:1
    },
    {
        item_name: 'Nachos Grande',
        price: 7.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "apptizer",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFjaG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        merchant_id:1
    },
    {
        item_name: 'Grilled Salmon',
        price: 14.95,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "main",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
        merchant_id:1
    },
    {
        item_name: 'Shrimp Cilatro Wrap',
        price: 8.25,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/641473/pictures/large_cilantro-lime-shrimp-wraps.jpg",
        merchant_id:1
    },
    {
        item_name: 'Peanut Butter Sandwich',
        price: 6.99,
        description: "lorem",
        available: true,
        type: "food",
        subtype: "handheld",
        image: "https://www.baycare.net/media/5194/pbj-baycare-clinic-blog.jpg",
        merchant_id:1
    },
 {
        item_name: ' Long Island Iced Tea',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
     image: "https://www.winemag.com/wp-content/uploads/2022/06/Long_Island_Iced_Tea_GettyImages-547425658_1920x1280.jpg",
        merchant_id: 1
    }, 
    {
        item_name: ' Bloody Mary',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "https://images.unsplash.com/photo-1541546339599-ecdbfcf77378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80",
        merchant_id: 1
    },
    {
        item_name: 'Mojito',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "https://www.thespruceeats.com/thmb/LU-__sp56waXloMZvWpvs5aGDTM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mojito-cocktail-recipe-759319-hero-01-662400394a744a7fb1f01196ce60c05c.jpg",
        merchant_id: 1
    },
    {
        item_name: 'Margarita',
        price: 9.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "https://mixthatdrink.com/wp-content/uploads/2020/03/margarita-recipe.jpg",
        merchant_id: 1
    },
    {
        item_name: 'Mai Tai',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "https://www.liquor.com/thmb/dxEIgDSkmAAUbWzJ9yi8Ws_J-v8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mai-tai-720x720-primary-e09e24f1cacd4b3896f5aa32ba51dcdd.jpg",
        merchant_id: 1
    },
    {
        item_name: 'Moscow Mule ',
        price: 8.99,
        description: "lorem",
        available: true,
        type: "drinks",
        subtype: "handheld",
        image: "https://images.unsplash.com/photo-1633152685816-8cd4a7443c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        merchant_id: 1
    },
    {
        item_name: '$25 Gift Card',
        price: 25.00,
        description: "lorem",
        available: true,
        type: "merch",
        subtype: "",
        image: "",
        merchant_id: 1
    },
    {
        item_name: 'T-Shirt',
        price: 14.99,
        description: "lorem",
        available: true,
        type: "merch",
        subtype: "",
        image: "",
        merchant_id: 1
    },
];

const seedMenu = () => Menu_items.bulkCreate(items);

module.exports = seedMenu;