<template>
  <div class="qwe" @click='resetComponent()'>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
            <img src="../assets/logo.png" class="logo">
        </router-link>
        <div class="head-nav">
            <ul class="nav-left-list">
              <li>首页</li>
              <li>课程</li>
            </ul>
            <ul class="nav-right-list">
              <li @click="cart">购物车</li>
              <li class="nav-pile">|</li>
              <li> {{ username }}</li>
              <li v-if="username!== ''" class="nav-pile">|</li>
              <li v-if="username!== ''" @click="quit">退出</li>
              <li v-if="username=== ''" @click="logClick">登录</li>
              <li class="nav-pile">|</li>
              <li v-if="username=== ''" @click="regClick">注册</li>
              <li v-if="username=== ''" class="nav-pile">|</li>
              <li @click="aboutClick">关于</li>
            </ul>
          </div>  
        </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <ul>
        <li><a href="#">企业合作</a></li>
        <li><a href="#">人才招聘</a></li>
        <li><a href="#">联系我们</a></li>
        <li><a href="#">讲师招募</a></li>
        <li><a href="#">意见反馈</a></li>
      </ul>
      <p>© 2016 leojac.com</p>
    </div>
    <my-dialog :isShow='isShowLogDialog' @on-close='closeDialog("isShowLogDialog")'>
      <log-form @has-log='onSuccessLog'></log-form>
    </my-dialog>
    <my-dialog :isShow='isShowRegDialog' @on-close='closeDialog("isShowRegDialog")'>
      <reg-form @has-reg='onSuccessReg'></reg-form>
    </my-dialog>
    <my-dialog :isShow='isShowAboutDialog' @on-close='closeDialog("isShowAboutDialog")'>
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
  </div>
</template>

<script>
import {eventBus} from '../eventBus'
import dialog from './dialog'
import logForm from './logForm'
import regForm from './regForm'
export default {
  components:{
    myDialog:dialog,
    logForm,
    regForm
  },
  mounted(){
    eventBus.$on('close-my', (data) => {
      this[data]=false
    })
  },
  data () {
    return {
      isShowLogDialog:false,
      isShowRegDialog:false,
      isShowAboutDialog:false,
      username: ''
    }
  },
  methods:{
    logClick(){
      this.isShowLogDialog=true
    },
    regClick(){
      this.isShowRegDialog=true
    },
    aboutClick(){
      this.isShowAboutDialog=true
    },
    closeDialog(attr){
      this[attr]=false
    },
    onSuccessLog(data){
      this.username =data.username
    },
    onSuccessReg(data){
      this.username =data.username
    },
    resetComponent(){
      eventBus.$emit('reset-component')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
html,body {
  margin: 0;
  padding:0;
  height: 100%;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.qwe{
  min-height: 100%;
/*   适配IE6 */
/*   height: auto !important;
  height: 100%; */
  position: relative;
  overflow: hidden;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;

}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.logo{
  float: left
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-left-list{
  float: left;
}
.nav-left-list li{
  margin-left: 30px;
  color: #fff;
  font-size: 15px;
}
.nav-right-list{
  float: right;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  background: #fff;
  clear: both;
  color: #99a1a6;
  position: absolute;
  margin-top: 20px;
  bottom: 0;
}
.app-foot ul{
  text-align: center;
}
.app-foot li{
  display:inline-block;
  margin-top: 20px;
  margin-right: 25px;
  margin-left: 25px;
}
.app-foot p{
  margin-top: 15px;
}
.container {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
