<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width:500px;">
  <el-form-item label="手机号" prop="adminPhone">
    <el-input v-model.trim="ruleForm.adminPhone"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="adminPwd">
    <el-input v-model="ruleForm.adminPwd"></el-input>
  </el-form-item>
   <el-form-item label="验证码" prop="vCode">
    <el-input v-model="ruleForm.vCode"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
// import md5 from 'js-md5'
// import axios from 'axios'
export default {
  data () {
    return {
      ruleForm: {
        adminPhone: '',
        adminPwd: '',
        vCode: ''
      },
      rules: {
        adminPhone: [{required: true, message: '请填写手机号码', trigger: 'blur'}],
        adminPwd: [{required: true, message: '请填写密码', trigger: 'blur'}],
        vCode: [{required: true, message: '请填写验证码', trigger: 'blur'}]
      },
      url: 'http://192.168.1.15:8371/backend/transfer',
      // 状态码
      reqStatus: {
        TransferConfirmSuccess: 500210, // 验证成功
        CheckCodeNotEqual: 300002, // 验证码错误
        CheckCodeExpired: 300003 // 验证码过期
      },
      transmitVal: []
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((vaild) => {
        if (vaild) {
        //   // 验证通过，请求服务器验证
        //   var url = this.url + '/login'
        //   let adminInfo = {
        //     checkCode: this.vCode,
        //     adminPhone: this.adminPhone,
        //     password: md5('qweji!@3450Ws' + this.adminPwd)
        //   }
        //   axios.post(url, adminInfo).then(response => {
        //     console.log(response.data)
        //   })
          this.$emit('info', this.ruleForm)
        } else {
          console.log('error submit')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
