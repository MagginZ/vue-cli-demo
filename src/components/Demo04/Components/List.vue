<template>
  <div>
    <p>您的个人信息</p>
    <ul>
      <li>电话号码：{{info.adminPhone}}</li>
      <li>密码：{{info.adminPwd}}</li>
      <p>欢迎你哟</p>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  },
  methods: {
    handlelogout (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>
 ul{
   list-style-type: none;
 }

</style>
