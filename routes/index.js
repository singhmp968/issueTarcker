const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
router.get("/", homeController.home);

router.use("/project", require("./projectRoute"));
router.use("/issue", require("./issueRoute"));

module.exports = router;
/// checking master
