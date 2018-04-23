<template>
  <div>
      <h1>{{msg}}</h1>
      <div class="nav">
          <ul class="navbar">
              <li>Home</li>
              <li @click="handleClick">Notice
                  <ul class="dropdown" v-show="show">
                      <li>My</li>
                      <li>Setting</li>
                      <li>DownloadApp</li>
                      <li>Logout</li>
                  </ul>
              </li>
              <li>Write</li>
          </ul>
      </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      msg: '做一个下拉菜单？',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = !this.show
    }
  }
}
</script>
<style>
.nav{
    background: #000;
    padding: 32px;
    color: #fff;
}
.navbar{
    list-style: none;
    margin-top: -10px;
}
.navbar li{
    float: left;
    font-size: 20px;
    padding-left: 40px;
    cursor: pointer;
}
.dropdown{
    list-style: none;
    position: absolute;
    background: #999;
    color: #000;
    width: 200px;
    padding-left: 0;
    top:150px;
}
.dropdown li{
    border-bottom: 1px solid #f3f3f3;
    padding: 10px;
    width: 100%;
    padding-left: 0;
}
.dropdown li:hover{
    background: #f3f3f3;
    color: #000;
}
</style>
