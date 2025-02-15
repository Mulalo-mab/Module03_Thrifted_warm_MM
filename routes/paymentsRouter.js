import express from "express";
import { getPaymentsCon, insertPaymentCon, deletePaymentCon, updatePaymentCon } from "../controller/paymentsCon.js";

const router = express.Router();

router.get("/", getPaymentsCon);
router.post("/", insertPaymentCon);
router.delete("/:payment_id", deletePaymentCon);
router.put("/:payment_id", updatePaymentCon);

export default router;
