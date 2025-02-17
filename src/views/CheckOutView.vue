<template>
    <div class="checkout">
      <h1>Checkout</h1>
      <form @submit.prevent="submitOrder">
        <!-- Shipping Address Section -->
        <div class="form-section">
          <h2>Shipping Address</h2>
          <label for="name">Full Name</label>
          <input type="text" v-model="form.name" id="name" required />
  
          <label for="address">Address</label>
          <input type="text" v-model="form.address" id="address" required />
  
          <label for="city">City</label>
          <input type="text" v-model="form.city" id="city" required />
  
          <label for="zipcode">Zip Code</label>
          <input type="text" v-model="form.zipcode" id="zipcode" required />
  
          <label for="country">Country</label>
          <input type="text" v-model="form.country" id="country" required />
        </div>
  
        <!-- Payment Information Section -->
        <div class="form-section">
          <h2>Payment Information</h2>
          <label for="cardNumber">Card Number</label>
          <input type="text" v-model="form.cardNumber" id="cardNumber" required />
  
          <label for="expiry">Expiry Date</label>
          <input type="text" v-model="form.expiry" id="expiry" required />
  
          <label for="cvv">CVV</label>
          <input type="text" v-model="form.cvv" id="cvv" required />
        </div>
  
        <!-- Order Summary Section -->
        <div class="order-summary">
          <h2>Order Summary</h2>
          <p><strong>Items:</strong> {{ totalItems }} items</p>
          <p><strong>Total:</strong> ${{ totalPrice.toFixed(2) }}</p>
        </div>
  
        <button type="submit" class="submit-btn">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          address: '',
          city: '',
          zipcode: '',
          country: '',
          cardNumber: '',
          expiry: '',
          cvv: '',
        },
        items: [
          // Example items in the cart, replace with dynamic data
          { name: 'Winter Jacket', price: 45.99 },
          { name: 'Boots', price: 79.99 },
        ],
      };
    },
    computed: {
      totalItems() {
        return this.items.length;
      },
      totalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
      },
    },
    methods: {
      submitOrder() {
        // Here, handle order submission logic
        alert('Order placed successfully!');
        // You can also send the form data to a backend server here
      },
    },
  };
  </script>
  
  <style scoped>
  .checkout {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-section {
    margin-bottom: 20px;
  }
  
  .form-section label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-section input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .order-summary {
    margin-top: 20px;
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 5px;
  }
  
  .submit-btn {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #218838;
  }
  </style>
  