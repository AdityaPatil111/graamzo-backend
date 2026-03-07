// const { db } = require("../config/firebase");

// // ADD TO CART
// exports.addToCart = async (req, res) => {
//   const { productId, quantity } = req.body;

//   const cartItem = {
//     userId: req.user.uid,
//     productId,
//     quantity,
//     createdAt: new Date(),
//   };

//   await db.collection("carts").add(cartItem);

//   res.json({ message: "Added to cart" });
// };

// // GET USER CART
// exports.getCart = async (req, res) => {
//   const snapshot = await db
//     .collection("carts")
//     .where("userId", "==", req.user.uid)
//     .get();

//   const cart = snapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   res.json(cart);
// };

import db from "../config/firebase.js";

export const addToCart = async (req, res) => {
  try {

    const doc = await db.collection("cart").add(req.body);

    res.json({
      message: "Added to cart",
      id: doc.id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCart = async (req, res) => {
  try {

    const snapshot = await db
      .collection("cart")
      .where("userId", "==", req.params.userId)
      .get();

    const cart = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(cart);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};