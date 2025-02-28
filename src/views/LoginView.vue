<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4 shadow-lg" style="width: 400px;">
      <h1 class="text-center">LOGIN</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" placeholder="john.doe@example.com" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" class="form-control" id="password" v-model="formData.password" placeholder="password" required />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary w-100" :disabled="loading">
            {{ loading ? "Logging in..." : "Login" }}
          </button>
        </div>
        <div class="text-center">
    <p>Admin? <button @click="goToAdminLogin" class="btn btn-link p-0">Login as Admin</button></p>
  </div>
        <div class="mt-3 text-center">
          <p>Don't have an account?
            <button @click="goToRegister" class="btn btn-link p-0">Register</button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      },
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.errorMessage = "";
      try {
        const response = await axios.post("http://localhost:5050/api/auth/login", this.formData);
        if (response.data && response.data.user_id) {
          alert("Login successful!");
          // Store user ID in Vuex and localStorage
          this.$store.dispatch("setUserId", response.data.user_id);
          // Fetch user's cart after login
          await this.$store.dispatch("fetchCart");
          // Redirect to the products page
          this.$router.push({ name: "products" });
        }
      } catch (error) {
        alert(this.errorMessage = error.response?.data?.error || "Login failed. Please try again.");
      } finally {
        this.loading = false;
      }
    },
    goToRegister() {
      this.$router.push({ name: "register" });
    },
    goToAdminLogin() {
      this.$router.push("/admin/login");
    },
  }
};
</script>
