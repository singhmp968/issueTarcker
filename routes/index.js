const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const homeController = require("../controller/homeController");
router.get("/", homeController.home);
module.exports = router;
