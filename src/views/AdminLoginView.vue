<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4 shadow-lg" style="width: 400px;">
      <h1 class="text-center">Admin Login</h1>
      <form @submit.prevent="handleAdminLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="form-control" v-model="formData.email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" class="form-control" v-model="formData.password" required />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-danger w-100" :disabled="loading">
            {{ loading ? "Logging in..." : "Login" }}
          </button>
        </div>
        <div v-if="errorMessage" class="alert alert-danger mt-3 text-center">
          {{ errorMessage }}
        </div>

        <!-- Links for Admin Register and User Login -->
        <div class="mt-3 text-center">
          <p>Don't have an admin account? 
            <button @click="goToAdminRegister" class="btn btn-link p-0">Register as Admin</button>
          </p>
          <p>Are you a regular user? 
            <button @click="goToUserLogin" class="btn btn-link p-0">Go to User Login</button>
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
      formData: { email: "", password: "" },
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    async handleAdminLogin() {
      this.loading = true;
      this.errorMessage = "";

      try {
        const response = await axios.post("http://localhost:5050/api/auth/admin/login", this.formData);

        if (response.data.user_id) {
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("role", response.data.role);
          
          alert("Admin Login successful!");
          this.$router.push("/admin");
        }
      } catch (error) {
        this.errorMessage = error.response?.data?.error || "Login failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },
    goToAdminRegister() {
      this.$router.push({ name: "adminRegister" });
    },
    goToUserLogin() {
      this.$router.push({ name: "login" }); // Assuming "login" is the route name for user login
    }
  }
};
</script>
