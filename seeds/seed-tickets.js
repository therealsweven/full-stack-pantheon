const { Ticket } = require("../models");

const items = [
  {
    paid: false,
    tip_amount: 0.0,
    discount: 0.0,
    notes: "test open ticket",
    table_id: 1,
    bar_tab_id: null,
    merchant_id: 1,
    employee_id: 1,
  },
  {
    paid: true,
    tip_amount: 2.0,
    discount: 0.0,
    notes: "test closed ticket",
    table_id: 1,
    bar_tab_id: null,
    merchant_id: 1,
    employee_id: 1,
  },
  {
    paid: false,
    tip_amount: 0.0,
    discount: 0.0,
    notes: "test bar ticket",
    table_id: null,
    bar_tab_id: 1,
    merchant_id: 1,
    employee_id: 1,
  },
  {
    paid: true,
    tip_amount: 0.0,
    discount: 0.0,
    notes: "closed test bar ticket",
    table_id: null,
    bar_tab_id: 2,
    merchant_id: 1,
    employee_id: 1,
  },
];

const seedTicket = () => Ticket.bulkCreate(items);

module.exports = seedTicket;
