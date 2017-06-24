<template>
  <div class="loginBG" id="login">
    <header class="headImg"> <img src="../assets/images/headImg.png" alt=""></header>
    <div class="inputEnter">
      <form action="">
        <p><span class="icon_user"></span><input type="text" class="username" :placeholder="test" v-on:click="palceHold('test')"   v-model='account'></p>
        <p><span class="icon_password"></span><input type="password" class="password"  :placeholder="text" @click="palceHold" 
          v-model='password'></p>
          <div class="remberPassword"><span @click="doRememberPassword"><input type="checkbox"><i :class="{'remberPass1':remberPass1}"></i>记住密码</span><span>忘记密码？</span></div>
          <button type="submit"  class="loginGet" @click="submitAjax"></button>
          <router-link to="/regsiter"><button class="notTel"></button></router-link>
      </form>
  </div>

  <footer>
    <span class="icon_qq"></span>
    <span class="icon_wechet"></span>
    <span class="icon_noing"></span>
</footer>
 <alert-text :conShow='content_show' :info_tip='info_tip'></alert-text>
 <Loading v-if="isLoging" :marginTop="marginTop"></Loading>
</div>
</template>
<script>
    import Loading from './Loading'
    import alertText from '../common/alertText'
    export default {
      name: 'login',
      data () {
        return {
          isLoging: false,
          marginTop: 30,
          test: '手机号/电话',
          text: '密码',
          account: '',
          password: '',
          remberPass1: false,
          info_tip: '',
          content_show: ''
        }
  },
  components: {
        Loading,
        alertText
  },
  mounted: function () {
        // 读取cookie中的账号信息，如果有accountInfo的话，则说明该用户之前勾选了记住密码的功能，则需要自动填上账号密码
        // this.loadAccountInfo()
      },
  methods: {
        palceHold (test) {
          if (test === 'test') {
            this.test = ''
          } else {
            this.text = ''
          }
        },
        submitAjax () {
          if (this.account === 'admin' & this.password === '123456') {
            // this.$router.push({path: '/regsiter/'})
            this.toLogin()
          } else {
            if (this.account === '' || this.password === '') {
              this.content_show = true
              this.info_tip = '用户名或密码为空'
            } else {
               this.content_show = true
              this.info_tip = '用户名或密码不正确'
            }
            setTimeout(() => {
            this.content_show = false
          }, 1000)
          }
        },
        toLogin () {
          this.isloading = true
          this.$router.push({path: '/userInfo/'})
        },
        doRememberPassword: function (event) {
          let mySelf = this
          let rememberStatus = mySelf.remberPass1
          mySelf.remberPass1 = !rememberStatus
        }
  }
}
</script>
<style >
  html,body{
    width: 100%;
    height: 100%;
}
#app{
   width: 100%;
   height: 100%;  
    margin:0;
    overflow: hidden;
}
.loginBG{
    background: url('../assets/images/loginBg.png') no-repeat;
    width: 100%;
    height: 100%;
    background-size: 100%;
}
.loginBG .headImg{
    margin:0 auto;
    width: 2.08rem;
    padding-top: 1.2rem;
}
.loginBG .headImg img{
    width: 100%;
}
.inputEnter{
    margin-top: 1.2rem;
    border-bottom: 1px solid #2e2e37;
    padding-bottom: 0.6rem;
}
.inputEnter p{
    width: 100%;
    height: 0.74rem;
    margin-bottom: 0.6rem;
    position: relative;
    padding: 0 0.5rem;

}
.inputEnter p input{
    height: 100%;
    width: 100%;
    padding-left: 0.9rem;
    background: transparent;
    border-bottom: 1px solid #4a4a51;

}
.icon_user{
    width: 0.49rem;
    height: 0.47rem;
    background: url('../assets/images/USER.png') no-repeat;
}
.icon_password{
    width: 0.39rem;
    height: 0.47rem;
    background: url('../assets/images/LOCK.png') no-repeat;

}
.icon_password,.icon_user{
    position: absolute;
    left: 0.68rem;
    top: 0.14rem;
    background-size: 100%;
}
.remberPassword{
    font-size: 0.28rem;
    color: #fff;
    width: 3.7rem;
    margin: 0 auto;
}
.remberPassword input[type='checkbox']{
    width: 0.28rem;
    height: 0.28rem;
    background: #1a48f1;
    border-radius: 2px;
    margin-right: 0.1rem;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 0.05rem;
}
.remberPass1{
    position: absolute;
    left: 6%;
    top: 44%;
    background: url(../assets/images/tick.png) no-repeat;
    width: 0.14rem;
    height: 0.17rem;
    background-size: 100%;
}
.remberPassword span{
    margin-right: 0.6rem;
    position: relative;
}
.loginGet{
    background:url('../assets/images/logina.png');
    margin-top: 0.4rem;

}
.notTel{
    background:url('../assets/images/notLogin.png');
    margin-top: 0.3rem;
}
.inputEnter button{
    width: 6.08rem;
    height: 1.5rem;
    border-radius: 30px;
    border: none;
    background-size: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    outline: none;

}
footer{
    margin: 0.15rem auto;
}

.icon_qq{
    background: url('../assets/images/qq.png') no-repeat;
}
.icon_wechet{
    background: url('../assets/images/wekit.png') no-repeat;
}
.icon_noing{
    background: url('../assets/images/undefind.png') no-repeat;
}
.icon_qq ,.icon_wechet,.icon_noing{
    height: 0.74rem;
    width: 0.74rem;
    background-size: 100%;
    display: inline-block;
}
</style>
