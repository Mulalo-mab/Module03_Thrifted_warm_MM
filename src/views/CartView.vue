<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">🛒 Your Cart</h1>
  
      <!-- Show message if cart is empty -->
      <div v-if="cartItems.length === 0" class="text-center">
        <p class="text-muted">Your cart is empty. Add some items!</p>
        <router-link to="/" class="btn btn-primary">Go Shopping</router-link>
      </div>
  
      <!-- Cart Items Table -->
      <div v-else class="cart-container">
        <div class="row cart-item" v-for="item in cartItems" :key="item.id">
          <div class="col-md-2">
            <img :src="item.image" class="cart-img" alt="Product Image" />
          </div>
          <div class="col-md-6">
            <h5>{{ item.name }}</h5>
            <p class="text-muted">R{{ item.price }}</p>
          </div>
          <div class="col-md-2 text-center">
            <button class="btn btn-danger" @click="removeFromCart(item.id)">
              <i class="fas fa-trash"></i> Remove
            </button>
          </div>
        </div>
  
        <!-- Cart Total -->
        <div class="cart-total">
          <h4>Total: <span class="text-success">R{{ totalPrice }}</span></h4>
          <button class="btn btn-success w-100">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: []
      };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
      }
    },
    methods: {
      removeFromCart(productId) {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
      }
    },
    mounted() {
      // Load cart items from localStorage or Vuex (for now, using dummy data)
      this.cartItems = JSON.parse(localStorage.getItem("cart")) || [
        { id: 1, name: "Men's Jacket", price: 150, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Women's Handbag", price: 180, image: "https://via.placeholder.com/150" }
      ];
    }
  };
  </script>
  
  <style scoped>
  .cart-container {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .cart-item {
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
  }
  
  .cart-img {
    width: 100%;
    max-height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .cart-total {
    padding-top: 20px;
    text-align: right;
  }
  </style>
  