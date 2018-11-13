<template>
  <div class="page-guide">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
        <b-breadcrumb-item disabled>{{asyncData.article.title}}</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="guide-wrap">
        <div class="guide-menu">
          <div class="guide-menu-card" v-for="(item) in asyncData.currentCategories.children" :key="item.id">
            <h3 class="title">{{item.title}}</h3>
            <nuxt-link class="item" v-for="article in item.articles" :key="article.id" :to="{ name: 'guide-id', params: { id: article.id } }"><span>{{article.title}}</span></nuxt-link>
          </div>
        </div>
        <div class="guid-content">
          <div class="guid-title">{{asyncData.article.title}}</div>
          <div class="content" v-html="asyncData.article.content"></div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { articleCategories as getArticleCategories, article as getArticle } from '../../utils/api'

export default {
  watchQuery: true,
  async asyncData ({ params: { id = 12 } }) {
    const { data: { article } } = await getArticle(Number(id))
    const { data: { articleCategories: { currentCategories } } } = await getArticleCategories()
    return {
      asyncData: {
        currentCategories: currentCategories[0],
        article
      }
    }
  }
}
</script>

<style lang="stylus">
.page-guide
  padding-bottom: 35px
  background-color: #f5f5f5
  overflow: hidden
  .breadcrumb
    margin-bottom: 10px
    padding: 10px 0
    background: inherit
    a
      color: #666
  .guide-wrap
    .guide-menu
      float: left
      width: 280px
      background-color: #fff
      .guide-menu-card
        .title
          padding-left: 40px
          font-size: 16px
          font-weight: 600
          line-height: 56px
          color: #cb0d1c
          letter-spacing: 4px
          background-color: #e9ecef
        .item
          display: block
          padding-left: 40px
          line-height: 54px
          border-bottom: 1px solid #ededed
          color: #666
          font-size: 14px
        &:first-child
          .title
            border-left: 4px solid #cb0d1c
    .guid-content
      margin-left: 50px
      padding: 10px 30px 20px 30px
      width: 810px
      float: left
      background-color: #fff
      .guid-title
        margin-bottom: 30px
        line-height: 48px
        font-size: 18px
        border-bottom: dashed 1px #f3f3f3
      .content
        color: #666
        font-size: 14px
        line-height: 28px
        img
          max-width: 100%
</style>


