import express from "express";
import { getCartItemsCon, addToCartCon, getCartTotalCon } from "../Controller/cartController.js";

const router = express.Router();
router.get("/", getCartItemsCon);
router.post("/add", addToCartCon);
router.get("/total", getCartTotalCon);

export default router;
