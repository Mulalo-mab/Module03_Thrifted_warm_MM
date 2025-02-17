<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero text-center text-white d-flex align-items-center">
      <div class="container">
        <h1>Welcome to Our Store</h1>
        <p>Find the best products at unbeatable prices.</p>
        <button class="btn btn-primary">Shop Now</button>
      </div>
    </section>
    
    <!-- Featured Products -->
    <section class="products container text-center py-5">
      <h2>Featured Products</h2>
      <div class="row mt-4">
        <div v-for="product in featuredProducts" :key="product.id" class="col-md-4 mb-4">
          <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.price }}</p>
              <button class="btn btn-outline-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredProducts: [
        { id: 1, name: "Winter Jacket", price: "$99", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Sneakers", price: "$59", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Backpack", price: "$39", image: "https://via.placeholder.com/150" },
      ],
    };
  }
};
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1200x400');
  background-size: cover;
  background-position: center;
  height: 50vh;
}
.card img {
  height: 200px;
  object-fit: cover;
}
</style>
