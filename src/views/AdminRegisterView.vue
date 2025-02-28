<template>
    <div class="container mt-5">
      <h1>Admin Registration</h1>
      <form @submit.prevent="handleAdminRegister">
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="formData.name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="formData.email"
            placeholder="example@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="formData.password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="mb-3">
          <label for="phoneNumber" class="form-label">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            id="phoneNumber"
            v-model="formData.phoneNumber"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea
            class="form-control"
            id="address"
            v-model="formData.address"
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-danger w-100">Register</button>
        <p class="mt-3 text-center">
          Already have an account? <router-link to="/admin/login">Login as Admin</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          address: "",
        },
        message: "",
      };
    },
    methods: {
      async handleAdminRegister() {
        try {
          const response = await axios.post("http://localhost:5050/api/auth/admin/register", this.formData);
          alert(response.data.message || "Admin registered successfully!");
          this.$router.push("/admin/login");
        } catch (error) {
          console.error("Error registering admin:", error);
          this.message = error.response?.data?.error || "Registration failed. Try again.";
        }
      },
      goToAdminLogin() {
        this.$router.push({ name: "adminLogin" });
      },
    }
  };
  </script>
  