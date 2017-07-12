<template>
  <div class="detail-wrap">
    <div v-for='li in products'>
      <div class="detail-top-block">
        <img src="../assets/images/1.png">
        <div class="detail-product-title">
          <h2>{{li.name}}</h2>
          <p>{{li.info}}</p>
        </div>
        <div class="detail-selection">
          <div class="detail-sales-board-line">
            <div class="detail-selection-item">
              <h4>购买数量：</h4><counter :max=20 @on-change="onParamChange('buyNum', $event)"></counter>
            </div>
            <div class="detail-selection-item">
              <h4>产品类型：</h4><chooser :selections='buyTypes' @on-change="onParamChange('buyType', $event)"></chooser>
            </div>
            <div class="detail-selection-item">
              <h4>产品周期：</h4><selection :selections='periodList' @on-change="onParamChange('period', $event)"></selection>
            </div>
            <div class="detail-selection-item">
              <h4>产品版本：</h4><mul-chooser :selections='versionList' @on-change="onParamChange('versions', $event)"></mul-chooser>
            </div>
            <div class="detail-selection-item">
              <h4>总价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp：</h4><h4 style="float:none">{{ price }}元</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-bottom-block">
        <div class="detail-sales-board-des">
          <h3>{{li.subName}}</h3>
          <p>{{li.subInfo}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import selection from '../components/selection.vue'
import chooser from '../components/chooser.vue'
import counter from '../components/counter.vue'
import mulChooser from '../components/multiplyChooser.vue'
export default {
  components: {
    selection,
    chooser,
    counter,
    mulChooser
    },
  methods:{
     onParamChange (attr, val) {
      this[attr] = val
      this.getPrice()
    },
    getPrice () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(',')
      }
      this.$http.post('/api/getPrice', reqParams)
      .then((res) => {
        this.price = res.data.amount
      })
    },
    showPayDialog(){
      this.isPayShow=true
    },
    hidePayDialog(){
      this.isPayShow=false
    },
    showCheckOrder(){
      this.isShowCheckDialog=true
    },
    hideCheckOrder(){
      this.isShowCheckDialog=false
    },
    onChangeBanks(bankObj){
      this.bankId=bankObj.id
    },
    confirmBuy(){
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(','),
        bankId:this.bankId
      }
      this.$http.post('/api/creatOrder', reqParams)
      .then((res) => {
        this.orderId = res.data.orderId;

      },(erro)=>{
        console.log(erro);
        this.isShowCheckDialog=true;
        this.isPayShow=false
      })
    }
  },
  computed:{
    
  },
  mounted(){
    this.buyNum = 1
    this.buyType = this.buyTypes[0]
    this.versions = [this.versionList[0]]
    this.period = this.periodList[0]
    this.getPrice()
  },
    data(){
      return {
      products: [
        {
          name: '数据统计',
          info:'是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的',
          subName:'产品说明',
          subInfo:'网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。',
          path: 'count'
        }
      ],
      buyTypes: [
        {
          label: '入门版',
          val:0
        },
        {
          label: '中级版',
          val:1
        },
        {
          label: '高级版',
          val:2
        }
      ],
      buyNum: 0,
      buyType: {},
      versions: [],
      period: {},
      price: 0,
      versionList: [
        {
          label: '客户版',
          value: 0
        },
        {
          label: '代理商版',
          value: 1
        },
        {
          label: '专家版',
          value: 2
        }
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      isPayShow : false,
      bankId:null,
      isShowCheckDialog:false
    }
  }
}
</script>

<style>
.detail-selection-item h4{
  float: left;
  height: 27px;
  line-height: 27px;
}
.detail-selection-item{
  padding-bottom: 20px;
}
.detail-wrap{
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  min-height:100%;
}
.detail-top-block{
  margin: 20px 0;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.detail-bottom-block{
  margin: 20px 0;
  background: #fff;
}
.detail-product-title{
  overflow: hidden;
  position: relative;
  margin:40px 0 20px 0;
  padding-left: 20px;
}
.detail-product-title h2{
  font-size: 20px;
  font-weight: 700;
}
.detail-product-title p{
  padding: 10px 0;
  color: #999;
  line-height: 1.8;
}
.detail-top-block img{
  float: left;
  margin: 20px 0 0 20px;
}
.detail-selection{
  clear: both;
  margin: 0 0 0 20px;
  padding: 0 0 20px 120px;
}
.detail-sales-board-line{
  clear: both;
  padding-bottom: 20px;
}
.detail-sales-board-des{
  padding: 15px 20px;
}
.detail-sales-board-des h3{
  padding-bottom: 15px;
  font-size: 18px;
}
.detail-sales-board-des p{
  padding-bottom: 30px;
}
</style>
