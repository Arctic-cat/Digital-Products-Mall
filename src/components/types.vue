<template>
  <div class="types">
    <div class="typesList" v-for='item in typesList'>
        <div class="head" v-if='item.title'>
          <h3 class="title">{{item.title}}</h3>
          <a :href="item.more" target="_blank"><p class="more">{{item.moreLabel}}</p></a>
        </div>
      <div class="cards" v-for='list in item.list' :class="{'right-space':!list.last}">
        <a :href="list.href" target="_blank">
          <div class="card-top">
            <i class="card-icon"></i>
            <p class="card-tag">{{list.label}}</p>
          </div>
          <div class="card-content">
            <h4 class="card-title">{{list.name}}</h4>
            <p>{{list.detail}}</p>
            <div class="card-bottom">
              <div class="card-info">{{list.people}}人在学</div>
              <div class="card-price">￥{{list.price}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import dialog from './dialog'

export default {
  // components:{
  //   myDialog:dialog,
  //   logForm,
  //   regForm
  // },
  props:{
      typesList:{
        type:Object,
        default:null
      }
    },
  data () {
    return {
      
    }
  },
  methods:{

  }
}
</script>


<style>
.types{
  position: absolute;
  top:656px;
}
.typesList{
  float:left;
  width: 1200px;
  padding-top: 20px;
}
.cards{
  float: left;
  width: 224px;
  height: 228px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
  background-color: #fff;
}
.cards a{
  display: inline-block;
}
.right-space{
  margin-right: 20px;
}
.head{
  margin-bottom: 20px;
  height: 20px;
}
.title{
  font-size: 20px;
  font-weight: 200;
  color: #07111b;
  float: left;
}
.more{
  line-height: 20px;
  float: right;
  color: #93999f;
  font-size: 14px;
}
.card-top{
  height: 48px;
  padding: 0 20px;
  background: linear-gradient(270deg,rgba(255,115,155,.7),#ff739b);
}
.card-tag{
  float: left;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  line-height: 48px;
  margin-right: 10px;
}
.card-content{
  width: 225px;
  height: 180px;
  padding: 16px 24px;
  box-sizing: border-box;
}
.card-title{
  font-size: 14px;
  color: #07111b;
  line-height: 24px;
  max-height: 48px;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
}
.card-content p{
  font-size: 12px;
  color: #93999f;
  line-height: 24px;
  margin: 8px 0;
  height: 75px;
  overflow: hidden;
}
.card-bottom{
  height: 24px;
}
.card-info{
  float: left;
  margin: 0;
  font-size: 12px;
  color: #93999f;
  line-height: 24px;
}
.card-price{
  float: right;
  color: #f01414;
  font-weight: 200;
  line-height: 24px;
}
</style>
