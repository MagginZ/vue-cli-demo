<template>
  <div>
      <h1>{{msg}}</h1>
      <p> 动态传入的id为：{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '动态路由'
    }
  },
  mounted () {
    console.log(this.$route, this.$route.params.id)
  }
}
</script>

<style>

</style>
