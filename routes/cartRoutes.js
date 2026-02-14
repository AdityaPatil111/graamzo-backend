const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const cartController = require("../controllers/cartController");

router.post("/", verifyToken, cartController.addToCart);
router.get("/", verifyToken, cartController.getCart);

module.exports = router;
