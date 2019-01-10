<template>
  <div class="page-goods">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
        <b-breadcrumb-item disabled>空间分类</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="series">
        <div class="series-tab">
          <div v-for="(category, index) in categories" :key="index">
            <nuxt-link v-if="category.key === 'djw'" target="_blank" to="//www.djw001.com/">
              <i>{{category.name}}</i>
            </nuxt-link>
            <nuxt-link v-else :to="{ name: 'goods-name', params: { name: category.key } }" :class="asyncData.cateNodes[0].key === category.key ? 'active' : ''">
              <i>{{category.name}}</i>
            </nuxt-link>
          </div>
        </div>
        <div class="series-choose">
          <div class="series-choose-label"><span>系列:</span></div>
          <div class="series-choose-contet">
            <nuxt-link :to="{ name: 'goods-name', params: { name: asyncData.cateNodes[0].key } }">
              <i>全部</i>
            </nuxt-link>
            <nuxt-link v-for="(children, index) in asyncData.cateNodes[0].children" :key="index" :to="{ name: 'goods-name', params: { name: children.value } }">
              <i>{{children.text}}</i>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="goods-content">
        <div class="filt">
          <a href="?sort=sort" class="sort-item">综合排序</a>
          <a href="?sort=favorite" class="sort-item favorite"><span :class="asyncData.sort === 'favorite' && 'active'">人气</span></a>
          <a href="?sort=id" class="sort-item id"><span :class="asyncData.sort === 'id' && 'active'">新品</span></a>
        </div>
        <div class="content-list">
          <div :data-id="goods.id" @click="like" v-for="goods in asyncData.nodes" :key="goods.id" class="item">
            <nuxt-link :to="{ name: 'item-id', params: { id: goods.id } }" target="_blank">
              <img :src="goods.diskfile.path">
              <div class="base">
                <span>{{goods.name}}</span>
                <i><em>{{goods.favorite}}</em>人喜欢</i>
              </div>
              <div class="biref">{{goods.subtitle}}</div>
            </nuxt-link>
            <div class="inter">
              <div class="call">咨询客服</div>
              <div class="favorite">喜欢</div>
            </div>
          </div>
        </div>
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
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { listOfGoodsAndCategories, addFavorite } from '../../utils/api'

export default {
  watchQuery: true,
  head () {
    return {
      title: this.asyncData.currentCate.webSiteTitle || this.asyncData.currentCate.title,
      meta: [
        { hid: 'description', name: 'description', content: this.asyncData.currentCate.description }
      ]
    }
  },
  async asyncData ({ params: { name }, query: { sort = 'sort', page = 1 } }) {
    const first = 20
    const skip = first * (page - 1)
    const { data: { listOfGoods: { nodes, totalCount }, categories: { cateNodes, currentCate } } } = await listOfGoodsAndCategories(first, skip, name, sort)
    return {
      asyncData: { nodes, cateNodes, currentCate, first, totalCount, currentPage: +page, sort }
      }
  },
  computed: mapGetters({
    categories: 'category/categories'
  }),
  methods: {
    like (event) {
      if (event.target.className !== 'favorite') { return true }
      event.target.classList.add('like')
      const _favoriteQuan = event.currentTarget.getElementsByTagName('em')[0]
      _favoriteQuan.innerText = +_favoriteQuan.innerText + 1
      addFavorite(event.currentTarget.dataset.id)
    }
  },
  watch: {
    asyncData: {
      handler(val, oldval) {
        this.$router.push({ name: 'goods-name', params: { name: this.asyncData.currentCate.key }, query: { page: val.currentPage, sort: val.sort } })
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="stylus">
.page-goods
  padding-bottom: 35px
  background-color: #f5f5f5
  .breadcrumb
    margin-bottom: 10px
    padding: 10px 0
    background: inherit
    a
      color: #666
  .series
    padding: 20px 30px 0 30px
    background-color: #fff
    box-shadow: 2px 8px 6px rgba(0,0,0,.1)
    .series-tab
      display: flex
      border-bottom: 1px dashed #ccc
      a
        color: #000
        i
          display: inline-block
          margin: 0 15px 20px 0
          padding: 0 30px
          border-radius: 20px
          line-height: 40px
          font-size: 14px
          font-style: normal
          background-color: #f5f5f5
          transition: all 0.3s
        &:hover
          i
            background-color: #cb0d1c
            color: #fff
        &.active
          i
            background-color: #cb0d1c
            color: #fff
    .series-choose
      display: flex
      margin-top: 20px
      .series-choose-label
        flex: 0 0 44px
        margin-right: 20px
        span
          font-size: 16px
          line-height: 26px
          font-weight: bold
      a
        i
          display: inline-block
          margin: 0 15px 20px 0
          padding: 0 10px
          border-radius: 20px
          line-height: 30px
          font-size: 14px
          font-style: normal
          background-color: #fff
          transition: all 0.3s
        &:hover
          i
            background-color: #cb0d1c
            font-weight: bold
            color: #fff
        &.nuxt-link-active
          i
            background-color: #cb0d1c
            font-weight: bold
            color: #fff
  .goods-content
    margin-top: 20px
    padding: 20px 13px 20px 30px
    background-color: #fff
    .filt
      display: flex
      .sort-item
        margin-right: 15px
        padding: 6px 20px
        border: 1px solid #eee
        border-radius: 15px
        span
          padding-right: 14px
          background: url(../../assets/images/sort_icon1.png) no-repeat right center
          &.active
            background: url(../../assets/images/sort_icon2.png) no-repeat right center
    .content-list
      display: flex
      flex-wrap: wrap
      .item
        display: flex
        margin-top: 22px
        margin-right: 14px
        width: 260px
        flex-direction: column
        justify-content: space-between
        border: 2px solid #ededed
        a
          img
            max-width: 100%
          .base
            padding: 12px 10px 0 10px
            display: flex
            justify-content: space-between
            span
              font-size: 18px
              color: #f18912
              font-weight: bold
            i
              font-style: normal
              color: #888
          .biref
            padding:12px 10px
            font-size: 14px
            color: #3d3d3d
        .inter
          display: flex
          margin: 0 10px
          padding:12px 0
          justify-content: space-between
          border-top: 1px dotted #d9d9d9
          .call
            position: relative
            padding-left: 32px
            display: inline-block
            cursor: pointer
            &:before
              content: ""
              position: absolute
              left: 5px
              width: 20px
              height: 20px
              background: url(http://localhost:3000/favicon.png) no-repeat center center
              background-size: 100%
          .favorite
            position: relative
            padding-left: 32px
            display: inline-block
            cursor: pointer
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
          border: 2px solid #f18912
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
</style>



