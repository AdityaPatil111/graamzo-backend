// const express = require("express");
// const router = express.Router();
// const verifyToken = require("../middleware/authMiddleware");
// const orderController = require("../controllers/orderController");

// router.post("/", verifyToken, orderController.createOrder);
// router.get("/", verifyToken, orderController.getUserOrders);

// module.exports = router;

import express from "express";
import {
    createOrder,
    getOrders
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.get("/orders/:userId", getOrders);

export default router;