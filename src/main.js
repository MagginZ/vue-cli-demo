// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
/* eslint-disable no-new */
// vuex
const store = new Vuex.Store({
  // vuex的配置
  state: {
    count: 6,
    list: [1, 2, 4, 5, 56, 28]
  },
  // 计算熟悉
  mutations: {
    // 声明方法改变状态值,可接受两个参数
    increment (state, n = 2) {
      state.count += n
    },
    decrease (state) {
      state.count--
    }
  },
  // 过滤属性
  getters: {
    filteredList: state => {
      return state.list.filter(item => item < 10) // 过滤出小于10的item
    },
    // 再次过滤
    listCount: (state, getters) => {
      return getters.filteredList.length
    }
  },
  // actions：解决mutations不能异步操作问题
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
