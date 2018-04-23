<template>
<div>
<div v-if="msgList.length!==0">
  <ul class="list" v-for="(item, index) in msgList" :key="index">
      <li class="list-item">
          <span class="nickname"></span>
          <span class="msgContent"></span>
          <span class="replay"></span>
      </li>
  </ul>
  </div>
  <div v-else>
      没有更多内容～
  </div>
  </div>
</template>
<script>
import Vue from 'vue'
var bus = new Vue()
export default {
  data () {
    return {
      msgList: []
    }
  },
  updated () {
    bus.$on('my-event', function (data) {
      console.log(data)
    })
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../../../static/style/msg.scss";
  .list{
      list-style: none;
      margin:60px auto 0 auto;
      width: 90%;
  }
  .list-item{
    font-size: $fontSize;
    color: $fontColor;
    padding:20px;
    border-bottom: 1px solid $fontColor;
  }
  .nickname{
      float: left;
  }
  .replay{
      float: right;
  }
  .msgContent{
      color:$msgColor;
  }
</style>
