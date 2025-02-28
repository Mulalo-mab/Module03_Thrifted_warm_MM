<template>
  <div class="relative">
    <router-link to="/cart" class="relative">
      <!-- Cart Icon -->
      <LucideShoppingCart class="w-8 h-8 text-gray-700 hover:text-blue-500 transition" />

      <!-- Cart Count Badge -->
      <span 
        v-if="cartCount > 0" 
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ cartCount }}
      </span>
    </router-link>
  </div>
</template>

<script>
import { ShoppingCart as LucideShoppingCart } from "lucide-vue-next";

export default {
  name: "Cart",
  components: { LucideShoppingCart },
  computed: {
    cartCount() {
      return this.$store.state.cart.reduce((total, item) => total + Number(item.quantity), 0);
    },
  },
};
</script>
