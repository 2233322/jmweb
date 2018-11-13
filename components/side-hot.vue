<template>
  <div class="hot">
    <i class="color-mark"></i>
    <span class="hot-title">商品人气榜</span>
    <div class="hot-list">
      <nuxt-link target="_black" class="item" v-for="item in list" :key="item.id" :to="{name: 'item-id', params: {id: item.id}}">
        <div class="cover"><img :src="item.diskfile.path"></div>
        <div class="text">
          <span class="name">{{item.name}}</span>
          <span class="like">人气 {{item.favorite}}</span>
          <b>免费设计</b>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>


<style lang="stylus">
.hot
  margin-right: 10px
  width: 270px
  border: 1px solid #e5e5e5
  .hot-title
    padding: 0 10px
    line-height: 34px
    color: #666
    font-weight: bold
  .hot-list
    padding: 10px 16px
    border-top: 1px solid #e5e5e5
    .item
      display: flex
      margin-bottom: 20px;
      img
        margin-right: 20px
        width: 120px
      .text
        display: flex
        flex-direction: column
        font-size: 14px
        color: #333
        .name
          font-size: 14px
        .like
          font-size: 16px
        b
          margin-top: 10px
          padding: 0 16px
          text-align: center
          color: #fff
          font-weight: 400
          line-height: 26px
          border-radius: 4px
          background-color: #ffa100
</style>
