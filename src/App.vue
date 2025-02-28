<template>
  <div>
    <!-- Show User Navbar for user routes -->
    <Navbar v-if="!isAdminRoute" />

    <!-- Show Admin Navbar for admin routes -->
    <AdminNavbar v-if="isAdminRoute" />

    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import AdminNavbar from "./components/AdminNavbar.vue";

export default {
  components: {
    Navbar,
    AdminNavbar
  },
  setup() {
    const route = useRoute();

    // Check if the current route is under '/admin'
    const isAdminRoute = computed(() => route.path.startsWith("/admin"));

    return { isAdminRoute };
  }
};
</script>
