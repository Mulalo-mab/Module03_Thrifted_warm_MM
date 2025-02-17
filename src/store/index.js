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

  console.log(All_Products);
  commit('setAll_Products', All_Products)
  }
  }
})



