import db from "../config/firebase.js";


// CREATE USER
export const createUserProfile = async (req, res) => {
  try {

    const { name, email, phone, address } = req.body;

    const userData = {
      name,
      email,
      phone: phone || "",
      address: address || "",
      createdAt: new Date()
    };

    const docRef = await db.collection("users").add(userData);

    res.status(201).json({
      success: true,
      message: "User created",
      userId: docRef.id
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error creating user"
    });

  }
};



// GET ALL USERS
export const getUsers = async (req, res) => {
  try {

    const snapshot = await db.collection("users").get();

    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching users"
    });

  }
};



// GET SINGLE USER
export const getUserById = async (req, res) => {
  try {

    const { id } = req.params;

    const doc = await db.collection("users").doc(id).get();

    if (!doc.exists) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      data: {
        id: doc.id,
        ...doc.data()
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching user"
    });

  }
};