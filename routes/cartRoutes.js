// const express = require("express");
// const router = express.Router();
// const verifyToken = require("../middleware/authMiddleware");
// const cartController = require("../controllers/cartController");

// router.post("/", verifyToken, cartController.addToCart);
// router.get("/", verifyToken, cartController.getCart);

// module.exports = router;

import express from "express";
import {
    addToCart,
    getCart
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/cart/:userId", getCart);

export default router;