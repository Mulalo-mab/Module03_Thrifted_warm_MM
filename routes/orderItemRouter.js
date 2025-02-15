import express from "express"
import { getOrderItemsCon, insertOrderItemsCon, deleteOrderItemsCon, updateOrderItemsCon } from "../controller/orderItemCon.js"


const router = express.Router()
router.get("/", getOrderItemsCon)
router.post("/", insertOrderItemsCon)
router.delete("/:order_item_id", deleteOrderItemsCon)
router.put("/:order_item_id", updateOrderItemsCon)

export default router