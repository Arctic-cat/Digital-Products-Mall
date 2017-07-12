<template>
  <div class="menu-content">
    <div class="index-wrap">
        <div class="index-right">
          <swiper-show :slides="slides"></swiper-show>
        </div>
        <div class="index-left" >
          <div class="index-left-block"  v-for='(item,key,index) in menu' @mouseout='nowIndex=10'>
            <div class="main-menu" @mouseover='nowIndex=index'>
              <div class="item" >
                <a href="#">{{item.name}}<i>></i></a>
              </div>
              <div class="hr" v-if='!item.last'></div>
            </div>
            <div class="submenu-wrap" v-show='index==nowIndex' @mouseover='nowIndex=index'>
              <div class="submenu">
                <h4>{{item.indexsTypes}}{{key}}{{index}}</h4>
                <dl class="indexs-type" v-for='type in item.Types'>
                  <dt>{{type.label}}</dt>
                  <dd>{{type.detail}}</dd>
                </dl>
                <h4 class="course-recom">{{item.courseRecom}}</h4>
                <dl :class="recom.class"  v-for='recom in item.Recoms'>
                  <dt>{{recom.label}}</dt>
                  <dd>{{recom.detail}}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pathBanner">
        <div class="pathBanner-item"  v-for="item in pathBanner">
          <img :src="item.src" height="48" width="48">
          <h4 class="pathBanner-title">{{item.title}}</h4>
          <p class="pathBanner-info">{{item.info}}</p>
          <div class="pathBanner-line" v-if='!item.last'></div>
        </div>
      </div>
      <types-list :typesList="typesList"></types-list>
  </div>
</template>

<script>
// import slideShow from '../components/slideShow.vue'
import swiperShow from '../components/swiperShow.vue'
import typesList from '../components/types.vue'
export default {
    components: {
      swiperShow,
      typesList
    },
    methods:{
      
  },
  mounted(){
    
  },
    data(){
      return {
        nowIndex:10,
        typesList:{
          good:{
            title: '实战推荐',
            moreLabel:'更多 >',
            more:'http://www.mi.com',
          list: [
            {
                label: 'C++ 算法',
                name:'算法与结构精讲',
                detail:'同步配套Java代码，梳理编程思路',
                people:5225,
                price:122,
                href:'http://www.mi.com'
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                price:108,
                href:'http://www.mi.com'
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                price:108,
                href:'http://www.mi.com'
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                price:108,
                href:'http://www.mi.com'
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                price:108,
                href:'http://www.mi.com',
                last:true
            }           
          ]
        },
        free:{
          title: '免费好课',
          moreLabel:'更多 >',
          more:'http://www.mi.com',
          list: [
            {
                label: 'HTML/CSS',
                name:'算法与结构精讲',
                detail:'同步配套Java代码，梳理编程思路',
                people:5225,
                href:'http://www.mi.com',
                price:122
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                href:'http://www.mi.com',
                price:108
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                href:'http://www.mi.com',
                price:108
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                href:'http://www.mi.com',
                price:108
            },
            {
                label: 'WebApp Vue.js',
                name:'Vue.js前端框架精讲',
                detail:'实战代码，梳理编程思路',
                people:4635,
                price:108,
                href:'http://www.mi.com',
                last:true
            }           
          ]
        }
      },
      menu:{
        a:{
          name:'前端开发',
          indexsTypes: '分类目录',
          Types: [
            {
                label: '基础:',
                detail:'HTML/CSS / JavaScript / jQuery'
            },
            {
                label: '进阶:',
                detail:'Html5 / CSS3 / JavaScript / jQuery'
            }     
          ],
          courseRecom: '课程推荐',
          Recoms: [
            {
                label: '职业路径',
                detail:'前端小白入门手册',
                class:'career-path'
            },
            {
                label: '实战',
                detail:'Html5与CSS3实现动态网页',
                class:'actual-fight'
            }     
          ]
        },
        b:{
          name:'后端开发',
          indexsTypes: '分类目录',
          Types: [
            {
                label: '基础:',
                detail:'PHP'
            },
            {
                label: '进阶:',
                detail:'PHP / Java / Python'
            }     
          ],
          courseRecom: '课程推荐',
          Recoms: [
            {
                label: '职业路径',
                detail:'后端小白入门手册',
                class:'career-path'
            },
            {
                label: '实战',
                detail:'PHP实现商城数据管理',
                class:'actual-fight'
            }     
          ]
        },
        c:{
          name:'移动开发',
          indexsTypes: '分类目录',
          Types: [
            {
                label: '基础:',
                detail:'PHP'
            },
            {
                label: '进阶:',
                detail:'PHP / Java / Python'
            }     
          ],
          courseRecom: '课程推荐',
          Recoms: [
            {
                label: '职业路径',
                detail:'后端小白入门手册',
                class:'career-path'
            },
            {
                label: '实战',
                detail:'PHP实现商城数据管理',
                class:'actual-fight'
            }     
          ]
        },
        d:{
          name:'数据库',
          indexsTypes: '分类目录',
          Types: [
            {
                label: '基础:',
                detail:'PHP'
            },
            {
                label: '进阶:',
                detail:'PHP / Java / Python'
            }     
          ],
          courseRecom: '课程推荐',
          Recoms: [
            {
                label: '职业路径',
                detail:'后端小白入门手册',
                class:'career-path'
            },
            {
                label: '实战',
                detail:'PHP实现商城数据管理',
                class:'actual-fight'
            }     
          ]
        },
        e:{
          name:'云计算',
          indexsTypes: '分类目录',
          Types: [
            {
                label: '基础:',
                detail:'PHP'
            },
            {
                label: '进阶:',
                detail:'PHP / Java / Python'
            }     
          ],
          courseRecom: '课程推荐',
          Recoms: [
            {
                label: '职业路径',
                detail:'后端小白入门手册',
                class:'career-path'
            },
            {
                label: '实战',
                detail:'PHP实现商城数据管理',
                class:'actual-fight'
            }     
          ]
        },
        f:{
          name:'运维',
          indexsTypes: '分类目录',
          Types: [
            {
                label: '基础:',
                detail:'PHP'
            },
            {
                label: '进阶:',
                detail:'PHP / Java / Python'
            }     
          ],
          courseRecom: '课程推荐',
          Recoms: [
            {
                label: '职业路径',
                detail:'后端小白入门手册',
                class:'career-path'
            },
            {
                label: '实战',
                detail:'PHP实现商城数据管理',
                class:'actual-fight'
            }     
          ]
        },
        g:{
          name:'测试',
          last:true,
          indexsTypes: '分类目录',
          Types: [
            {
                label: '基础:',
                detail:'PHP'
            },
            {
                label: '进阶:',
                detail:'PHP / Java / Python'
            }     
          ],
          courseRecom: '课程推荐',
          Recoms: [
            {
                label: '职业路径',
                detail:'后端小白入门手册',
                class:'career-path'
            },
            {
                label: '实战',
                detail:'PHP实现商城数据管理',
                class:'actual-fight'
            }     
          ]
        }
      },
        slides:[
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'analysis',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'count',
            href: 'detail/count'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'publish',
            href: 'detail/publish'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'forecast',
            href: 'detail/forecast'
          }
      ],
      pathBanner:{
        web:{
          title: 'Web前端攻城狮',
          info: '互联网时代最火爆的技术',
          src:require('../assets/pathBanner/1.jpg')
        }, 
        php:{
          title: 'PHP攻城狮',
          info: '世界上最好的语言:)',
          src:require('../assets/pathBanner/2.jpg')
        },
        android:{
          title: 'Android攻城狮',
          info: '移动设备市场份额第一',
          src:require('../assets/pathBanner/3.jpg')
        },
        java:{
          title: 'Java攻城狮',
          info: '健壮，安全，适用广泛',
          src:require('../assets/pathBanner/4.jpg')
        },
        ios:{
          title: 'IOS攻城狮',
          info: '可能是世界上最好的系统',
          src:require('../assets/pathBanner/5.jpg'),
          last:true
        }
      }
    }
  }
}
</script>

<style scoped>
.menu-content {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  min-height: 1500px;
}
.index-wrap{
  float: left;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  position: absolute;
  z-index: 10000;
  width: 300px;
  text-align: left;
  margin:15px 0 0 0;
}
.index-right {
  position: absolute;
  right: 0px;
  width: 900px;
  margin-top: 15px;
  z-index: 1;
}
.index-left-block {
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.main-menu{
  background: #000;
  opacity:0.6;
  filter:alpha(opacity=60);
}
.index-left-block .hr {
  width: 78%;
  margin: 0 auto;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block>div .item {

  font-size: 16px;
  color: #fff;
  padding: 27.8px 0 27.7px 30px;
}
.index-left-block>div .item:hover {
  cursor:pointer;
  background: #222;
}
.index-left-block i{
  float: right;
  font-style:normal;
  padding-right: 45px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* .index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
} */
.pathBanner{
  position: absolute;
  top: 522px;
  width: 1200px;
  background: #fff;
}
.pathBanner-line{
  border-right:1px solid #D9DDE1;
  height: 35px;
  margin-top: 8px;
}
.pathBanner-item{
  width: 239px;
  float: left;
  margin-top: 40px;
  margin-bottom: 40px;
}
.pathBanner-item img{
  float: left;
  margin-left: 20px;
  margin-right: 16px;
}
.pathBanner-title{
  float: left;
  font-size: 16px;
  font-weight: bold;
  margin: 7px 0
}
.pathBanner-info{
  float: left;
  font-size: 12px;
  color: #979ca2;
}
.submenu-wrap{
  width: 730px;
  height: 506px;
  background-color: #fff;
  position: absolute;
  top: 0px;
  left:300px;
  border: solid 1px #d9dde1;
}
.submenu{
  margin-left: 30px;
  margin-top: 30px;
}
.submenu h4{
  color: #07111b;
  font-size: 16px;
  line-height: 16px;
  margin-top: 32px;
  font-weight: 700;
  margin-bottom: 13px;
}
.indexs-type dt{
  float: left;
  line-height: 28px;
  color: #4d555d;
  font-weight: 700;
  margin-right: 8px;
}
.indexs-type dd{
  color: #07111b;
  line-height: 28px;
}
.submenu span{
  margin: 0 10px;
  color : #14191e;
}
.career-path dt{
  float: left;
  height: 28px;
  line-height: 28px;
  color: #f11413;
  margin-right: 8px;
  display: inline-block;
  padding: 0px 8px;
  background-color: rgba(240,20,20,.1);
  font-size: 12px;
  margin-bottom: 12px;
}
.career-path dd{
  color: #f11413;
  height: 28px;
  line-height: 28px;
  margin-bottom: 12px;
}
.actual-fight dt{
  float: left;
  height: 28px;
  line-height: 28px;
  color: #07111b;
  margin-right: 8px;
  display: inline-block;
  padding: 0px 8px;
  background: #f3f5f7;
  font-size: 12px;
  margin-bottom: 12px;
}
.actual-fight dd{
  color: #07111b;
  height: 28px;
  line-height: 28px;
  margin-bottom: 12px;
}
</style>
