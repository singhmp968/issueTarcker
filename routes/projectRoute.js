const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");
router.get("/createprojectpage", projectController.createProjectform);
router.post("/create", projectController.create);
router.get("/issue", projectController.issue);

module.exports = router;
