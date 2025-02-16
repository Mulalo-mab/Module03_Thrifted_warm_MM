
import dotenv from "dotenv";
import { registerUser} from "../model/authDb.js";

dotenv.config();
// Register User
 const registerCon = async (req, res) => {
    const { name, email, password, phone, address } = req.body;
    const result = await registerUser(name, email, password, phone, address);
    if (!result.success) return res.status(500).json({ error: result.error });
    res.json({ message: result.message });
};


export { registerCon };