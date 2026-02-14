const { db } = require("../config/firebase");

const isAdmin = async (req, res, next) => {
  const userDoc = await db.collection("users").doc(req.user.uid).get();

  if (!userDoc.exists || userDoc.data().role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }

  next();
};

module.exports = isAdmin;
