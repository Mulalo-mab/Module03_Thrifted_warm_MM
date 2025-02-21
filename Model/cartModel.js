import { pool } from "../config/config.js";

export const getCartItems = async (user_id) => {
    const [data] = await pool.query(`
        SELECT c.cart_id, p.name AS product_name, c.quantity, p.price, p.image_url
        FROM cart c
        JOIN Products p ON c.product_id = p.product_id
        WHERE c.user_id = ?`, [user_id]);
    return data;
};

export const addToCart = async (user_id, product_id, quantity) => {
    try {
        const [result] = await pool.query(`
            INSERT INTO cart (user_id, product_id, quantity) 
            VALUES (?, ?, ?) 
            ON DUPLICATE KEY UPDATE quantity = quantity + ?`, 
            [user_id, product_id, quantity, quantity]);
        return result;
    } catch (error) {
        console.error("Error in addToCart:", error);
        throw error;
    }
};

export const removeFromCart = async (user_id, product_id) => {
    try {
        const [result] = await pool.query(`
            DELETE FROM cart WHERE user_id = ? AND product_id = ?`, 
            [user_id, product_id]);
        return result;
    } catch (error) {
        console.error("Error in removeFromCart:", error);
        throw error;
    }
};

export const getCartTotal = async (user_id) => {
    const [result] = await pool.query(`
        SELECT SUM(p.price * c.quantity) AS total
        FROM cart c
        JOIN Products p ON c.product_id = p.product_id
        WHERE c.user_id = ?`, [user_id]);
    return result[0].total || 0;
};

// New function: Increase Quantity
export const increaseQuantity = async (user_id, product_id, quantity) => {
    try {
        const [result] = await pool.query(`
            UPDATE cart 
            SET quantity = quantity + ?
            WHERE user_id = ? AND product_id = ?`, 
            [quantity, user_id, product_id]);
        return result;
    } catch (error) {
        console.error("Error in increaseQuantity:", error);
        throw error;
    }
};
