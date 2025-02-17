<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Your Favorites ❤️</h1>
  
      <!-- Show message if no favorites -->
      <div v-if="favoriteProducts.length === 0" class="text-center text-muted">
        <p>No favorites yet! Start adding some ❤️</p>
      </div>
  
      <!-- Favorites Grid -->
      <div v-else class="row">
        <div v-for="product in favoriteProducts" :key="product.id" class="col-md-4 mb-4">
          <div class="card">
            <img :src="product.image" class="card-img-top" alt="Product Image" />
            <div class="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">R{{ product.price }}</p>
              </div>
              <!-- Favorite Icon (Click to remove) -->
              <i 
                class="fas fa-heart text-danger favorite-icon" 
                @click="removeFromFavorites(product.id)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      favoriteProducts() {
        return this.$store.state.favorites.map(favId => 
          this.$store.state.products.find(product => product.id === favId)
        ).filter(Boolean);
      }
    },
    methods: {
      removeFromFavorites(productId) {
        this.$store.commit("toggleFavorite", productId);
      }
    }
  };
  </script>
  
  <style scoped>
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  .favorite-icon {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;
  }
  </style>
  