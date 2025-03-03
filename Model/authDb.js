import { pool } from "../config/config.js";
import bcrypt from "bcryptjs";

// Register User (or Admin)
const registerUser = async (name, email, password, phone, address, role = "user") => {
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const query = "INSERT INTO users (name, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?)";
        await pool.query(query, [name, email, hashedPassword, phone, address, role]);
        return { success: true, message: `${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully` };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Database error" };
    }
};

// Get user by email
const getUserByEmail = async (email) => {
    try {
        const [results] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        return results.length > 0 ? results[0] : null;
    } catch (error) {
        return null;
    }
};

export { registerUser, getUserByEmail };
