<template>
  <div>
      <login v-on:info="readInfo" v-show="isShow"></login>
      <list v-show="!isShow" :info="info"></list>
      <a href="#" @click.stop="handleLogout" v-show="!isShow">退出</a>
  </div>
</template>

<script>
import Login from './Components/Login'
import List from './Components/List'
export default {
  components: {
    Login, List
  },
  data () {
    return {
      info: [],
      isShow: true
    }
  },
  methods: {
    readInfo (data) {
      this.info = data
      this.isShow = false
      console.log(this.info)
    },
    handleLogout () {
      this.isShow = true
    }
  }
}
</script>

<style>

</style>
