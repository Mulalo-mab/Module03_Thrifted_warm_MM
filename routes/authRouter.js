import express from "express";
import { registerCon } from "../controller/authCon.js";
const router = express.Router();
router.post("/register", registerCon);

export default router;