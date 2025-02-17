// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: [],
    products: [
      { id: 1, name: "Men's Jacket", category: "Men", price: 150, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Women's Dress", category: "Women", price: 200, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Kids' Sneakers", category: "Kids", price: 50, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Men's Watch", category: "Men", price: 250, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Women's Handbag", category: "Women", price: 180, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Kids' T-Shirt", category: "Kids", price: 30, image: "https://via.placeholder.com/150" }
    ]
  },
  mutations: {
    toggleFavorite(state, productId) {
      const index = state.favorites.indexOf(productId);
      if (index === -1) {
        state.favorites.push(productId);
      } else {
        state.favorites.splice(index, 1);
      }
    }
  }
});


