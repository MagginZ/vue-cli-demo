<template>
  <div>
    <v-title title="vue的title组件"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
  </div>
</template>
<script>
import vTitle from './title'
import vButton from './button'
export default {
  components: {
    vTitle,
    vButton
  },
  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
