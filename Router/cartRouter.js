import express from "express";
import { getCartItemsCon, addToCartCon, removeFromCartCon, getCartTotalCon, increaseQuantityCon } from "../Controller/cartController.js";

const router = express.Router();
router.get("/", getCartItemsCon);
router.post("/add", addToCartCon);
router.post("/remove", removeFromCartCon);
router.get("/total", getCartTotalCon);
router.patch('/increase', increaseQuantityCon); 

export default router;
