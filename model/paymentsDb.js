import { pool } from "../config/config.js";

const getPayments = async () => {
    let [data] = await pool.query("SELECT * FROM payments");
    return data;
};

const insertPayment = async (order_id, amount, method, status) => {
    await pool.query(
        "INSERT INTO payments (order_id, amount, method, status, payment_date) VALUES (?, ?, ?, ?, NOW())",
        [order_id, amount, method, status]
    );

    return await getPayments();
};

const deletePayment = async (payment_id) => {
    let [result] = await pool.query("DELETE FROM payments WHERE payment_id = ?", [payment_id]);
    return result;
};

const updatePayment = async (order_id, amount, method, status, payment_id) => {
    await pool.query(
        "UPDATE payments SET order_id = ?, amount = ?, method = ?, status = ? WHERE payment_id = ?",
        [order_id, amount, method, status, payment_id]
    );

    return await getPayments();
};

export { getPayments, insertPayment, deletePayment, updatePayment };
