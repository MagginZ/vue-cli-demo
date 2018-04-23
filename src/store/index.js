import Vue from 'vue'
import Vuex from 'vuex'
import ProductData from '../views/shopping/product'
Vue.use(Vuex)
function getFilterArray (array) {
  const res = []
  const json = {}
  for (let i = 0; i < array.length; i++) {
    const _self = array[i]
    if (!json[_self]) {
      res.push(_self)
      json[_self] = 1
    }
  }
  return res
}
const store = new Vuex.Store({
  state: {
    productList: [],
    cartList: []
  },
  mutations: {
    setProductList (state, data) {
      state.productList = data
    }
  },
  actions: {
    getProductList (context) {
      setTimeout(() => {
        context.commit('setProductList', ProductData)
      }, 500)
    }
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brand)
      return getFilterArray(brands)
    },
    colors: state => {
      const colors = state.productList.map(item => item.color)
      return getFilterArray(colors)
    }
  }
})
export default store
