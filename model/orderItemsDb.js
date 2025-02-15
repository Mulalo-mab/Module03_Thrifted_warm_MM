import {pool} from "../config/config.js";

const getOrderItems = async () => {
    let [data] = await pool.query("SELECT * FROM order_items")
    return data
}


const insertOrderItems = async (order_id, product_id, quantity, price) => {
  await pool.query ("INSERT INTO order_items (order_id, product_id, quantity, price) VALUES(?, ?, ?, ?)", [order_id, product_id, quantity, price]);

  return await getOrderItems();
}

const deleteOrderItems = async (order_item_id) => {
    let [result] = await pool.query("DELETE FROM order_items WHERE order_item_id = ?",[order_item_id])
  
    return result;
  }

const updateOrderItems =async (order_id, product_id, quantity, price, order_item_id) => {
    pool.query("UPDATE order_items SET order_id=? , product_id=?, quantity=?, price= ? WHERE order_item_id = ?", [order_id, product_id, quantity, price, order_item_id])
  
    return await getOrderItems()
  }
  


export  {getOrderItems, insertOrderItems, deleteOrderItems, updateOrderItems}
