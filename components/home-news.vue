<template>
  <div class="home-news">
    <b-container class="layer-inner">
      <div class="column">
        <div class="news-list">
          <div class="item">
            <div class="item-bg">
              <h4>户外篇</h4>
              <p>回归自然，极致体验</p>
              <div class="img-wrapper-outer">
                  <img src="~static/images/hn1.jpg">
              </div>
            </div>
            <nuxt-link target="_blank" :to="{name: 'info-name', params: {name: 'outdoor'}}" class="item-mask">
              <div class="coupon">
                <span>户外篇</span>
              </div>
              <div class="enter">
                <span>点击进入</span>
              </div>
            </nuxt-link>
          </div>
          <div class="item item-middle-line">
            <div class="item-bg">
              <h4>定制篇</h4>
              <p>独有的空间，独有的享受</p>
              <div class="img-wrapper-outer">
                  <img src="~static/images/hn2.jpg">
              </div>
            </div>
            <nuxt-link target="_blank" :to="{name: 'info-name', params: {name: 'custom'}}" class="item-mask">
              <div class="coupon">
                <span>定制篇</span>
              </div>
              <div class="enter">
                <span>点击进入</span>
              </div>
            </nuxt-link>
          </div>
          <div class="item">
            <div class="item-bg">
              <h4>动态篇</h4>
              <p>与品质生活不期而遇</p>
              <div class="img-wrapper-outer">
                  <img src="~static/images/hn3.jpg">
              </div>
            </div>
            <nuxt-link target="_blank" :to="{name: 'info-name', params: {name: 'company'}}" class="item-mask">
              <div class="coupon">
                <span>动态篇</span>
              </div>
              <div class="enter">
                <span>点击进入</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="cus">
        <a href="/p/helper/" target="_blank">
          <img src="~static/images/hn4.jpg">
        </a>
      </div>
    </b-container>
  </div>
</template>

<style lang="stylus">
.home-news
  .layer-inner
    display: flex
    background-color: #f5f5f5
    .column
      margin-right: 10px
      width: 825px
      background-color: #fff
      .news-list
        display: flex
        .item
          position: relative
          &.item-middle-line
            border-left: 1px solid #f4f4f4
            border-right: 1px solid #f4f4f4
          .item-bg
            padding: 26px
            h4
              font-size: 16px
              color: #3c3c3c
            p
              color: #999
            img
              width: 221px
              height: 149px
          .item-mask
            position: absolute
            top: 0
            width: 100%
            height: 100%
            color: #fff
            text-align: center
            background-color: rgba(0, 0, 0, 0.8)
            transition: all 0.3s ease-out
            opacity: 0
            .coupon
              height: 144px
              line-height: 250px
              span
                line-height: 250px
            .enter
              span
                display: inline-block
                line-height: 15px
                width: 70px
                border-radius: 10px
                background-color: #ff0036
            &:hover
              text-decoration: none
          &:hover
            .item-mask
              opacity: 1
              cursor: pointer
    .cus
      padding: 20px
      width: 310px
      background-color: #fff
      img
        width: 100%
        height: 222px

</style>

