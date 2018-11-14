<template>
  <div class="page-home">
    <no-ssr>
      <agile class="banner" :arrows="false" :speed="100" :infinite="false" :fade="true" :autoplaySpeed="5000" :autoplay="true">
        <a href="/p/helper/" target="_blank"><div class="slide slide--1" style="background-image: url(//api.9-mi.cn/resource/jiumiweb/pc/images/banner1.jpg)"></div></a>
        <a href="/item/12" target="_blank"><div class="slide slide--2" style="background-image: url(//api.9-mi.cn/resource/jiumiweb/pc/images/banner0.jpg)"></div></a>
        <a href="/item/49" target="_blank"><div class="slide slide--3" style="background-image: url(//api.9-mi.cn/resource/jiumiweb/pc/images/banner2.jpg)"></div></a>
      </agile>
      <div slot="placeholder" class="img-placeholder">
        <img src="//api.9-mi.cn/resource/jiumiweb/pc/images/banner1.jpg" />
      </div>
    </no-ssr>
    <b-container class="flow-inner" fluid>
      <a href="/p/helper/" target="_blank"><img src="~/assets/images/home-flow.png"/></a>
    </b-container>
    <b-container class="layer-inner">
      <div class="quality-inner">
        <div class="com-inner mod-hd">
          <h3>
            <em>品质生活</em>
            <img class="tag" src="~/assets/images/h-icon1.jpg" alt="品质生活">
          </h3>
          <p>与品质生活不期而遇</p>
          <span @click="qualityanim">换一换</span>
        </div>
        <div class="quality-list">
            <div class="quality-list-wrapper J-quality-list-wrapper" :class="qualityclass">
              <div class="item">
                <div class="item-left">
                  <nuxt-link to="//www.9-mi.cn/zhuanti/huayuan/" target="_blank">
                    <img src="~/static/images/pzp11.jpg" alt="休闲花园">
                  </nuxt-link>
                </div>
                <div class="item-right">
                  <nuxt-link to="/item/46" target="_blank">
                    <img src="~/static/images/pzp12.jpg" alt="阳台花园">
                  </nuxt-link>
                  <nuxt-link to="/item/80" target="_blank">
                    <img src="~/static/images/pzp13.jpg" alt="玖米空间">
                  </nuxt-link>
                  <nuxt-link to="//www.djw001.com/products/ysyl/170" target="_blank">
                    <img src="~/static/images/pzp14.jpg" alt="度假院落《山里寒舍》">
                  </nuxt-link>
                  <nuxt-link to="/item/34" target="_blank">
                    <img src="~/static/images/pzp15.jpg" alt="和风禅语">
                  </nuxt-link>
                </div>
              </div>
              <div class="item">
                <div class="item-left">
                  <nuxt-link to="//www.djw001.com/products/yqxl/154" target="_blank">
                    <img src="~/static/images/pzp21.jpg" alt="《隐栖·玲珑C》">
                  </nuxt-link>
                </div>
                <div class="item-right">
                  <nuxt-link to="/item/51" target="_blank">
                    <img src="~/static/images/pzp22.jpg" alt="多用洗衣房">
                  </nuxt-link>
                  <nuxt-link to="/item/56" target="_blank">
                    <img src="~/static/images/pzp23.jpg" alt="露台花园">
                  </nuxt-link>
                  <nuxt-link to="//www.djw001.com/products/lj/177" target="_blank">
                    <img src="~/static/images/pzp24.jpg" alt="户外婚礼空间">
                  </nuxt-link>
                  <nuxt-link to="/item/42" target="_blank">
                    <img src="~/static/images/pzp25.jpg" alt="屋顶酒吧咖啡馆">
                  </nuxt-link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </b-container>
    <floor />
    <news />
    <generalize />
    <flxbottom-feedback />
  </div>
</template>

<script>
import Floor from '~/components/home-floor'
import News from '~/components/home-news'
import Generalize from '~/components/home-generalize'
import FlxbottomFeedback from '~/components/flxbottom-feedback'

export default {
  data () {
    return {
      qualityclass: 'still'
    }
  },
  methods: {
    qualityanim () {
      this.qualityclass = this.qualityclass === 'qualityanimleft' ? 'qualityanimright' : 'qualityanimleft'
    }
  },
  components: { Floor, News, Generalize, FlxbottomFeedback }
}
</script>

<style lang="stylus">
.page-home
  padding-bottom: 50px
  background-color: #f5f5f5
  .banner
    .slide
      height: 500px
      background-position: center
      background-size: cover
    .agile
      &__dots
        bottom: 10px
        left: 50%
        position: absolute
        transform: translateX(-50%)
      &__dot
        margin: 0 5px
        button
          background-color: transparent
          border: 1px solid #fff
          border-radius: 50%
          cursor: pointer
          display: block
          height: 14px
          font-size: 0
          line-height: 0
          margin: 0
          transition-duration: .3s
          width: 10px
          &:hover
            background-color: #fff
        &--current
          button
            background-color: #fff
  .flow-inner
    padding: 25px 0
    background-color: #fff
    text-align: center
  .layer-inner
    margin-top: 20px
    padding-bottom: 20px
    background-color: #fff
    overflow: hidden
  .mod-hd
    margin: 20px 0
    padding-left: 20px
  .com-inner
    display: flex
    align-items: center
    h3
      margin-bottom: 0
      font-size: 100%
    em
      font-size: 0
    .tag
      margin-right: 15px
      height: 24px
    p
      margin-bottom: 0
      flex: 1
      color: #999
    span
      margin-right: 20px
      color: #999
      cursor: pointer
  .quality-list
    overflow: hidden
    .quality-list-wrapper
      display: flex
      width: 200%
      &.qualityanimleft
        animation: qualityanimleft .6s
        transform: translate(-1140px)
      &.qualityanimright
        animation: qualityanimright .6s
      @keyframes qualityanimleft
        0%
          transform: translate(0)
        100%
          transform: translate(-1140px)
      @keyframes qualityanimright
        0%
          transform: translate(-1140px)
        100%
          transform: translate(0)
      .item
        display: flex
        padding: 0 10px 0 20px
        flex: 1
        .item-left
          margin-right: 10px
          width: 540px
        .item-right
          width: 560px
          display: flex
          flex-wrap: wrap
          a
            padding-right: 10px
            width: 50%
            &:nth-child(3),
            &:nth-child(4)
              margin-top: 10px
        img
          width: 100%

</style>
