<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Thrifted Warmth</a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li 
              v-for="(item, index) in navItems" 
              :key="index" 
              class="nav-item"
            >
              <!-- Use router-link instead of <a> -->
              <router-link 
                class="nav-link" 
                :class="{ active: isActive(item.route) }"
                :to="item.route"
              >
                <i :class="item.icon"></i> {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        navItems: [
          { name: "Home", route: "/", icon: "fas fa-home" },
          { name: "Products", route: "/products", icon: "fas fa-box" },
          { name: "Favorites", route: "/favorites", icon: "fas fa-heart" },
          { name: "Cart", route: "/cart", icon: "fas fa-shopping-cart" },
          { name: "Checkout", route: "/checkout", icon: "fas fa-shopping-bag" },
          { name: "Login/Logout", route: "#", icon: "fas fa-sign-in-alt" }
        ]
      };
    },
    methods: {
      isActive(route) {
        return this.$route.path === route;
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #5161ce;
  }
  .navbar-brand {
    color: #fff;
    font-weight: bold;
  }
  .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.3s ease-in-out;
  }
  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active {
    color: #fff;
  }
  </style>
  