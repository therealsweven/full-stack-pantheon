const seedMenu = require('./seed-menu-items');
const seedMerchant = require('./seed-merchant');
const seedTables = require('./seed-tables');
const seedEmployee = require('./seed-employee');
const seedAllergens = require('./seed-allergens');
const seedMenuAllergens = require('./seed-item-allergens');
const seedTicket = require('./seed-tickets');
const seedTicketItems = require('./seed-ticket-items');

const sequelize = require('../config/connection');



const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedMerchant();
    console.log('\n----- EMPLOYEE SEEDED -----\n');

    await seedEmployee();
    console.log('\n----- EMPLOYEE SEEDED -----\n');

    await seedTables();
    console.log('\n----- TABLES SEEDED -----\n');

    await seedAllergens();
    console.log('\n----- ALLERGENS SEEDED -----\n');

    await seedMenu();
    console.log('\n----- MENU ITEMS SEEDED -----\n');

    await seedMenuAllergens();
    console.log('\n----- ITEM ALLERGENS SEEDED -----\n');

    await seedTicket();
    console.log('\n----- TICKETS SEEDED -----\n');

    await seedTicketItems();
    console.log('\n----- TICKET ITEMS SEEDED -----\n');

    process.exit(0);
};

seedAll();
