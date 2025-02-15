import { pool } from "../config/config.js";

const getAllOrders = async () => {
  const [data] = await pool.query("SELECT * FROM orders");
  return data;
};

const getOrderById = async (order_id) => {
  let [result] = await pool.query("SELECT * FROM orders WHERE order_id = ?", [order_id]);
  return result;
};

const insertOrder = async (user_id, total_price,status) => {
  await pool.query ("INSERT INTO orders (user_id, total_price,status) VALUES(?, ?, ?)", [user_id, total_price,status])

  return await getAllOrders();
}

const deleteOrder = async (order_id) => {
  let [result] = await pool.query("DELETE FROM orders WHERE order_id = ?",[order_id])

  return result;
}

const updateOrder =async (user_id, total_price, status, order_id) => {
  pool.query("UPDATE orders SET user_id=? , total_price=?, status=? WHERE order_id = ?", [user_id, total_price, status, order_id])

  return await getAllOrders()
}

export { getAllOrders, insertOrder, deleteOrder, updateOrder, getOrderById}