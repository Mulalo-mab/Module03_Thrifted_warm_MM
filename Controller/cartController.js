import { getCartItems, addToCart, getCartTotal } from "../Model/cartModel.js";

export const getCartItemsCon = async (req, res) => {
    try {
        const items = await getCartItems();
        res.json({ cart_items: items });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch cart items" });
    }
};

export const addToCartCon = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;  // Destructure user_id from the request
        console.log("Received data:", { user_id, product_id, quantity }); // Log incoming data
        await addToCart(user_id, product_id, quantity);  // Pass user_id to the model
        res.status(201).json({ message: "Product added to cart" });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ error: "Failed to add product to cart", details: error.message });  // Send error details back to the client
    }
};

export const getCartTotalCon = async (req, res) => {
    try {
        const total = await getCartTotal();
        res.json({ total_price: total });
    } catch (error) {
        res.status(500).json({ error: "Failed to calculate cart total" });
    }
};