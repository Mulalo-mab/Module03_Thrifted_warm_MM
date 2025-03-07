<template>
  <div class="dashboard-container">
    <!-- Dashboard Content -->
    <div class="dashboard-content p-6">
      <h1 class="dashboard-title">Dashboard</h1>
      <div class="metrics-grid">
        <div class="metric-card bg-white">
          <h3>Total Sales</h3>
          <p>$5,000</p>
        </div>
        <div class="metric-card bg-white">
          <h3>Total Orders</h3>
          <p>200</p>
        </div>
        <div class="metric-card bg-white">
          <h3>Users</h3>
          <p>120</p>
        </div>
        <div class="metric-card bg-white">
          <h3>Pending Orders</h3>
          <p>10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // No need to import AdminNavbar since it's handled at a higher level
};
</script>

<style scoped>
/* Apply Poppins font family */
body, html, #app {
  font-family: 'Poppins', sans-serif;
}

/* Dashboard Container */
.dashboard-container {
  background-color: #f8f9fa; /* Light grey background */
  min-height: 100vh;
}

/* Dashboard Content */
.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Dashboard Title */
.dashboard-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #333; /* Dark grey */
  margin-bottom: 20px;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* Metric Card */
.metric-card {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  background-color: white; /* White background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border: 1px solid #e0e0e0; /* Light grey border */
}

.metric-card h3 {
  font-size: 1.1rem;
  font-weight: 500;
  color: #555; /* Medium grey */
  margin-bottom: 8px;
}

.metric-card p {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333; /* Dark grey */
}
</style>
