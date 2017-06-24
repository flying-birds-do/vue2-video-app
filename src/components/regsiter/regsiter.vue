<template>
  <div class="loginBG regsiter_bg" id="regsiter">
    <header class="headImg"> <img src="../assets/images/resigter_icon.png" alt=""></header>
    <div class="inputEnter">
      <form action="">
        <p><span class="icon_iphone"></span><input type="text" class="iponeNum" :placeholder="ipone_num"  v-model='iponeNum'  @click="palceHold('ipone_num')"></p>
        <p><span class="icon_user"></span><input type="text" class="username" :placeholder="user_name"  v-model='userName'   @click="palceHold('user_name')">
        </p>
        <p><span class="icon_password"></span><input type="password" class="password"  :placeholder="text_password"  v-model='password'  @click="palceHold('text_password')">
        <span class="comfi_tip">{{comfi_tip}}</span>
        </p>
        <p><span class="icon_affirm"></span><input type="text" class="username" :placeholder="affirm" v-model='affirm_password'   @click="palceHold('affirm')">
        <span class="comfi_double">{{comfi_double}}</span>
        </p>
          <button type="submit"  class="regsiter" @click="resigSucess"></button>
          <router-link to="/login"><button class="Tel"></button></router-link>
      </form>
  </div>
  <alert-text :conShow='content_show' :info_tip='info_tip'></alert-text>
</div>
</template>
<script>
    import alertText from '../common/alertText'
    export default {
      name: 'regsiter',
      data () {
        return {
          ipone_num: '手机号',
          user_name: '用户名',
          text_password: '密码',
          comfi_tip: '密码由6-10位数字加字母组成',
          comfi_double: '两次输入需要一致',
          affirm: '确认密码',
          text_alert: '您已注册成功',
          iponeNum: '',
          userName: '',
          password: '',
          content_show: false,
          affirm_password: '',
          info_tip: '您已注册成功',
          test: ''
        }
  },
  components: {
        alertText
  },
  methods: {
        palceHold (test) {
          if (test === 'ipone_num') {
            this.ipone_num = ''
          } else if (test === 'user_name') {
            this.user_name = ''
          } else if (test === 'text_password') {
            this.text_password = ''
            this.comfi_tip = ''
          } else if (test === 'affirm') {
            this.affirm = ''
            this.comfi_double = ''
          }
        },
        resigSucess () {
          if (this.iponeNum !== '' && this.userName !== '' && this.password !== '') {
            this.content_show = true
            this.info_tip = '您已注册成功'
            this.$router.push({path: '/userInfo/'})
          } else {
            this.info_tip = '输入不能为空'
            this.content_show = true
          }
          setTimeout(() => {
            this.content_show = false
          }, 1000)
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
    width: 1.35rem;
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
.icon_iphone {
  width: 0.31rem;
  height: 0.53rem;
  background: url('../assets/images/ipone.png') no-repeat;
}
.icon_affirm {
   width: 0.44rem;
  height: 0.41rem;
  background: url('../assets/images/marksure.png') no-repeat;
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
.comfi_tip {
  position: absolute;
  right: 1.3rem;
  top: 0.2rem;
  font-size: 0.24rem;
}
.comfi_double {
   position: absolute;
  left: 3.123456rem;
  top: 0.2rem;
  font-size: 0.24rem;
}
.icon_password,.icon_user,.icon_iphone,.icon_affirm{
    position: absolute;
    left: 0.68rem;
    top: 0.14rem;
    background-size: 100%;
}
.regsiter{
    background:url('../assets/images/resigter_btn.png') no-repeat;
    margin-top: 0.4rem;

}
.Tel{
    background:url('../assets/images/have_id.png') no-repeat;
    margin-top: 0.3rem;
}
.inputEnter button{
    width: 6.08rem;
    height: 1.3rem;
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
.inputEnter ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#b3afaf;
}
.inputEnter :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:#b3afaf;
}
.inputEnter ::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:#b3afaf;
}
.inputEnter :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:#b3afaf;
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
