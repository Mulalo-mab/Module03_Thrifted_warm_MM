<template>
  <div class="container mt-5">
    <h1>Admin Orders</h1>
    <table class="table table-bordered mt-3">
      <thead class="table-dark">
        <tr>
          <th>Order ID</th>
          <th>User</th>
          <th>Email</th>
          <th>Total Price</th>
          <th>Status</th>
          <th>Tracking</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.order_id">
          <td>{{ order.order_id }}</td>
          <td>{{ order.user_name }}</td>
          <td>{{ order.user_email }}</td>
          <td>R {{ order.total_price }}</td>
          <td>
            <span :class="getStatusClass(order.status)">{{ order.status }}</span>
          </td>
          <td>
            <span v-if="order.tracking_number">
              {{ order.carrier }} - {{ order.tracking_number }}
            </span>
            <span v-else class="text-danger">Not Assigned</span>
          </td>
          <td>
            <button class="btn btn-primary btn-sm" @click="updateTracking(order)">Update Tracking</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Tracking Update Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Update Tracking</h2>
        <form @submit.prevent="submitTracking">
          <label>Tracking Number</label>
          <input type="text" v-model="trackingDetails.tracking_number" required />
          <br>
          <br>

          <label>Carrier</label>
          <input type="text" v-model="trackingDetails.carrier" required />
          <br>
          <br>
          
          <label>Status</label>
          <select v-model="trackingDetails.status">
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>

          <button type="submit" class="btn btn-success">Update</button>
          <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      orders: [],
      showModal: false,
      trackingDetails: {
        order_id: "",
        tracking_number: "",
        carrier: "",
        status: "Pending",
      },
    };
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await axios.get("http://localhost:5050/api/checkout");
        this.orders = response.data;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    updateTracking(order) {
      this.trackingDetails = {
        order_id: order.order_id,
        tracking_number: order.tracking_number || "",
        carrier: order.carrier || "",
        status: order.status,
      };
      this.showModal = true;
    },
    async submitTracking() {
      try {
        await axios.patch(`http://localhost:5050/api/checkout/${this.trackingDetails.order_id}`, this.trackingDetails);
        alert("Tracking updated successfully!");
        this.showModal = false;
        this.fetchOrders(); // Refresh orders
      } catch (error) {
        console.error("Failed to update tracking:", error);
      }
    },
    getStatusClass(status) {
      return {
        "badge bg-warning": status === "Pending",
        "badge bg-primary": status === "Shipped",
        "badge bg-success": status === "Delivered",
      };
    },
  },
  mounted() {
    this.fetchOrders();
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
</style>
