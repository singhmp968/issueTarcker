const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
router.get("/", homeController.home);

router.use("/project", require("./projectRoute"));
router.use("/issue", require("./issueRoute"));

module.exports = router;
<<<<<<< HEAD
/// checking master
=======
>>>>>>> 475ad2789f5895f9fcf7296a63dee093010a8975
