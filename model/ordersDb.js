import { pool } from "../config/config.js";

const getAllOrders = async () => {
  const [data] = await pool.query("SELECT * FROM orders");
  return data;
};

const getOrderById = async (order_id) => {
  let [result] = await pool.query(`SELECT o.total_price, oi.quantity, oi.price, p.name, p.description, p.size, p.color, p.price, p.image_url, pc.category_name
    FROM orders AS o
    INNER JOIN order_items AS oi
    ON o.order_id = oi.order_id
    INNER JOIN products AS p
    ON oi.product_id = p.product_id
    INNER JOIN product_categories AS pc
    ON p.category_id = pc.category_id
    WHERE o.order_id = ?`, [order_id]);
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