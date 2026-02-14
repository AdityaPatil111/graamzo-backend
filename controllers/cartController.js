const { db } = require("../config/firebase");

// ADD TO CART
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cartItem = {
    userId: req.user.uid,
    productId,
    quantity,
    createdAt: new Date(),
  };

  await db.collection("carts").add(cartItem);

  res.json({ message: "Added to cart" });
};

// GET USER CART
exports.getCart = async (req, res) => {
  const snapshot = await db
    .collection("carts")
    .where("userId", "==", req.user.uid)
    .get();

  const cart = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.json(cart);
};
