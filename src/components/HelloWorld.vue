<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/demo01">demo01</router-link>
    <router-link to="/demo02">demo02</router-link>
    <router-link to="/demo03">demo03</router-link>
    <router-link to="/demo04">demo04</router-link>
    <router-link to="/demo05">demo05</router-link>
    <router-link to="/demo06">demo06</router-link>
    <router-link to="/vuex">demo07</router-link>
    <router-link to="/ct">实战练习</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
