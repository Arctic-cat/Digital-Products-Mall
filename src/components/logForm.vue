<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../eventBus'
export default {
  data () {
    return {
      usernameModel:'',
      passwordModel:'',
      errorText: ''
    }
  },
  computed:{
    userErrors(){
      let errorText,status;
      if(!/@/g.test(this.usernameModel)){
        status=false;
        errorText='请输入正确的邮箱地址'
      }
      else{
        status=true;
        errorText=''
      }
      if (!this.userflag) {
        errorText='';
        this.userflag=true;
      }
      return {
        errorText,
        status
      }
    },
    passwordErrors(){
      let errorText,status;
      if(!/^\w{1,6}$/g.test(this.passwordModel)){
        status=false;
        errorText='密码必须1-6位'
      }
      else{
        status=true;
        errorText=''
      }
      if (!this.passwordflag) {
        errorText='';
        this.passwordflag=true;
      }
      return {
        errorText,
        status
      }
    }
  },
  methods:{
    triggerClose () {
      eventBus.$emit('close-my','isShowLogDialog')
    },
    onLogin(){
      let reqId = {
        name:this.usernameModel,
        password:this.passwordModel
      }
      if(!this.userErrors.status || !this.passwordErrors.status){
        this.errorText='部分选项未通过'
      }
      else{
        this.errorText='';
        this.$http.post('api/login',reqId).then((data)=>{
          this.$emit('has-log',data)
        }, (error)=>{
          console.log(error)
        });
        this.triggerClose ();
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
