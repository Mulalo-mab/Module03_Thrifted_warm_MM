<template>
  <div class="container">
    <h2>Forgot Password</h2>
    <p>Enter your email to receive a password reset link.</p>
    
    <form @submit.prevent="requestReset">
      <input 
        v-model="email" 
        type="email" 
        placeholder="Enter your email" 
        required
        aria-label="Email"
      />
      
      <button type="submit" :disabled="loading">
        {{ loading ? "Sending..." : "Send Reset Link" }}
      </button>
    </form>

    <p v-if="message" :class="{ success: success, error: !success }">
      {{ message }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      message: "",
      success: false,
      loading: false,
    };
  },
  methods: {
    async requestReset() {
      this.loading = true;
      this.message = "";
      this.success = false;
      
      try {
        const response = await axios.post("http://localhost:5050/api/request-reset", { email: this.email });
        this.message = response.data.message;
        this.success = true;
      } catch (error) {
        this.message = error.response?.data?.error || "Something went wrong.";
        this.success = false;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.container { 
  max-width: 400px; 
  margin: auto; 
  text-align: center; 
  padding: 20px; 
}

input, button { 
  display: block; 
  width: 100%; 
  margin-top: 10px; 
  padding: 12px; 
  font-size: 16px;
}

button {
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background: #a0a0a0;
  cursor: not-allowed;
}

.success { color: green; }
.error { color: red; }
</style>
