import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: null,
    cart: [], // Cart state, will hold items added to the cart
    cartTotal: 0,
  },
  getters: {
    allProducts: (state) => state.products,
    cartItems: (state) => state.cart,
    cartTotal: (state) => state.cartTotal,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(
        (item) => item.product_id === product.product_id
      );
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.cart.push({ ...product, quantity: product.quantity });
      }
    },
    SET_CART_ITEMS(state, cartItems) {
      state.cart = cartItems;
    },
    SET_CART_TOTAL(state, total) {
      state.cartTotal = total;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('http://localhost:5050/products');
        const data = await response.json();
        commit('SET_PRODUCTS', data.All_Products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
    async addToCart({ commit }, { user_id, product_id, quantity }) {
      try {
          const response = await fetch('http://localhost:5050/cart/add', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  user_id, // Make sure user_id is included here
                  product_id,
                  quantity,
              }),
          });
          const data = await response.json();
          if (response.ok) {
              commit('SET_CART_ITEMS', data.cart_items);  // Update cart items in Vuex
          } else {
              console.error('Failed to add product to cart:', data.error);
          }
      } catch (error) {
          console.error('Failed to add product to cart:', error);
      }
  },
    async fetchCartItems({ commit }) {
      try {
        const response = await fetch('http://localhost:5050/cart');
        const data = await response.json();
        commit('SET_CART_ITEMS', data.cart_items);
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    },
    async fetchCartTotal({ commit }) {
      try {
        const response = await fetch('http://localhost:5050/cart/total');
        const data = await response.json();
        commit('SET_CART_TOTAL', data.total_price);
      } catch (error) {
        console.error('Failed to fetch cart total:', error);
      }
    },
  },
});

export default store;
