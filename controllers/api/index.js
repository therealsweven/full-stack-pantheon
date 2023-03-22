const router = require("express").Router();
const ticketRoutes = require("./ticketRoutes");
const employeeRoutes = require("./employeeRoutes");
const menuRoutes = require("./menuRoutes");

router.use("/tickets", ticketRoutes);
router.use("/employees", employeeRoutes);
router.use("/menu", menuRoutes);

module.exports = router;
