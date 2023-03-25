const { Ticket_items } = require('../models');

const items = [
    {
        ticket_id: 1,
        menu_item_id: 3,
        notes: "test",
        quantity:3,
    },
    {
        ticket_id: 1,
        menu_item_id: 4,
        notes: "test",
        quantity: 1,
    }
];

const seedTicketItems = () => Ticket_items.bulkCreate(items);

module.exports = seedTicketItems;