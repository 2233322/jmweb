<template>
  <div class="waterfall-wrap" ref="waterfall">
    <nuxt-link
      :to="{ name: 'show-id', params: { id: item.id } }"
      v-for="(item, index) in list"
      :key="index"
      :style="{flexBasis: `${item.cover.w*height/item.cover.h}px`, flexGrow: `${item.cover.w/item.cover.h*100}`}"
      class="row-item"
    >
      <div :style="{paddingBottom: `${item.cover.h/item.cover.w*100}%`}"></div>
      <img :src="item.cover.path">
      <div class="info-wrap">
        <div class="info-bg">{{item.title}}</div>
      </div>
    </nuxt-link>
    <div class="item-last"></div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    height: {
      type: Number,
      default: 250
    }
  },
  data () {
    return {
      itemWidth: 0,
      columnData: []
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.waterfall-wrap
  position: relative
  display: flex
  flex-wrap: wrap
  .row-item
    position: relative
    display: block
    margin: 5px
    overflow: hidden
    img
      position: absolute
      vertical-align: bottom
      top: 0
      width: 100%
      height: 100%
      vertical-align: bottom
      object-fit: cover
      transition: transform .3s linear
    .info-wrap
      position: absolute
      bottom: -65px
      width: 100%
      transition: transform .3s all
      .info-bg
        padding: 28px 0 6px 10px
        width: 100%
        line-height: 18px
        height: 65px
        color: #fff
        background: url(https://p.ssl.qhimg.com/t018d7d697c1b0958dc.png) no-repeat 0 0
        transition: transform .3s all
    &:hover
      img
        transform: scale(1.1)
      .info-wrap
        bottom: 0
  .item-last
    margin: 5px
    flex-grow: 999
</style>
