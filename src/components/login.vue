<template>
  <div class="login">
      <div class="login-input">
          <div>用户登录</div>
          <div>
            <el-input
              v-model="userName"
              size="small"
              placeholder="请输入用户名"
              ></el-input>
          </div>
          <div>
            <el-input
              placeholder="请输入密码"
              v-model="passInpout"
              size="small"
              show-password></el-input>
          </div>
          <div>
            <el-button @click="clickLogin()" type="warning">登录</el-button>
            <el-button type="danger">注册</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import { userLogin } from '@/service/service.js'
export default {
  data () {
    return {
      passInpout: '',
      userName: '',
    }
  },
  methods: {
    clickLogin () {
      this.login()
    },
    async login() {
      const res = await userLogin()
        const datas = res.result
        let y = datas.find(s => s.name === this.userName)
        if (y) {
          if (y.password === this.passInpout) {
            this.userName = ''
            this.passInpout = ''
            sessionStorage['user'] = 'hasUser'
            this.$router.replace({path: '/home'})
          } else {
            this.$message.error('用户名或密码错误')
            this.userName = ''
            this.passInpout = ''
          }
        } else {
          this.$message.error('无此用户')
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .login-input {
        width: 30%;
        height: 20rem;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -15%;
        margin-top: -10rem;
        border: 1px solid #aaa;
        background-color: #eee;
        border-radius: 5px;
      }
  }
</style>
