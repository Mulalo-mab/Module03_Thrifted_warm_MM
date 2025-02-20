<template>
  <div>
    <Cart />
    <h1 class="text-3xl font-bold mb-4">Products</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="product in products"
        :key="product.product_id"
        class="border rounded-lg p-4 shadow"
      >
        <img :src="product.image_url" alt="Product Image" class="w-full h-48 object-cover mb-2" />
        <h2 class="text-xl font-semibold">{{ product.name }}</h2>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="text-lg font-bold">R {{ product.price }}</p>
        <button
          class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart.vue";

export default {
  name: "ProductsView",
  components: {
    Cart,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(product) {
      const cartItem = this.$store.state.cart.find(
        (item) => item.product_id === product.product_id
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.$store.commit("ADD_TO_CART", { ...product, quantity: 1 });
      }
      this.$store.dispatch("addToCart", { product_id: product.product_id, quantity: 1 });
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>


<style scoped>
.card-img-top {
  width: 400px;
  height: 600px;
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

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.card-text {
  color: #333;
  font-size: 1rem;
}

.g-4 {
  --bs-gutter-y: 1.5rem;
}
</style>