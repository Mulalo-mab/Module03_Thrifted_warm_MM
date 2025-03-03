import dotenv from "dotenv";
import { registerUser, getUserByEmail } from "../Model/authDb.js";
import bcrypt from "bcryptjs";
dotenv.config();

// Register User (Default: user)
const registerCon = async (req, res) => {
    const { name, email, password, phone, address, role = "user" } = req.body;
    
    // Prevent creating an admin unless explicitly stated
    if (role !== "user" && role !== "admin") {
        return res.status(400).json({ error: "Invalid role specified" });
    }

    const result = await registerUser(name, email, password, phone, address, role);
    if (!result.success) return res.status(500).json({ error: result.error });

    res.json({ message: result.message });
};


// Admin Registration Route
const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    const existingAdmin = await getUserByEmail(email);
    if (existingAdmin) return res.status(400).json({ error: "Admin already exists" });

    const role = "admin";
    const result = await registerUser(name, email, password, null, null, role);
    if (!result.success) return res.status(500).json({ error: result.error });

    res.json({ success: true, message: "Admin registered successfully" });
};




// User Login
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user || user.role !== "user") return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    res.json({ user_id: user.user_id, role: user.role });
};

// Admin Login (Separate Route)
const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await getUserByEmail(email);
        if (!admin || admin.role !== "admin") return res.status(401).json({ error: "Admin not found" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid password" });

        res.json({ user_id: admin.user_id, role: admin.role });
    } catch (error) {
        console.error("Error in adminLogin:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export { registerCon, registerAdmin, login, adminLogin };
