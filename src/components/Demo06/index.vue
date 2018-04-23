<template>
  <div>
      <h1>{{msg}}</h1>
      <router-link to="/user">跳转到user</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '动态路由'
    }
  }
}
</script>

<style>

</style>
