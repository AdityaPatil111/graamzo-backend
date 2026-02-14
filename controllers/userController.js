const { db } = require("../config/firebase");

exports.createProfile = async (req, res) => {
  try {
    const uid = req.user.uid;
    const email = req.user.email;

    await db.collection("users").doc(uid).set({
      email,
      role: "user", // default role
      createdAt: new Date()
    });

    res.json({ message: "User profile created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
