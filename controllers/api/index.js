const router = require("express").Router();
const ticketRoutes = require("./ticketRoutes");
const employeeRoutes = require("./employeeRoutes");
const menuRoutes = require("./menuRoutes");
const merchantRoutes = require("./merchantRoutes");

router.use("/tickets", ticketRoutes);
router.use("/employees", employeeRoutes);
router.use("/menu", menuRoutes);
router.use("/merchant", merchantRoutes);

module.exports = router;
