const router = require("express").Router();
const ticketRoutes = require("./ticketRoutes");
const employeeRoutes = require("./employeeRoutes");
const menuRoutes = require("./menuRoutes");
const merchantRoutes = require("./merchantRoutes");
const tableRoutes = require("./tableRoutes");
const tabRoutes = require("./tabRoutes");

router.use("/tickets", ticketRoutes);
router.use("/employee", employeeRoutes);
router.use("/menu", menuRoutes);
router.use("/merchant", merchantRoutes);
router.use("/tables", tableRoutes);
router.use("/tabs", tabRoutes)

module.exports = router;
