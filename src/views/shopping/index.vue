<template>
  <div>
      <div class="header">
         <router-link to="/ct/shopping/list">电商网站示例</router-link>
         <div class="header-menu">
           <router-link to="/ct/cart" class="header-menu-cart">
            购物车
            <span v-if="cartList.length">{{cartList.length}}</span>
           </router-link>
         </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import store from '../../store/index.js'
export default {
  store,
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  }
}
</script>

<style>
@import './style.css'
</style>
