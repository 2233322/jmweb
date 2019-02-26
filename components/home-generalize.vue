<template>
  <div class="home-generalize">
    <b-container class="layer-inner">
      <div class="com-inner mod-hd">
          <h3>
            <em>活动专区</em>
            <img class="tag" src="~assets/images/h-icon2.png" title="有好货">
          </h3>
          <p>更多优惠等你来</p>
          <span><nuxt-link target="_blank" :to="{name: 'topic'}">更多></nuxt-link></span>
        </div>
        <div class="generalize-list">
          <nuxt-link target="_blank" to="//www.9-mi.cn/theme/yangtai.html">
          <img src="~static/images/hzt1.jpg">
          <p class="title">有限空间，无限舒适</p>
          <span class="subtitle">活动时间：11月1日-11月21日</span>
          </nuxt-link>
          <a href="/zhuanti/ygf2/">ddd</a>
          <nuxt-link target="_blank" to="//www.9-mi.cn/zhuanti/ygf2/">
          <img src="~static/images/hzt2.jpg">
          <p class="title">这里的生活有关日月，无关风雨</p>
          <span class="subtitle">活动时间：11月1日-11月21日</span>
          </nuxt-link>
          <nuxt-link target="_blank" to="//www.9-mi.cn/zhuanti/huayuan/">
          <img src="~static/images/hzt3.jpg">
          <p class="title">庭院让家有了仪式感</p>
          <span class="subtitle">活动时间：11月1日-11月21日</span>
          </nuxt-link>
          <nuxt-link target="_blank" to="//www.9-mi.cn/zhuanti/zs/">
          <img src="~static/images/hzt4.jpg">
          <p class="title">广州阳台社区火热招募中</p>
          <span class="subtitle">活动名额：25个</span>
          </nuxt-link>
        </div>
    </b-container>
  </div>
</template>

<style lang="stylus">
.home-generalize
  .layer-inner.container
    background-color: #f5f5f5
    .mod-hd
      padding-left: 0
      p
        color: #212529
      span
        a
          margin-right: 0
          color: #212529
          &:hover
            padding-bottom: 6px
            border-bottom: 1px solid #000
            text-decoration: none
    .generalize-list
      display: flex
      justify-content: space-between
      a
        padding-bottom: 20px
        text-align: center
        background-color: #fff
        border: 1px solid #eee
        transition: all .5s linear
        img
          width: 276px
        .title
          margin: 20px auto 0 auto
          font-size: 18px
          color: #3c3c3c
        .subtitle
          font-size: 14px
          color: #999
        &:hover
          text-decoration: none
          transform: translate3d(0,-8px,0)
          box-shadow: 0 5px 30px rgba(0,0,0,.1)
</style>
