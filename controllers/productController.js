// const { db } = require("../config/firebase");

// // CREATE PRODUCT (Admin)
// exports.createProduct = async (req, res) => {
//   try {
//     const product = {
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       image: req.body.image,
//       stock: req.body.stock,
//       createdAt: new Date(),
//     };

//     const docRef = await db.collection("products").add(product);

//     res.status(201).json({ id: docRef.id, ...product });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // GET ALL PRODUCTS
// exports.getProducts = async (req, res) => {
//   const snapshot = await db.collection("products").get();
//   const products = snapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   res.json(products);
// };

// // GET SINGLE PRODUCT
// exports.getProductById = async (req, res) => {
//   const doc = await db.collection("products").doc(req.params.id).get();

//   if (!doc.exists) return res.status(404).json({ message: "Not found" });

//   res.json({ id: doc.id, ...doc.data() });
// };

// // UPDATE PRODUCT (Admin)
// exports.updateProduct = async (req, res) => {
//   await db.collection("products").doc(req.params.id).update(req.body);
//   res.json({ message: "Product updated" });
// };

// // DELETE PRODUCT (Admin)
// exports.deleteProduct = async (req, res) => {
//   await db.collection("products").doc(req.params.id).delete();
//   res.json({ message: "Product deleted" });
// };

import db from "../config/firebase.js";
export const createProduct = async (req, res) => {
  try {
    const doc = await db.collection("products").add(req.body);

    res.json({
      message: "Product created",
      id: doc.id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {

    const snapshot = await db.collection("products").get();

    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching products"
    });

  }
};

export const getProduct = async (req, res) => {
  try {

    const doc = await db.collection("products").doc(req.params.id).get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      id: doc.id,
      ...doc.data()
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};