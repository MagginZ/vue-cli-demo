<template>
  <div>
      <form id="form">
          昵称：<br> <input type="text" v-model.trim="formInput.nickname" width="300px"/><br><br>
          留言内容: <br> <textarea v-model.trim="formInput.msgContent" role="30" cols="30"></textarea>
          <button @click.stop="handleClick()">发布</button>
          {{fatherName
          }}
      </form>
    </div>
</template>
<script>
// import Vue from 'vue'
// var bus = new Vue()
export default {
  data () {
    return {
      formInput: {
        nickname: '',
        msgContent: ''
      },
      list: []
    }
  },
  props: ['fatherName'],
  methods: {
    handleClick () {
      this.list.push(this.formInput)
      this.$emit('my-event', this.list)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../../../static/style/msg.scss";
.msg-box{
  border:1px solid $msgColor;
  width: 600px;
  height: 600px;
  margin:auto;
}
#form{
    width: 300px;
    margin: auto;
}
#form input, #form textarea{
    width: 100%;
    height: 40px;
}
#form textarea{
    height: 100px;
}
button{
    float:right;
    width: 90px;
    height: 30px;
}
</style>
