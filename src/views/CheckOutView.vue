<template>
  <div class="checkout">
    <h2>Checkout</h2>
    <div v-if="userDetails">
      <h3>User Information</h3>
      <p><strong>Name:</strong> {{ userDetails.name }}</p>
      <p><strong>Email:</strong> {{ userDetails.email }}</p>
      <h3>Shipping Information</h3>
      <div v-if="userDetails.address">
        <p><strong>Address:</strong> {{ userDetails.address }}</p>
        <p><strong>City:</strong> {{ userDetails.city }}</p>
        <p><strong>Postal Code:</strong> {{ userDetails.postal_code }}</p>
        <p><strong>Country:</strong> {{ userDetails.country }}</p>
      </div>
      <div v-else>
        <p class="error">No shipping details found. Please add your shipping details.</p>
        <input v-model="shipping.name" placeholder="Name" required />
        <input v-model="shipping.address" placeholder="Address" required />
        <input v-model="shipping.city" placeholder="City" required />
        <input v-model="shipping.zipcode" placeholder="Zip Code" required />
        <input v-model="shipping.country" placeholder="Country" required />
      </div>
    </div>
    <h3>Order Items</h3>
    <div v-for="item in order_items" :key="item.product_id">
      <img :src="item.image_url" alt="Product Image" />
      <p>{{ item.quantity }} x Product {{ item.product_id }} - ${{ item.price }}</p>
    </div>
    <h3>Total Price: ${{ totalPrice }}</h3>
    <button @click="placeOrder">Place Order</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userDetails: null,
      order_items: [],
      totalPrice: 0,
      shipping: {
        address: "",
        city: "",
        postal_code: "",
        country: "",
      },
    };
  },
  async created() {
    const userId = localStorage.getItem("user_id");
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/checkout/${userId}`);
    this.userDetails = response.data.userDetails;
    this.order_items = response.data.order_items;
    this.totalPrice = this.order_items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
  methods: {
    async placeOrder() {
      const userId = localStorage.getItem("user_id");
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/checkout`, {
          user_id: userId,
          items: this.order_items,
          total_price: this.totalPrice,
          shipping_details: this.userDetails.address
            ? this.userDetails
            : this.shipping,
        });
        if (response.data.success) {
          this.$router.push({ name: "Payment", params: { orderId: response.data.order_id } });
        } else {
          alert("Failed to place order.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while placing the order.");
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
</style>







