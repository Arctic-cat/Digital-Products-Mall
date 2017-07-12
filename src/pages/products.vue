<template>
  <div class="wrap">
    <div class="top-wrap">
      <div class="top">
        <div class="course-nav">
          <span class="nav-name">方向 :</span>
          <div class="bd">
            <ul>
              <li v-for='(item,index) in deration'><a :href="item.href" target="_blank" :class='{"check":item.check}'  @click='setOn(deration,index)'>{{item.title}}</a></li>
            </ul>
          </div>
        </div>
        <div class="course-nav">
          <span class="nav-name">分类 :</span>
          <div class="bd">
            <ul>
              <li v-for='(item,index) in kind'><a :href="item.href" target="_blank" :class='{"check":item.check}' @click='setOn(kind,index)'>{{item.title}}</a></li>
            </ul>
          </div>
        </div>
        <div class="course-nav border-none">
          <span class="nav-name">类型 :</span>
          <div class="bd">
            <ul>
              <li v-for='(item,index) in sort'><a :href="item.href" target="_blank" :class='{"check":item.check}' @click='setOn(sort,index)'>{{item.title}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="setProduct">
      <types-list :typesList="typesList"></types-list>
    </div>
    <div class="list">
        <template v-if="count">
            <ul>
                <li v-for="item in items">...</li>
            </ul>
            <paging 
            :page-index="currentPage" 
            :total="count" 
            :page-size="pageSize" 
            @change="pageChange">
            </paging>
        </template>
    </div>
  </div>
</template>

<script>
import paging from '../components/paging'
import typesList from '../components/types.vue'
export default {
  components: {
    typesList,
    paging
    },
  methods:{
     setHide(situation){
      situation[0].hide=true;
      situation[0].on=false;
     },
     setOn(situation,index){
      situation.forEach(function (item, index) {
        item.check=false
      }); 
      situation[index].check=true;
      this.setHide(situation)
     },
     //获取数据
      getList () {
          //模拟
          // let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
          let url=`/api/data`
          this.$http.get(url).then((body) => {
              //子组件监听到count变化会自动更新DOM
              this.count = body.data.count
              this.items = body.data.list
          })
      },

      //从page组件传递过来的当前page
      pageChange (page) {
          this.currentPage = page
          this.getList()
      }
  },
  computed:{
    
  },
  mounted(){
    this.getList()
  },
    data(){
      return {
      pageSize : 5 , //每页显示20条数据
      currentPage : 1, //当前页码
      count : 0, //总记录数
      items : [],
      deration:[
        {
          title: '全部',
          href: 'https:www.huaban.com',
          check:true
        }, 
        {
          title: '前端开发',
          href: 'https:www.mi.com',
          check:false
        }, 
        {
          title: '后端开发',
          href: 'https:www.bing.com',
          check:false
        }
      ],
      kind:[
        {
          title: '全部',
          href: 'https:www.huaban.com',
          check:true
        }, 
        {
          title: 'HTML/CSS',
          href: 'https:www.mi.com',
          check:false
        }, 
        {
          title: 'JavaScript',
          href: 'https:www.bing.com',
          check:false
        },
        {
          title: 'Html5',
          href: 'https:www.mi.com',
          check:false
        }, 
        {
          title: 'PHP',
          href: 'https:www.bing.com',
          check:false
        }
      ],
      sort:[
        {
          title: '全部',
          href: 'https:www.huaban.com',
          check:true
        }, 
        {
          title: '基础',
          href: 'https:www.mi.com',
          check:false
        }, 
        {
          title: '案例',
          href: 'https:www.bing.com',
          check:false
        },
        {
          title: '框架',
          href: 'https:www.mi.com',
          check:false
        }
      ],
      typesList:{
          a:{
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
        b:{
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
        c:{
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
        }
      }
    }
  }
}
</script>

<style scoped>
.list{
  float: left; width: 100%; overflow: hidden; position: relative;
}
.top-wrap{
  width: 100%;
  background-color: #fff;
}
.top{
  width: 1200px;
  margin: 0 auto;
}
.course-nav{
  padding: 16px 0 16px;
  border-bottom: 1px solid #edf1f2;
  height: 30px;
}
.border-none{
  border-bottom:none!important;
}
.nav-name{
  width: 52px;
  height: 30px;
  line-height: 30px;
  font-weight: 700;
  font-size: 14px;
  color: #07111b;
  text-align: right;
  float: left;
}
.bd,.hack{
  margin-left: 64px;
}
.hack li{
  display: inline-block;
  color: #14191e;
  padding: 0 0 0 4px;
  margin: 0 -4px 0 0;
  height: 30px;
  line-height: 30px;
  float: left;
}
.bd li{
  display: inline-block;
  margin: 0 4px;
  color: #14191e;
  height: 30px;
  line-height: 30px;
  float: left;
}
.bd a,.hack a{
  display: block;
  line-height: 14px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
}
.check{
  background-color: #2b333b;
  color: #fff;
}
.setProduct{
  margin: 0 auto;
  width: 1200px;
  /* height: 1000px; */
  overflow: hidden;
}
.types{
  position: relative;
  top: 0;
}
</style>
