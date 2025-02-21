import { 
    getCartItems, 
    addToCart, 
    removeFromCart, 
    getCartTotal, 
    increaseQuantity 
} from "../Model/cartModel.js";

export const getCartItemsCon = async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const items = await getCartItems(user_id);
        res.json({ cart_items: items });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch cart items" });
    }
};

export const addToCartCon = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;
        await addToCart(user_id, product_id, quantity);
        res.status(201).json({ message: "Product added to cart" });
    } catch (error) {
        res.status(500).json({ error: "Failed to add product to cart" });
    }
};

export const removeFromCartCon = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        await removeFromCart(user_id, product_id);
        res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
        res.status(500).json({ error: "Failed to remove product from cart" });
    }
};

export const getCartTotalCon = async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const total = await getCartTotal(user_id);
        res.json({ total_price: total });
    } catch (error) {
        res.status(500).json({ error: "Failed to calculate cart total" });
    }
};

// New Controller: Increase Quantity
export const increaseQuantityCon = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;
        await increaseQuantity(user_id, product_id, quantity);
        res.status(200).json({ message: "Quantity increased successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to increase quantity" });
    }
};
