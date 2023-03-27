/*
employee login  /pos/login
tables   /pos/tables
main  /pos/main
admin /pos/admin
*/
const {
  Bar_tabs,
  Ticket,
  Menu_items,
  Employee,
  Merchant,
  Ticket_items,
  Allergens,
  Tables,
} = require("../models");
const router = require("express").Router();
const Op = require("sequelize").Op;

// employee login page
router.get("/login", (req, res) => {
  try {
    res.status(200).render("userLogin");
  } catch (err) {
    res.status(500).json(err);
  }
});

// table/tab select page
router.get("/tables", async (req, res) => {
  try {
    const tablesData = await Tables.findAll({
      where: { merchant_id: req.session.currentMerchant },
    });
    const tables = tablesData.map((element) => element.get({ plain: true }));
    console.log(tables);
    const tabData = await Ticket.findAll({
      where: {
        paid: false,
        bar_tab_id: { [Op.ne]: null },
      },
      include: [{ model: Bar_tabs }],
    });
    const tickets = tabData.map((element) => element.get({ plain: true }));
    console.log(tickets[0].bar_tab.tab_name);
    console.log(tickets);
    res.status(200).render("tableMap", { tickets, tables });
  } catch (err) {
    res.status(500).json(err);
  }
});

// main pos landing page for putting in orders
router.get("/main/:id", async (req, res) => {
  try {
    // pull ticket info
    const ticketData = await Ticket.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Menu_items,
          attributes: ["item_name", "price"],
        },
        {
          model: Employee,
          attributes: ["name"],
        },
      ],
    });
    // console.log(ticketData);
    const ticket = ticketData.get({ plain: true });
    // console.log(ticket);

    // pull menu items
    const menuItemsData = await Menu_items.findAll({
      where: {
        merchant_id: req.session.currentMerchant,
      },
      include: [
        {
          model: Allergens,
          attributes: ["type"],
        },
      ],
    });
    // create empty array for menu items
    const menuItems = [];
    // serialize menu item data
    for (i = 0; i < menuItemsData.length; i++) {
      menuItems[i] = menuItemsData[i].get({ plain: true });
    }
    console.log(menuItems);
    //res.status(200).render("landingPage", { ticket, menuItems });
    res.status(200).json({ ticket, menuItems });
  } catch (err) {
    res.status(500).json(err);
  }
});

// checkout page
router.get("/checkout/:id", async (req, res) => {
  try {
    const ticketData = await Ticket.findOne({
      where: {
        id: req.params.id,
      },
      // attributes:[
      //   ""
      // ],
      include: [
        {
          model: Menu_items,
          attributes: ["item_name", "price"],
        },
        {
          model: Employee,
          attributes: ["name"],
        },
        {
          model: Merchant,
          attributes: [
            "business_name",
            "email",
            "address",
            "city",
            "state",
            "zip",
            "phone",
          ],
        },
      ],
    });
    console.log(ticketData);
    const ticket = ticketData.get({ plain: true });
    console.log(ticket);

    //res.status(200).json(ticket);
    res.status(200).render("checkout", ticket);
  } catch (err) {
    res.status(500).json(err);
  }
});

// admin page
router.get("/admin", (req, res) => {
  try {
    res.status(200).render("admin");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
