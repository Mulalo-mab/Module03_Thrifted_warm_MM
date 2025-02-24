<template>
  <div>
    <router-link to="/cart" class="text-lg font-semibold">
      Cart ({{ cartCount }})
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cartCount() {
      return this.$store.state.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
};
</script>
