<template>
  <div class="page-item">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
        <b-breadcrumb-item to="/" disabled>空间分类</b-breadcrumb-item>
        <b-breadcrumb-item :to="{name: 'goods-name', params: { name: asyncData.goods.category.key }}">{{asyncData.goods.category.title}}</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="detail">
        <div class="galler">
          <div class="booth">
            <img ref="cover" class="cover" :src="asyncData.goods.diskfile.path" width="700">
          </div>
          <div class="thumb-warp">
            <div class="thumb-content" ref="thumb">
              <img class="selected" :src="asyncData.goods.diskfile.path">
              <img v-for="(gallery,index) in asyncData.goods.galleryList" :key="index" :src="gallery.image">
            </div>
          </div>
        </div>
        <div class="property">
          <h1 class="name">{{asyncData.goods.name}}</h1>
          <p class="brief">{{asyncData.goods.subtitle}}</p>
          <div class="tag">
            <a>玖米空间</a>
            <a>玖米之内好好生活</a>
          </div>
          <div class="spe">规格：<span>免费出方案 ( 具体价格以设计方案为准，详情咨询客服 ) </span></div>
          <img src="~/assets/images/pservice.jpg" style="margin-top: 60px;width: 420px">
          <div class="tool">
            <div class="tool-left">
              <span class="feedback" @click="openFeedback">免费设计</span>
              <span class="call" onclick="openBaidu()">咨询客服</span>
            </div>
            <div class="tool-right" @click="favorite">喜欢 <span>{{asyncData.goods.favorite}}</span></div>
          </div>
        </div>
      </div>
      <div class="details">
        <side-hot :list="goodsHot" />
        <div class="content-wrap">
          <div class="mobile-web">
            手机浏览
            <img src="~/assets/images/qricon.png">
            <qriously class="qrcode" :value="mqrurl" :size="148"></qriously>
          </div>
          <b-tabs>
            <b-tab title="商品详情" active>
              <div class="content">
                <img v-for="(details, index) in asyncData.goods.detailsList" :key="index" :src="details.path">
              </div>
            </b-tab>
            <b-tab title="品牌服务">
              <div class="content">
              <img src="//m.9-mi.cn/static/img/brand1.647186a.jpg"><img src="//m.9-mi.cn/static/img/brand2.294d6bf.jpg"> <img src="//m.9-mi.cn/static/img/brand3.0a5cbdf.jpg">
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
import VueQriously from 'vue-qriously'
import CreateAPI from 'vue-create-api'
import { goods as getGoods, addFavorite } from '../../utils/api'
import SideHot from '../../components/side-hot'
import JumiPopupFeedback from '../../components/jumi-popup-feedback'

Vue.use(VueQriously)
Vue.use(CreateAPI)
Vue.createAPI(JumiPopupFeedback, true)

export default {
  watchQuery: true,
  data () {
    return {
      qrurl: "http://m.9-mi.cn/item/"
    }
  },
  head () {
    return {
      title: this.asyncData.goods.name + '-玖米空间',
      meta: [
        { hid: 'description', name: 'description', content: this.asyncData.goods.description }
      ]
    }
  },
  async asyncData ({ params: { id } }) {
    const { data: { goods } } = await getGoods(id)
    return {
      asyncData: { goods }
    }
  },
  mounted: function () {
    const _thumb = this.$refs.thumb
    _thumb.addEventListener('click', event => {
      if (event.target.nodeName !== 'IMG') {
        return true
      }
      const _oldChild = this.$refs.thumb.getElementsByClassName("selected")[0]
      _oldChild.className =''
      event.target.className +='selected'
      this.$refs.cover.src = event.target.currentSrc
    })
  },
  methods: {
    openFeedback() {
      this.poput = this.$createJumiPopupFeedback()
      this.poput.show()
    },
    favorite: function (event) {
      event.target.className += ' like'
      event.target.childNodes[1].innerText = this.asyncData.goods.favorite + 1
      addFavorite(this.$route.params.id)
    }
  },
  computed: {
    ...mapGetters({
      goodsHot: 'category/goodsHot'
    }),
    mqrurl: function () {
      return this.qrurl + this.$route.params.id
    }
  },
  components: { SideHot, JumiPopupFeedback }
}
</script>

<style lang="stylus">
.page-item
  padding-bottom: 35px
  background-color: #fff
  .breadcrumb
    margin-bottom: 10px
    padding: 10px 0
    background: inherit
    a
      color: #666
  .detail
    display: flex
    padding: 25px 0
    justify-content: space-between
    background-color: #fff
    .galler
      width: 620px
      .booth
        .cover
          width: 620px
      .thumb-warp
        margin-top: 26px
        .thumb-content
          display: flex
          img
            margin: 0 5px
            padding-top: 2px
            width: 115px
            height: 100px
            cursor: pointer
            &:first-child
              margin-left: 0
            &.selected
              padding-top: 0
              border: 2px solid #cb0d1c
    .property
      width: 480px
      .name
        margin-bottom: 10px
        font-size: 20px
        font-weight: bold
      .tag
        margin-bottom: 10px
        a
          margin-right: 10px
          padding: 2px 9px
          color: #fff
          background-color: #ffa100
      .brief
        color: #333
        font-size: 14px
      .spe
        margin-top: 40px
        font-size: 14px
        line-height: 38px
        color: #212121
        span
          margin-left: 12px
          padding: 8px 10px
          border: 1px solid #ffa100
      .tool
        display: flex
        justify-content: space-between
        margin-top: 80px
        .tool-left
          span
            padding: 13px 36px
            font-size: 16px
            color: #fff
            background-color: #ffa100
            cursor: pointer
            &.feedback
              margin-right: 20px
              background-color: #cb0d1c
        .tool-right
          position: relative
          padding-left: 32px
          &:before
            content: ""
            position: absolute
            left: 5px
            width: 22px
            height: 19px
            background: url(../../assets/images/unlove.png) no-repeat center center
            background-size: 100%
            transition: all .3s
          &.like
            &:before
              background: url(../../assets/images/onlove.png) no-repeat center center
          &:hover
            color: #ffa100
            cursor: pointer
  .details
    display: flex
    .content-wrap
      position: relative
      width: 788px
      .mobile-web
        position: absolute
        right: 1px
        top: 1px
        width: 145px
        padding-right: 12px
        text-align: right
        line-height: 47px
        cursor: pointer
        transition: all .3s
        .qrcode
          position: absolute
          right: -3px
          padding: 0px
          height: 148px
          background-color: #fff
          opacity: 0
        &:hover
          background-color: #f5f5f5
          .qrcode
            opacity: 1
      .tabs
        .nav-tabs
          border: 1px solid #dfdfdf
        .nav-link
          border-radius: 0
          line-height: 30px
          border: none
          &.active
            border-left: 1px solid #dfdfdf
            border-right: 1px solid #dfdfdf
            border-top: 2px solid #ff0036
            background-color: transparent
      .tab-pane
        text-align: center
        .content
          margin-top: 20px
          img
            max-width: 100%
            min-width: 790px
</style>

