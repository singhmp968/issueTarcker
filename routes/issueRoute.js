const express = require("express");
const router = express.Router();
const issueController = require("../controller/issueController");
router.post("/createIssue", issueController.createIssue);
router.get("/reportIssue/:porjectId", issueController.reportPage);
module.exports = router;
