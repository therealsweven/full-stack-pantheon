const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const posRoutes = require("./posRoutes");

router.use("/pos", posRoutes);
router.use("/api", apiRoutes);
router.use(homeRoutes);

module.exports = router;
