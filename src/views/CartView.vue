<template>
  <div v-if="cartItems.length > 0" class="cart-container">
    <div class="cart-header">
      <div class="user-name">Hello, Guest!</div>
      <div class="cart-summary">
        <div class="total-price">Total: R{{ cartTotal | currency }}</div>
      </div>
    </div>
    <ul class="cart-items-list">
      <li v-for="item in cartItems" :key="item.cart_id" class="cart-item">
        <div class="cart-item-details">
          <img :src="item.image_url" alt="Product Image" class="cart-item-image" />
          <div class="item-info">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-quantity">Quantity: {{ item.quantity }}</div>
          </div>
        </div>
        <div class="item-actions">
          <button @click="removeFromCart(item.cart_id)" class="action-button remove">
            <i class="fas fa-trash"></i> Remove
          </button>
          <button @click="increaseQuantity(item.cart_id)" class="action-button increase">
            <i class="fas fa-plus-circle"></i> Increase Quantity
          </button>
          <button @click="decreaseQuantity(item.cart_id)" class="action-button decrease">
            <i class="fas fa-minus-circle"></i> Decrease Quantity
          </button>
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="empty-cart">
    <p>Your cart is empty.</p>
  </div>

</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
  },
  methods: {
    async removeFromCart(cart_id) {
      await this.$store.dispatch("removeFromCart", cart_id);
      this.$store.dispatch("fetchCartTotal");
    },
    async increaseQuantity(cart_id) {
      const item = this.cartItems.find((item) => item.cart_id === cart_id);
      if (item) {
        await this.$store.dispatch("updateCartItem", {
          cart_id: item.cart_id,
          quantity: Number(item.quantity) + 1,
        });
      }
      await this.$store.dispatch("fetchCartTotal"); 
    },

    async decreaseQuantity(cart_id) {
      const item = this.cartItems.find((item) => item.cart_id === cart_id);
      if (item && item.quantity > 1) {
        await this.$store.dispatch("updateCartItem", {
          cart_id: item.cart_id,
          quantity: Number(item.quantity) - 1,
        });
      }
      await this.$store.dispatch("fetchCartTotal");
    }
  },
  created() {
    this.$store.dispatch("fetchCart");
    this.$store.dispatch("fetchCartTotal");
  },
  watch: {
  cartTotal(newTotal) {
    console.log("Updated Cart Total:", newTotal);
  }
}
};
</script>

<style scoped>
.cart-container {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d48f5d; /* Warm brown for the winter theme */
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
}

.cart-summary {
  font-size: 16px;
}

.total-price {
  font-size: 20px;
  font-weight: bold;
}

.cart-items-list {
  list-style-type: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-item-details {
  display: flex;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 5px;
}

.item-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.item-quantity {
  color: #666;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.action-button {
  padding: 8px 15px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove {
  background-color: #e74c3c;
  color: white;
}

.increase {
  background-color: #27ae60;
  color: white;
}

.decrease {
  background-color: #f39c12;
  color: white;
}

.action-button i {
  margin-right: 5px;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  color: #666;
}
</style>


