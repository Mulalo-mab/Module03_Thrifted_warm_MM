<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <img :src="logo" alt="circular image" class="logo d-inline-block align-text-top">

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
        ],
        logo: require("../assets/Thrifted_Warmth_Promo.jpg")
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
    background-color: #d6d17f;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
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
  .logo {
  width: 60px; /* Set both width and height to make the image square */
  height: 60px;
  object-fit: cover; /* Ensures the image doesn’t get distorted */
  border-radius: 50%; /* Makes it circular */
}


  </style>
  