// // require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const orderRoutes = require("./routes/orderRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/products", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/orders", orderRoutes);
// const userRoutes = require("./routes/userRoutes");
// app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("E-commerce API running");
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

import cors from "cors";
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});