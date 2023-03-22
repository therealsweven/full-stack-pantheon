const router = require("express").Router();
const apiRoutes = require("./api");
const merchantRoutes = require("./merchantRoutes");

router.use("/api", apiRoutes);
router.use("/merchant", merchantRoutes);

module.exports = router;
