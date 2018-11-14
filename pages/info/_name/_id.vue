<template>
  <div class="page-article">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
        <b-breadcrumb-item :to="{name: 'info'}">秒懂户外</b-breadcrumb-item>
        <b-breadcrumb-item :to="{name: 'info-name', params: { name: asyncData.article.articleCategory.key }}">{{asyncData.article.articleCategory.title}}</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="article-wrap">
        <div class="article-content">
          <div class="title">
            <h1>{{asyncData.article.title}}</h1>
            <p>
              <span>{{asyncData.article.createdDate}}</span>
              <span>来源：玖米空间官网</span>
            </p>
          </div>
          <div class="content" v-html="asyncData.article.content">
          </div>
          <div></div>
        </div>
        <div class="article-sidebar">
          <side-hot :list="goodsHot" class="article-sidebar-hotbox" />
          <side-ad />
          <side-feedback />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { article as getArticle } from '../../../utils/api'
import SideHot from '../../../components/side-hot'
import SideAd from '~/components/side-ad'
import SideFeedback from '../../../components/side-feedback'

export default {
  watchQuery: true,
  async asyncData ({ params: { name, id } }) {
    const { data: { article } } = await getArticle(id)
    return { asyncData: { article } }
  },
  head () {
    return {
      title: this.asyncData.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.asyncData.article.description }
      ]
    }
  },
  computed: mapGetters({
    goodsHot: 'category/goodsHot'
  }),
  components: { SideHot, SideAd, SideFeedback }
}
</script>

<style lang="stylus">
.page-article
  padding-bottom: 35px
  background-color: #f5f5f5
  overflow: hidden
  .breadcrumb
    margin-bottom: 10px
    padding: 10px 0
    background: inherit
    a
      color: #666
  .article-wrap
    .article-content
      float: left
      padding: 40px 40px
      width: 850px
      background-color: #fff
      .title
        border-bottom: 1px dashed #dedede
        h1
          font-size:28px
          color: #333
        p
          margin: 20px 0
          span
            margin-right: 30px
            color: #999
      .content
        margin-top: 20px
        font-size: 14px
        line-height: 28px
        color: #666
        img
          width: 100%
    .article-sidebar
      float: right
      width: 270px
      .article-sidebar-hotbox
        padding-top: 20px
        margin-right: 0
        border: none
        background-color: #fff
        .hot-title
          padding-left: 16px
          font-size: 18px
          font-weight: bold
          color: #000
        .hot-list
          margin-top: 10px
          border-top: none
      .adimages
        position: relative
        margin-top: 20px
        width: 270px
        height: 390px
        .carousel-caption
          position: static
          padding: 0
          .tohref
            position: absolute
            display: block
            top: 0
            width: 100%
            height: 100%
</style>
