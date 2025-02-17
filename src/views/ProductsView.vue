<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Products</h1>

    <!-- Filters Section -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <!-- Category Dropdown -->
      <select v-model="selectedCategory" class="form-select w-auto">
        <option value="All">All</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
      </select>
    </div>

    <!-- Products Grid -->
    <div class="row">
      <div v-for="product in filteredProducts" :key="product.product_id" class="col-md-4 mb-4">
        <div class="card">
          <img :src="product.image_url" class="card-img-top" alt="Product Image" />
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 class="card-title">{{ product.product_name }}</h5>
              <p class="card-text">R{{ product.price }}</p>
            </div>
            <!-- Icons Container -->
            <div class="d-flex">
              <!-- Favorite Icon -->
              <i 
                :class="isFavorite(product.product_id) ? 'fas fa-heart text-danger' : 'far fa-heart text-muted'"
                class="icon favorite-icon me-3"
                @click="toggleFavorite(product.product_id)"
              ></i>

              <!-- Cart Icon -->
              <i 
                :class="isInCart(product.product_id) ? 'fas fa-shopping-cart text-success' : 'fas fa-shopping-cart text-muted'"
                class="icon cart-icon"
                @click="toggleCart(product.product_id)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selectedCategory: "All",
      maxPrice: 500,
      favorites: [],
      cart: []
    };
  },
  computed: {
    ...mapState(["All_Products"]),
    filteredProducts() {
      if (!this.All_Products) return [];
      return this.All_Products.filter(product => {
        return (
          (this.selectedCategory === "All" || product.category_name === this.selectedCategory) &&
          parseFloat(product.price) <= this.maxPrice
        );
      });
    }
  },
  methods: {
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
    this.$store.dispatch("getData");
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

