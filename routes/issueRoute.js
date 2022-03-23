const express = require("express");
const router = express.Router();
const issueController = require("../controller/issueController");
router.post("/createIssue", issueController.createIssue);
module.exports = router;
