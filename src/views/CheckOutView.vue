<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="!isUserLoggedIn">
      <p>Please log in to proceed to checkout.</p>
      <button @click="redirectToLogin">Log In</button>
    </div>
    <div v-else>
      <p>Your total is: ${{ cartTotal }}</p>
      <button @click="proceedToCheckout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartTotal: 0,
      isUserLoggedIn: false,
    };
  },
  methods: {
    redirectToLogin() {
      this.$router.push({ name: 'login' });
    },
    proceedToCheckout() {
      if (!this.isUserLoggedIn) {
        alert("Please log in to proceed with checkout.");
        this.$router.push({ name: 'login' });
      } else {
        // Proceed to checkout logic
        console.log('Proceeding to checkout...');
      }
    },
  },
  created() {
    this.isUserLoggedIn = this.$store.state.isUserLoggedIn;
    if (this.isUserLoggedIn) {
      this.cartTotal = this.$store.state.cartTotal;
    }
  },
};
</script>
