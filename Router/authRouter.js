import express from "express";
import { registerCon, login } from "../controller/authCon.js";
const router = express.Router();
router.post("/register", registerCon);
router.post("/login", login)

export default router;