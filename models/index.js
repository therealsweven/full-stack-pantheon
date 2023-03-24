// import models
const Menu_items = require("./Menu_items");
const Ticket = require("./Ticket");
const Ticket_items = require("./Ticket_items");
const Tables = require("./Tables");
const Bar_tabs = require("./Bar_tabs");
const Employee = require("./Employee");
const Merchant = require("./Merchant");
const Allergens = require("./Allergens");
const Menu_item_allergens = require("./Menu_item_allergens");
const Transactions = require("./Transactions");

//Merchant access
Menu_items.belongsTo(Merchant, {
  foreignKey: "merchant_id",
});
Ticket.belongsTo(Merchant, {
  foreignKey: "merchant_id",
});
Employee.belongsTo(Merchant, {
  foreignKey: "merchant_id",
});
Tables.belongsTo(Merchant, {
  foreignKey: "merchant_id",
});
Bar_tabs.belongsTo(Merchant, {
  foreignKey: "merchant_id",
});
Transactions.belongsTo(Merchant, {
  foreignKey: "merchant_id",
});

//Ticket items
Menu_items.belongsToMany(Ticket, {
  through: Ticket_items,
  foreignKey: "menu_item_id",
});
Ticket.belongsToMany(Menu_items, {
  through: Ticket_items,
  foreignKey: "ticket_id",
});

//Tables - Tabs
Ticket.belongsTo(Tables, {
  foreignKey: "table_id",
});
Ticket.belongsTo(Bar_tabs, {
  foreignKey: "bar_tab_id",
});
Ticket.belongsTo(Employee, {
  foreignKey: "employee_id",
});
Bar_tabs.hasMany(Ticket);
Tables.hasMany(Ticket);
//Employee tickets

//Allergens
Menu_items.belongsToMany(Allergens, {
  through: Menu_item_allergens,
  foreignKey: "menu_item_id",
});
Allergens.belongsToMany(Menu_items, {
  through: Menu_item_allergens,
  foreignKey: "allergen_id",
});

//Transactions
Transactions.belongsTo(Ticket, {
  foreignKey: "ticket_id",
});

module.exports = {
  Menu_items,
  Ticket,
  Merchant,
  Tables,
  Bar_tabs,
  Employee,
  Allergens,
  Ticket_items,
  Transactions,
  Menu_item_allergens,
};
