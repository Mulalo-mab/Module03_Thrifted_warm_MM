<template>
    <div>
      <h1 class="text-3xl font-bold mb-4">Your Cart</h1>
  
      <div v-if="cartItems.length === 0" class="text-lg">Your cart is empty.</div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.product_id" class="border rounded-lg p-4 mb-4 shadow">
          <img :src="item.image_url" alt="Product Image" class="w-full h-48 object-cover mb-2" />
          <h2 class="text-xl font-semibold">{{ item.name }}</h2>
          <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
          <p class="text-lg font-bold">R {{ item.price * item.quantity }}</p>
        </div>
        <div class="mt-4 text-lg font-bold">
          Total: R {{ cartTotal }}
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart; // Access cart from Vuex
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('removeFromCart', productId); // Dispatch remove action
    }
  }
};
</script>
  