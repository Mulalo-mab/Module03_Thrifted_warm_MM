import express from "express";
import { registerCon, registerAdmin, login, adminLogin } from "../controller/authCon.js";

const router = express.Router();


router.post("/register", registerCon);
router.post("/login", login);
router.post("/admin/login", adminLogin);
router.post("/admin/register", registerAdmin); 

export default router;