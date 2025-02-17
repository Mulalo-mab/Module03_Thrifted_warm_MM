import express from "express";
import { getPaymentsCon, getPaymentByIdCon, insertPaymentCon, deletePaymentCon, updatePaymentCon } from "../controller/paymentsCon.js";

const router = express.Router();

router.get("/", getPaymentsCon);
router.get("/:payment_id", getPaymentByIdCon)
router.post("/", insertPaymentCon);
router.delete("/:payment_id", deletePaymentCon);
router.put("/:payment_id", updatePaymentCon);

export default router;
