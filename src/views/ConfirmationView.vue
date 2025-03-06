<template>
    <div class="confirmation-page">
      <h1>Confirmation</h1>
      <p>Your order has been successfully processed!</p>
      <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
      <button @click="goHome">Go to Home</button>
    </div>
  </template>
  <script>
  export default {
    name: 'ConfirmationView',
    methods: {
      goHome() {
        // Redirect to the home page or another page after confirmation
        this.$router.push('/');
      }
    }
  };
  </script>
  <style scoped>
  .confirmation-page {
    text-align: center;
    margin-top: 50px;
  }
  h1 {
    font-size: 2em;
    color: #4CAF50;
  }
  p {
    font-size: 1.2em;
    margin: 10px 0;
  }
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
    margin-top: 20px;
  }
  button:hover {
    background-color: #45A049;
  }
  </style>