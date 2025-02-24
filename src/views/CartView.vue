<template>
  <div v-if="cartItems.length > 0">
    <div>Total: {{ cartTotal }}</div>
    <ul>
      <li v-for="item in cartItems" :key="item.product_id">
        <div>
          <img :src="item.image_url" alt="Product Image" width="100" />
          <div>{{ item.name }} - Quantity: {{ item.quantity }} </div>
          <button @click="removeFromCart(item.product_id)">Remove</button>
          <button @click="increaseQuantity(item.product_id)">Increase Quantity</button>
          <button @click="decreaseQuantity(item.product_id)">Decrease Quantity</button>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    Your cart is empty.
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
    }
  },
  methods: {
    async removeFromCart(productId) {
      await this.$store.dispatch("removeFromCart", productId);
      this.$store.dispatch("fetchCartTotal");
    },
    async increaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.product_id === productId);
      if (item) {
        await this.$store.dispatch("UPDATE_ITEM_QUANTITY", {
          productId: item.product_id,
          newQuantity: item.quantity + 1,
        });
      }
      this.$store.dispatch("fetchCartTotal");
    },
    async decreaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.product_id === productId);
      if (item && item.quantity > 1) {
        await this.$store.dispatch("UPDATE_ITEM_QUANTITY", {
          productId: item.product_id,
          newQuantity: item.quantity - 1,
        });
      }
      this.$store.dispatch("fetchCartTotal");
    }
  },
  created() {
    this.$store.dispatch("fetchCart");
    this.$store.dispatch("fetchCartTotal");
  }
};
</script>
