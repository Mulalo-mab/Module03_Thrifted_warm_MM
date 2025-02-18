import { createStore } from 'vuex'

export default createStore({
  state: {
    All_Products: null,
    cart: JSON.parse(localStorage.getItem("cart")) || [], // Load cart from localStorage
  },
  mutations: {
    setAll_Products(state, payload) {
      state.All_Products = payload;
    },
    ADD_TO_CART(state, item) {
      state.cart.push(item);
      localStorage.setItem("cart", JSON.stringify(state.cart)); // Save cart to localStorage
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart)); // Update localStorage after removing item
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await fetch('http://localhost:5050/products');
        const { All_Products } = await response.json();

        const updatedProducts = All_Products.map(product => {
          let baseUrl = 'https://raw.githubusercontent.com/awonkenkibi/images/main/';
          if (product.category_name === 'Women') {
            baseUrl += 'WomenProducts/';
          } else if (product.category_name === 'Men') {
            baseUrl += 'MenProducts/';
          } else if (product.category_name === 'Kids') {
            baseUrl += 'KidsProducts/';
          } else {
            baseUrl += 'OtherProducts/';
          }

          return {
            ...product,
            image_url: `${baseUrl}${product.image_url.split('/').pop()}`
          };
        });

        commit('setAll_Products', updatedProducts);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
    removeFromCart({ commit }, productId) {
      commit("REMOVE_FROM_CART", productId);
    },
  }
});
