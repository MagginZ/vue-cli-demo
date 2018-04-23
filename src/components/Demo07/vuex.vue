<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>简单的读取操作</h2>
      <p>这是读取到vuex中的count:{{ count }}</p>
      <h2>mutations计算操作</h2>
      <button @click="handleIncrement">+1</button>
      <button @click="handleDecrease">-1</button>
      <h2>getters过滤操作</h2>
      <p>原数组： {{listOld}} </p> <br>
      <p>过滤后:{{list}}</p> <br>
      <p>数组的长度： {{listCount}}</p> <br>
      <h2>actions 异步操作</h2>
      <p>{{count}}</p>
      <button @click="handleActionIncrement">action +1</button>
      模块太多建议使用modules
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '来来来再掌握一下vuex状态管理器'
    }
  },
  computed: {
    count () {
      return this.$store.state.count // 读取仓库count
    },
    listOld () {
      return this.$store.state.list
    },
    list () {
      return this.$store.getters.filteredList
    },
    listCount () {
      return this.$store.getters.listCount
    }
  },
  methods: {
    handleIncrement () {
      this.$store.commit('increment') // 通过this,$store.commit访问vuex中声明的方法
    },
    handleDecrease () {
      this.$store.commit('decrease')
    },
    handleActionIncrement () {
      this.$store.dispatch('increment') // 通过this.$store.dispatch访问vuex的方法
    }
  }
}
</script>

<style>

</style>
