<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <div class="grid grid-cols-4 gap-4 mt-4">
        <div class="p-4 bg-blue-500 rounded">Total Sales: $5000</div>
        <div class="p-4 bg-green-500 rounded">Total Orders: 200</div>
        <div class="p-4 bg-yellow-500 rounded">Users: 120</div>
        <div class="p-4 bg-red-500 rounded">Pending Orders: 10</div>
      </div>
    </div>
  </template>
  
  <script>
  import AdminNavbar from "@/components/AdminNavbar.vue";
  
  export default {
    components: { AdminNavbar },
  };
  </script>
  