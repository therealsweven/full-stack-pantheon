const { Ticket } = require('../models');

const items = [
    {
        paid: false,
        tip_amount: 0.00,
        discount: 0.00,
        notes: "test open ticket",
        table_id: 1,
        tab_id: null,
        merchant_id: 1,
        employee_id: 1,
    },
    {
        paid: true,
        tip_amount: 2.00,
        discount: 0.00,
        notes: "test closed ticket",
        table_id: 1,
        tab_id: null,
        merchant_id: 1,
        employee_id: 1,
    },
];

const seedTicket = () => Ticket.bulkCreate(items);

module.exports = seedTicket;