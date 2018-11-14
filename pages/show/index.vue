<template>
  <div class="page-show">
    <img src="~static/images/show-banner.jpg" width="100%" />
    <div class="show-wrap">
      <div class="show-header">
        <span class="show-title">精美案例</span>
      </div>
      <Waterfall :list="asyncData.nodes" ></Waterfall>
      <div :class="{ loading: isLoading }" class="loading-box">
        <div class="line"></div>
        <div class="loader"></div>
      </div>
      <div class="bnt-more" @click="moreShow">{{loadtext}}</div>
      <p class="total">找到卖家秀约 {{asyncData.totalCount}} 家</p>
    </div>
  </div>
</template>

<script>
import Waterfall from '~/components/waterfall'
import { listOfArticle } from '../../utils/api'

export default {
  name: 'show',
  data () {
    return {
      isLoading: false,
      loadtext: '加载更多',
      paging: {
        first: 30,
        skip: 30
      }
    }
  },
  head () {
    return {
      title: '玖米空间买家晒图'
    }
  },
  async asyncData () {
    const { data: { listOfArticle: { nodes, totalCount } } } = await listOfArticle(30, 0, 'show')
    return {
      asyncData: { nodes, totalCount }
    }
  },
  methods: {
    async moreShow () {
      this.isLoading = true
      const { first, skip } = this.paging
      const { data: { listOfArticle: { nodes } } } = await listOfArticle(first, skip, 'show')
      setTimeout(() => {
        if (nodes.lenth > 0) {
          this.asyncData.nodes = this.asyncData.nodes.concat(nodes)
          this.paging.skip += first
        } else {
          this.loadtext = '加载完毕'
        }
        this.isLoading = false
      }, 400)
    }
  },
  components: {
    Waterfall
  }
}
</script>

<style lang="stylus">
.page-show
  padding-bottom: 60px
  .show-wrap
    padding: 0 50px
    .show-header
      padding: 30px 5px
      .show-title
        font-size: 22px
        color: #000
    .loading-box
      margin-top: 30px
      padding-top: 10px
      height: 52px
      text-align: center
      visibility: hidden
      .line
        border-top: 1px dashed #ccc
        font-size: 0
        overflow: hidden
      .loader
        background: url(../../assets/images/loading.gif) no-repeat 10px 10px
        height: 52px
        margin: -26px auto
        padding: 10px
        width: 52px
      &.loading
        visibility: inherit
    .bnt-more
      position: relative
      margin: 0 auto
      width: 190px
      height: 38px
      line-height: 38px
      background: url(https://p.ssl.qhimg.com/t01e9364b3ace6b45c8.png) no-repeat 59px
      background-size: 16px 16px
      border: 1px solid #e2e2e2
      border-radius: 1px
      color: #333
      font-size: 14px
      font-weight: 700
      padding-left: 82px
      text-decoration: none
      cursor: pointer
      &:hover
        border: 1px solid #000
    .total
      margin-top: -28px
      padding-left: 400px
      text-align: center
      color: #999
</style>
