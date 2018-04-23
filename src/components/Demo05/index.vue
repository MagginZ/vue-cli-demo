<template>
  <div>
      <h1>{{title}}</h1>
      <p>
          使用js渲染dom元素时候，为减少代码冗长。 在通过js渲染。看代码。效果如下：
      </p>
       <h2>留言版</h2>
       <div>
           <input type="text" style="width:350px;height:50px" v-model="msg"> <button @click.stop="keyup">留言</button> <br>
           <ul class="list"  v-if="list.length !== 0">
                <li v-for="(item, index) in list" :key="index" class="list-item">{{item}}</li>
           </ul>
           <p v-else>没有更多内容了</p>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Render函数又是个啥？',
      value: '',
      list: [],
      msg: ''
    }
  },
  // 实现留言框
  render: function (createElement) {
    var _this = this
    if (this.list.length) { // 如果list.length！=“”
      var listNode = createElement('ul', this.list.map(function (item) { // 创建一个ul元素，返回内容为li遍历list中的值
        return createElement('li', item) // 创建li元素，内容为list.item
      }))
    } else {
      listNode = createElement('p', '暂无聊天内容') // 如果list.length==0; 提示
    }
    // 创建一个div，包含列表和输入框
    // <div>
    //     <ul>
    //         <li></li>
    //     </ul>
    //     <input placeholder="输入内容，按回车键发送" style="width:120px" @click="keyup"/>
    // </div>
    return createElement('div', [
      listNode,
      createElement('input', {
        attrs: {
          placeholder: '输入内容，按回车键发送'
        },
        style: {
          width: '120px'
        },
        on: {
          keyup: function (event) {
            if (event.keyCode !== 13) return
            _this.list.push(event.target.value) // 如果是回车键，将值push到list中，并清空input
            event.target.value = ''
          }
        }
      })
    ])
  },
  methods: {
    keyup () {
      this.list.push(this.msg)
    }
  }
}
</script>

<style>
ul{
    list-style: none;
    margin-top:20px;
    width: 600px;
    height: 600px;
    overflow: auto;
    border:1px solid #000;
}
ul li{
  border-bottom: 1px solid #000;
  padding: 20px;
}
</style>
