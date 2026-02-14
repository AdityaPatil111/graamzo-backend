const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

router.post("/create-profile", verifyToken, userController.createProfile);

module.exports = router;
