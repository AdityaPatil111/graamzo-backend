import express from "express";
import {
    createUserProfile,
    getUsers,
    getUserById
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create-profile", createUserProfile);

router.get("/get-users", getUsers);

router.get("/get-singal-user/:id", getUserById);

export default router;