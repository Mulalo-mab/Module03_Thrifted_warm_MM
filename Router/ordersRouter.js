import express from "express"
import {getOrdersCon, insertOrderCon, deleteOrderCon, updateOrderCon, getOrderByIdCon} from "../controller/ordersCon.js"
// import { getOrdersCon } from "../controller/ordersCon.js"

const router = express.Router()

router.get("/", getOrdersCon)
router.get("/:order_id", getOrderByIdCon)
router.post("/", insertOrderCon)
router.delete("/:order_id", deleteOrderCon)
router.put("/:order_id", updateOrderCon)


export default router