<template>
    <div class="container mt-4">
      <!-- Back to Products Button -->
      <button class="btn btn-secondary mb-4" @click="goBackToProducts">
        <i class="fas fa-arrow-left me-2"></i> Back to Products
      </button>
  
      <div class="row">
        <!-- Product Image -->
        <div class="col-md-6">
          <img :src="product.image_url" class="img-fluid" alt="Product Image" />
        </div>
  
        <!-- Product Details -->
        <div class="col-md-6">
          <h2>{{ product.product_name }}</h2>
          <p class="text-muted">R{{ product.price }}</p>
          <p>{{ product.description }}</p>
  
          <!-- Size Selection -->
          <div class="mb-3">
  <label for="size" class="form-label">Select Size</label>
  <select v-model="selectedSize" class="form-select" id="size">
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
    <option v-for="(size, index) in product.sizes" :key="index" :value="size">{{ size }}</option>
  </select>
</div>
  
          <!-- Quantity Selection -->
          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input
              type="number"
              v-model="quantity"
              min="1"
              class="form-control"
              id="quantity"
            />
          </div>
  
          <!-- Add to Cart Button -->
          <button class="btn btn-primary" @click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        selectedSize: "", // Selected size
        quantity: 1, // Default quantity
      };
    },
    methods: {
      addToCart() {
        const cartItem = {
          id: this.product.product_id,
          name: this.product.product_name,
          price: this.product.price,
          size: this.selectedSize,
          quantity: this.quantity,
          image: this.product.image_url,
        };
  
        // Dispatch to Vuex store or handle locally
        this.$store.dispatch("addToCart", cartItem);
        alert("Product added to cart!");
      },
      goBackToProducts() {
        this.$router.push("/products"); // Use path instead of name
      }
    },
    mounted() {
      // Ensure product.sizes is an array and set default size
      if (this.product.sizes && typeof this.product.sizes === "string") {
        try {
          this.product.sizes = JSON.parse(this.product.sizes);
        } catch (e) {
          console.error("Invalid JSON format for sizes", e);
          this.product.sizes = [];
        }
      }
      
      if (this.product.sizes && this.product.sizes.length > 0) {
        this.selectedSize = this.product.sizes[0];
      }
    },
  };
  </script>
  
  <style scoped>
  .img-fluid {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
    border-color: #545b62;
  }
  </style>
