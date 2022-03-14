const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");
router.get("/create", projectController.createProject);
module.exports = router;
