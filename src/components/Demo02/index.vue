<template>
<div>
  <h1>实现留言列表</h1>
    <div class="msg-box">
      <Form v-on:my-event="lisentToSon" :fatherName="name"/>
      <ul class="list">
      <li v-for="(item, index) in msgList" :key="index" class="list-item">
          <span class="nickname" ref="child">{{item.nickname}}</span>
          <span class="msgContent">{{item.msgContent}}</span>
          <span class="replay" @click="handleReplay(index)">回复</span>
      </li>
  </ul>
    </div>
</div>
</template>
<script>
import Form from './Components/Form'
// import List from './Components/List'
// import Vue from 'vue'
// var bus = new Vue()
export default {
  components: {
    Form
  },
  data () {
    return {
      msgList: [],
      name: ''
    }
  },
  methods: {
    lisentToSon (data) {
      this.msgList = data
    },
    handleReplay (index) {
      var name = this.msgList[index].nickname
      this.name = '回复@' + name
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../../static/style/msg.scss";
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
