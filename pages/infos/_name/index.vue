<template>
  <div class="page-info-list">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
        <b-breadcrumb-item :to="{name: 'infos'}">定制资讯</b-breadcrumb-item>
        <b-breadcrumb-item :to="{ name: 'infos-name', params: { name: asyncData.nodes[0].articleCategory.key } }" >{{asyncData.nodes[0].articleCategory.title}}</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="info-list-wrap">
        <div class="com-inner-card info-list-content">
          <nuxt-link class="item" v-for="article in asyncData.nodes" :key="article.id" :to="{ name: 'info-id', params: { id: article.id } }">
            <div class="item-left">
              <div class="item-bgimg" :style="{backgroundImage: `url(${article.cover.path})`}"></div>
            </div>
            <div class="item-right">
              <h3>{{article.title}}</h3>
              <p>{{article.description}}</p>
              <div class="bottom-tag"></div>
            </div>
          </nuxt-link>
          <div class="pagination-wrap">
            <b-pagination
              hide-goto-end-buttons
              :total-rows="asyncData.totalCount"
              v-model="asyncData.currentPage"
              :per-page="asyncData.first"
              next-text="下一页>"
              prev-text="<上一页"
              size="lg"
            ></b-pagination>
        </div>
        </div>
        <div class="com-inner-card info-list-hot">
          <div class="hot-wrap hot-goods">
            <h1>精品案例</h1>
            <nuxt-link class="item" to="/show/9" target="_blank">
              <img src="https://api.9-mi.cn/resource/file/201809260949264870.jpg">
              <p class="title">细腻温静的休闲空间，奢华中可见的低调</p>
            </nuxt-link>
            <nuxt-link class="item" to="/show/6" target="_blank">
              <img src="https://api.9-mi.cn/resource/file/201809191029169870.jpg">
              <p class="title">阳台改书房，来做客的朋友都说赞！</p>
            </nuxt-link>
            <nuxt-link class="item" to="/show/10" target="_blank">
              <img src="https://api.9-mi.cn/resource/file/201809261026460230.jpg">
              <p class="title">阳台如何兼顾休闲与实用：阳光的味道，衣服和你都想知道</p>
            </nuxt-link>
          </div>
          <div class="hot-wrap hot-info">
            <side-hot :list="goodsHot" />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { listOfArticle } from '../../../utils/api'
import SideHot from '../../../components/side-hot'

export default {
  watchQuery: true,
  async asyncData ({ params: { name }, query: { sort = 'sort', page = 1 } }) {
    const first = 20
    const skip = first * (page - 1)
    const { data: { listOfArticle: { nodes, totalCount } } } = await listOfArticle(first, skip, name)
    return {
      asyncData: {
        nodes, totalCount, first, currentPage: +page
      }
    }
  },
  head () {
    return {
      title: this.asyncData.nodes[0].articleCategory.title
    }
  },
  computed: mapGetters({
    goodsHot: 'category/goodsHot'
  }),
  watch: {
    asyncData: {
      handler(val, oldval) {
        this.$router.push({ name: 'infos-name', params: { name: this.$route.params.name }, query: { page: val.currentPage } })
      },
      immediate: true,
      deep: true
    }
  },
  components: { SideHot }
}
</script>

<style lang="stylus">
.page-info-list
  padding-bottom: 35px
  background-color: #f5f5f5
  overflow: hidden
  .breadcrumb
    margin-bottom: 10px
    padding: 10px 0
    background: inherit
    a
      color: #666
  .info-list-wrap
    .info-list-content
      padding: 30px 20px
      width: 850px
      float: left
      background-color: #fff
      .item
        display: flex
        margin-bottom: 40px
        .item-left
          margin-right: 20px
          height: 186px
          flex: 0 0 300px
          overflow: hidden
          .item-bgimg
            width: 100%
            height: 100%
            background-size: contain
            background-position: 50% 50%
            background-repeat: no-repeat
            transition: all .5s ease-out
          &:hover
            .item-bgimg
              transform: scale(1.03)
        .item-right
          margin-top: 20px
          h3
            color: #000
            font-size: 18px
            font-weight: 700
          p
            margin-top: 20px
            font-size: 14px
            color: #666
      .pagination-wrap
        margin-top: 25px
        .pagination
          justify-content: center
          .page-item
            .page-link
              color: #888
              font-size: 14px
              transition: all 0.3s
              &:hover
                background-color: #fff
                color: #f18912
                border: 1px solid #f18912
            &.active
              .page-link
                background-color: #f18912
                border-color: #f18912
                color: #fff
    .info-list-hot
      width: 270px
      float: right
      .hot-wrap
        margin-bottom: 20px
        background-color: #fff
        &.hot-goods
          padding: 30px 20px
          h1
            font-size: 18px
            font-weight: bold
            margin-bottom: 30px
          .item
            display: block
            position: relative
            margin-bottom: 30px
            img
              width: 100%
            .title
              position: absolute
              bottom: 0
              margin: 0
              padding-left: 10px
              font-size: 14px
              font-weight: bold
              width: 100%
              height: 36px
              line-height: 36px
              color: #fff
              background: url(../../../assets/images/banner-item-bg.png) 100%
            &:last-child
              margin-bottom: 0
        &.hot-info
          padding: 20px 4px 0
          .hot
            border: none
            .hot-title
              padding-left: 16px
              font-size: 18px
              font-weight: bold
              color: #000
            .hot-list
              margin-top: 10px
              border-top: none
</style>

