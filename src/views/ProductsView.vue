<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Products</h1>
  
      <!-- Filters Section -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <!-- Category Dropdown -->
        <select v-model="selectedCategory" class="form-select w-auto" @change="filterProducts">
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
  
        <!-- Price Filter -->
        <input type="range" v-model="maxPrice" min="0" max="500" step="10" @input="filterProducts" />
        <span>Max Price: R{{ maxPrice }}</span>
      </div>
  
      <!-- Products Grid -->
      <div class="row">
        <div v-for="product in filteredProducts" :key="product.id" class="col-md-4 mb-4">
          <div class="card">
            <img :src="product.image" class="card-img-top" alt="Product Image" />
            <div class="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">R{{ product.price }}</p>
              </div>
              <!-- Icons Container -->
              <div class="d-flex">
                <!-- Favorite Icon -->
                <i 
                  :class="isFavorite(product.id) ? 'fas fa-heart text-danger' : 'far fa-heart text-muted'"
                  class="icon favorite-icon me-3"
                  @click="toggleFavorite(product.id)"
                ></i>
  
                <!-- Cart Icon -->
                <i 
                  :class="isInCart(product.id) ? 'fas fa-shopping-cart text-success' : 'fas fa-shopping-cart text-muted'"
                  class="icon cart-icon"
                  @click="toggleCart(product.id)"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: "All",
        maxPrice: 1000,
        favorites: [], // Stores favorited product IDs
        cart: [], // Stores product IDs added to cart
        products: [
          { id: 1, name: "Men's Jacket", category: "Men", price: 150, image: "https://via.placeholder.com/150" },
          { id: 2, name: "Women's Dress", category: "Women", price: 200, image: "https://via.placeholder.com/150" },
          { id: 3, name: "Kids' Sneakers", category: "Kids", price: 50, image: "https://via.placeholder.com/150" },
          { id: 4, name: "Men's Watch", category: "Men", price: 250, image: "https://via.placeholder.com/150" },
          { id: 5, name: "Women's Handbag", category: "Women", price: 180, image: "https://via.placeholder.com/150" },
          { id: 6, name: "Kids' T-Shirt", category: "Kids", price: 30, image: "https://via.placeholder.com/150" }
        ],
        filteredProducts: []
      };
    },
    methods: {
      filterProducts() {
        this.filteredProducts = this.products.filter(product => {
          return (this.selectedCategory === "All" || product.category === this.selectedCategory) &&
                 product.price <= this.maxPrice;
        });
      },
      toggleFavorite(productId) {
        if (this.favorites.includes(productId)) {
          this.favorites = this.favorites.filter(id => id !== productId);
        } else {
          this.favorites.push(productId);
        }
      },
      isFavorite(productId) {
        return this.favorites.includes(productId);
      },
      toggleCart(productId) {
        if (this.cart.includes(productId)) {
          this.cart = this.cart.filter(id => id !== productId);
        } else {
          this.cart.push(productId);
        }
      },
      isInCart(productId) {
        return this.cart.includes(productId);
      }
    },
    mounted() {
      this.filterProducts(); // Initialize with all products
    }
  };
  </script>
  
  <style scoped>
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;
  }
  .favorite-icon {
    margin-right: 10px;
  }
  .cart-icon {
    transition: color 0.3s;
  }
  </style>
  