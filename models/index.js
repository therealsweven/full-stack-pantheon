// import models
const Menu_items = require('./Menu_items');
const Ticket = require('./Ticket');
const Ticket_items = require('./Ticket_items');
const Tables = require('./Tables');
const Bar_tabs = require('./Bar_tabs');
const Employee = require('./Employee');
const Merchnat = require('./Merchnat');
const Allergens = require('./Allergens');
const Menu_item_allergens = require('./Menu_item_allergens');
const Transactions = require('./Transactions');

//Merchant access
Menu_items.belongsTo(Merchnat);
Ticket.belongsTo(Merchnat);
Employee.belongsTo(Merchant);
Tables.belongsTo(Merchnat);
Bar_tabs.belongsTo(Merchnat);
Transactions.belongsTo(Merchnat);

//Ticket items
Menu_items.belongsToMany(Ticket, {through: Ticket_items});
Ticket.hasMany(Menu_items, {through: Ticket_items});

//Tables - Tabs
Ticket.belongsTo(Tables);
Ticket.belongsTo(Bar_tabs);
Ticket.belongsTo(Employee);

//Employee tickets
Employee.hasMany(Ticket);

//Allergens
Menu_items.belongsToMany(Allergens, {through: Menu_item_allergens});
Allergens.belongsToMany(Menu_items, {through: Menu_item_allergens});

//Transactions
Transactions.belongsTo(Ticket);

module.exports = {
  Menu_items,
  Ticket,
  Merchnat,
  Tables,
  Bar_tabs,
  Employee,
  Allergens,
  Ticket_items,
  Transactions
};
