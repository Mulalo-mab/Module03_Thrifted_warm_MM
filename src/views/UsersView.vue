<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Users List</h1>
  
      <div v-if="loading" class="text-center text-gray-600">Loading users...</div>
      <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
      <table v-else class="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2 border">ID</th>
            <th class="px-4 py-2 border">Username</th>
            <th class="px-4 py-2 border">Email</th>
            <th class="px-4 py-2 border">Role</th>
            <th class="px-4 py-2 border">Joined Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100">
            <td class="px-4 py-2 border">{{ user.user_id }}</td>
            <td class="px-4 py-2 border">{{ user.name }}</td>
            <td class="px-4 py-2 border">{{ user.email }}</td>
            <td class="px-4 py-2 border">{{ user.role }}</td>
            <td class="px-4 py-2 border">{{ formatDate(user.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        users: [],
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchUsers() {
        this.loading = true;
        this.error = null;
        try {
          const response = await axios.get("http://localhost:5050/users"); // Make sure this matches your backend route
          this.users = response.data.All_Users;
        } catch (err) {
          this.error = err.response?.data?.message || "Failed to fetch users.";
        } finally {
          this.loading = false;
        }
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
    mounted() {
      this.fetchUsers();
    },
  };
  </script>
  
  <style>
  /* You can add Tailwind CSS or custom styles here */
  </style>
  