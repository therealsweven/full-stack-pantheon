const { Employee } = require('../models');

const items = [
    {
        name: "Admin",
        role: 'Admin',
        login_id: '1234',
        is_manager: true,
        merchant_id: 1,
    },
    {
        name: "Zeus",
        role: 'Bartender',
        login_id: '321',
        is_manager: false,
        merchant_id: 1,
    },
    {
        name: "Afroditi",
        role: 'Waiter',
        login_id: '1111',
        is_manager: false,
        merchant_id: 1,
    },
];

const seedEmployee = () => Employee.bulkCreate(items);

module.exports = seedEmployee;