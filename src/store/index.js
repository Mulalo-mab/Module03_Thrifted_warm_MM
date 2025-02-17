import { createStore } from 'vuex'

export default createStore({
  state: {
    All_Products:null
  },
  mutations: {
    setAll_Products(state,payload){
      state.All_Products = payload
    }
  },
  actions: {
  async getData({commit},payload){
    let {All_Products} = await (await fetch('http://localhost:5050/products')).json()

  // let products = await fetch('http://localhost:5050/products')
  // let info = await products.json()

  console.log(All_Products);
  commit('setAll_Products', All_Products)
  }
  }
})

// import { createStore } from "vuex";

// export default createStore({
//   state: {
//     favorites: [],
//     products: [
//       { id: 1, name: "Men's Jacket", category: "Men", price: 150, image: "https://via.placeholder.com/150" },
//       { id: 2, name: "Women's Dress", category: "Women", price: 200, image: "https://via.placeholder.com/150" },
//       { id: 3, name: "Kids' Sneakers", category: "Kids", price: 50, image: "https://via.placeholder.com/150" },
//       { id: 4, name: "Men's Watch", category: "Men", price: 250, image: "https://via.placeholder.com/150" },
//       { id: 5, name: "Women's Handbag", category: "Women", price: 180, image: "https://via.placeholder.com/150" },
//       { id: 6, name: "Kids' T-Shirt", category: "Kids", price: 30, image: "https://via.placeholder.com/150" }
//     ]
//   },
//   mutations: {
//     toggleFavorite(state, productId) {
//       const index = state.favorites.indexOf(productId);
//       if (index === -1) {
//         state.favorites.push(productId);
//       } else {
//         state.favorites.splice(index, 1);
//       }
//     }
//   }
// });


