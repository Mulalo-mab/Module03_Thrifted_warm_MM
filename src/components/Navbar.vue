<template>
    <nav class="navbar navbar-dark bg-brown">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Thrifted Warmth</a>
    </div>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark" v-bind:class="{ show: menuVisible }">
    <div align="center" class="bg-brown p-4">
      <h5 class="text-body-emphasis h4"></h5>
      <div class="links">
        <router-link class="nav-link" to="/" @click="hideMenu">Home</router-link>
      <br>
      <router-link to="/about" class="nav-link" @click="hideMenu">About Us</router-link>
      <br>
      <router-link to="/products" class="nav-link" @click="hideMenu">Our Winter Wear</router-link>
      <br>
      <router-link to="/login" class="nav-link" @click="hideMenu">Login</router-link>
      <br>
      <router-link to="/cart" class="nav-link" @click="hideMenu">cart</router-link>

      <br>

      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/Thrifted_Warmth_Promo.jpg"),
      menuVisible: false
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible; // Toggle the collapse state
    },
    hideMenu() {
      this.menuVisible = false; // Hide the menu when a link is clicked
    }
  }
};
</script>

<style scoped>
/* Navbar styles */
.navbar {
  background-color: #8B4513 !important; /* Brown color */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Navbar brand styles */
.navbar-brand {
  color: #fff;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  transition: transform 0.3s ease;
}

/* Hover effect for navbar brand */
.navbar-brand:hover {
  transform: scale(1.1);
}

/* Navbar links */
.links{
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease-in-out, transform 0.3s ease;
  font-family: 'Poppins', sans-serif;
  text-decoration: none; /* Remove underline */
}

/* Navbar link hover and active styles */
.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #fff;
  transform: translateX(5px);
}

/* Navbar toggler (hamburger) */
.navbar-toggler {
  transition: transform 0.3s ease;
}

.navbar-toggler-icon {
  background-color:white; /* Toggler icon color */
}

/* Navbar toggler icon hover effect */
.navbar-toggler:hover {
  transform: rotate(90deg);
}

/* Collapse dropdown styles */
.collapse {
  background-color: #8B4513 !important; /* Brown background for dropdown */
}

/* Customize dropdown menu appearance */
.bg-brown {
  background-color: #8B4513 !important; /* Custom brown color for dropdown menu */
}

.navbar-nav .nav-link.active {
  color: #fff;
}

.logo {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
