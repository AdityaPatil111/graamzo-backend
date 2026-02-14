const { db } = require("../config/firebase");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const cartSnapshot = await db
      .collection("carts")
      .where("userId", "==", req.user.uid)
      .get();

    if (cartSnapshot.empty) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let total = 0;
    const items = [];

    for (let doc of cartSnapshot.docs) {
      const cartItem = doc.data();
      const productDoc = await db.collection("products").doc(cartItem.productId).get();

      const product = productDoc.data();

      const itemTotal = product.price * cartItem.quantity;
      total += itemTotal;

      items.push({
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        price: product.price,
      });
    }

    const order = {
      userId: req.user.uid,
      items,
      total,
      status: "pending",
      createdAt: new Date(),
    };

    const orderRef = await db.collection("orders").add(order);

    // Clear cart
    for (let doc of cartSnapshot.docs) {
      await db.collection("carts").doc(doc.id).delete();
    }

    res.status(201).json({ id: orderRef.id, ...order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET USER ORDERS
exports.getUserOrders = async (req, res) => {
  const snapshot = await db
    .collection("orders")
    .where("userId", "==", req.user.uid)
    .get();

  const orders = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.json(orders);
};
