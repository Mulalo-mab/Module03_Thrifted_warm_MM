import { pool } from "../config/config.js"

export const getCartItems = async () => {
    const [data] = await pool.query(`
        SELECT c.cart_id, p.name AS product_name, c.quantity, p.price
        FROM cart c
        JOIN Products p ON c.product_id = p.product_id`);
    return data;
};

export const addToCart = async (user_id, product_id, quantity) => {
    try {
        // Ensure you insert the user_id, product_id, and quantity
        const [result] = await pool.query(`
            INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)`, 
            [user_id, product_id, quantity]);
        console.log("Cart item added:", result);  // Log the result for debugging
        return result;
    } catch (error) {
        console.error("Error in addToCart query:", error);
        throw error; // Re-throw the error so it can be handled by the controller
    }
};


export const getCartTotal = async () => {
    const [result] = await pool.query(`
        SELECT SUM(p.price * c.quantity) AS total
        FROM cart c
        JOIN Products p ON c.product_id = p.product_id`);
    return result[0].total || 0;
};
