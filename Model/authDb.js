import {pool }from "../config/config.js";
import bcrypt from "bcryptjs";



const registerUser = async (name, email, password, phone, address) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const query = "INSERT INTO users (name, email, password, phone, address) VALUES (?, ?, ?, ?,?)";
        await pool.query(query, [name, email, hashedPassword, phone, address]);
        return { success: true, message: "User registered successfully" };
    } catch (error) {
        return { success: false, error: "Database error" };
    }
};

const getUserByUseId = async (user_id, email) => {
    try {
        const [results] = await pool.query("SELECT * FROM users WHERE user_id = ? AND email = ?", [user_id, email]);
        return results.length > 0 ? results[0] : null;
    } catch (error) {
        return null;
    }
};

export {getUserByUseId, registerUser }