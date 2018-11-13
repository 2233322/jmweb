<template>
  <div class="page-search">
    <b-container>
      <div class="nums">玖米为您找到相关结果约{{asyncData.totalCount}}个</div>
       <div class="goods-content">
        <div class="filt">
          <nuxt-link :to="{name: 'search', query: { q: asyncData.q, sort: 'sort' }}" class="sort-item">综合排序</nuxt-link>
          <nuxt-link :to="{name: 'search', query: { q: asyncData.q, sort: 'favorite' }}" class="sort-item"><span :class="asyncData.sort === 'favorite' && 'active'">人气</span></nuxt-link>
          <nuxt-link :to="{name: 'search', query: { q: asyncData.q, sort: 'id' }}" class="sort-item"><span :class="asyncData.sort === 'id' && 'active'">新品</span></nuxt-link>
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
import { searchGoods, addFavorite } from '../../utils/api'

export default {
  watchQuery: true,
  data () {
    return {
     }
  },
  async asyncData ({ query: { q, sort = 'sort', page = 1 } }) {
    const first = 20
    const skip = first * (page - 1)
    const { data: { listOfGoods: { nodes, totalCount } } } = await searchGoods(first, skip, q, sort)
    return {
      asyncData: { nodes, first, totalCount, currentPage: +page, sort, q }
      }
  },
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
        this.$router.push({ name: 'search', query: { q: val.q, page: val.currentPage, sort: val.sort } })
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="stylus">
.page-search
  padding-bottom: 35px
  background-color: #f5f5f5
  .nums
    padding: 10px 0
    color: #999
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
