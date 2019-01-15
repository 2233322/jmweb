<template>
  <div class="home-floor">
    <b-container class="floor-line-con">
      <div class="floor-name floor-img">
        <img src="~assets/images/icon-f1.jpg">
      </div>
      <div class="line-boy">
        <div class="child-cate">
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'ytcwj' }}">阳台储物间</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'ythy' }}">阳台花园</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'ytcs' }}">阳台茶室</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'ytkt' }}">阳台客厅</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'ytsf' }}">阳台书房</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'yt' }}">更多></nuxt-link>
        </div>
        <div class="floor-content">
          <div class="banner-con">
            <nuxt-link to="//www.9-mi.cn/theme/yangtai.html" target="_blank">
              <img src="~static/images/fl10.jpg">
              <div class="detail-wrap">
                <img class="floor-arrow-big" src="~assets/images/floor-arr.png">
              </div>
            </nuxt-link>
          </div>
          <div class="column-con">
            <b-carousel
              class="hot-grid"
              id="carousel1"
              indicators
              :interval="4000"
            >
              <b-carousel-slide img-blank>
                <a href="/item/78" target="_blank">
                  <img src="~static/images/fl11.jpg" alt="休闲洗衣房">
                </a>
              </b-carousel-slide>
              <b-carousel-slide img-blank>
                <a href="/item/79" target="_blank">
                  <img src="~static/images/fl12.jpg" alt="收纳日记">
                </a>
              </b-carousel-slide>
            </b-carousel>
            <nuxt-link class="item" to="/item/44" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl13.jpg">
                <div class="floor-item-title">玖米阳台之《阳台花园》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item" to="/item/48" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl14.jpg">
                <div class="floor-item-title">玖米阳台之《阳台茶室》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/50" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl15.jpg">
                <div class="floor-item-title">玖米阳台之《阳台客厅》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/51" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl16.jpg">
                <div class="floor-item-title">玖米阳台《阳台洗衣房》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/61" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl17.jpg">
                <div class="floor-item-title">玖米阳台之《阳台书房》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/73" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl18.jpg">
                <div class="floor-item-title">玖米阳台之《阳台健身房》</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <a href="//www.9-mi.cn/theme/yangtai.html" class="floor-line-ad" target="_blank" ><img src="~static/images/fl1b.png" width="1140"></a>
    </b-container>
    <b-container class="floor-line-con">
      <div class="floor-name floor-img">
        <img src="~assets/images/icon-f2.jpg">
      </div>
      <div class="line-boy">
        <div class="child-cate">
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'ty' }}">庭院定制</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'lt' }}">露台定制</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'goods-name', params: { name: 'tt' }}">天台定制</nuxt-link>
        </div>
        <div class="floor-content">
          <div class="banner-con">
            <nuxt-link to="//www.9-mi.cn/zhuanti/huayuan/" target="_blank">
              <img src="~static/images/fl20.jpg">
              <div class="detail-wrap">
                <img class="floor-arrow-big" src="~assets/images/floor-arr.png">
              </div>
            </nuxt-link>
          </div>
          <div class="column-con">
            <b-carousel
              class="hot-grid"
              id="carousel2"
              indicators
              :interval="4000"
            >
              <b-carousel-slide img-blank>
                <a href="//www.9-mi.cn/zhuanti/vbox/" target="_blank">
                  <img src="~static/images/fl21.jpg" alt="休闲花园">
                </a>
              </b-carousel-slide>
              <b-carousel-slide img-blank>
                <a href="//www.9-mi.cn/zhuanti/ygf2/" target="_blank">
                  <img src="~static/images/fl22.jpg" alt="阳光房">
                </a>
              </b-carousel-slide>
            </b-carousel>
            <nuxt-link class="item" to="/item/15" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl23.jpg">
                <div class="floor-item-title">庭院《简约之美》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item" to="/item/57" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl24.jpg">
                <div class="floor-item-title">露台《露台餐厅》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/38" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl25.jpg">
                <div class="floor-item-title">屋顶《巴厘岛盛筵》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/25" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl26.jpg">
                <div class="floor-item-title">商业户外《度假酒店》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/27">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl27.jpg">
                <div class="floor-item-title">生活花园《诗与远方》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="/item/12" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl28.jpg">
                <div class="floor-item-title">生活花园《丛林别院》</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <a href="//www.9-mi.cn/zhuanti/huayuan/" class="floor-line-ad" target="_blank" ><img src="~static/images/fl2b.png" width="1140"></a>
    </b-container>
    <b-container class="floor-line-con">
      <div class="floor-name floor-img">
        <img src="~assets/images/icon-f3.jpg">
      </div>
      <div class="line-boy">
        <div class="child-cate">
          <nuxt-link target="_blank" to="http://www.djw001.com/ljdjw">了解铝制度假屋</nuxt-link>
          <nuxt-link target="_blank" to="http://www.djw001.com/products/djwdz">度假屋定制</nuxt-link>
          <nuxt-link target="_blank" to="http://www.djw001.com/products/djyldz">度假院落定制</nuxt-link>
          <nuxt-link target="_blank" to="http://www.djw001.com/products/jqjg">景观景区产品</nuxt-link>
        </div>
        <div class="floor-content">
          <div class="banner-con">
            <nuxt-link to="http://www.djw001.com/" target="_blank">
              <img src="~static/images/fl30.jpg">
              <div class="detail-wrap">
                <img class="floor-arrow-big" src="~assets/images/floor-arr.png">
              </div>
            </nuxt-link>
          </div>
          <div class="column-con">
            <b-carousel
              class="hot-grid"
              id="carousel2"
              indicators
              :interval="4000"
            >
              <b-carousel-slide img-blank>
                <a href="http://www.djw001.com/products/djwdz/150" target="_blank">
                  <img src="~static/images/fl31.jpg">
                </a>
              </b-carousel-slide>
              <b-carousel-slide img-blank>
                <a href="http://www.djw001.com/products/djwdz/147" target="_blank">
                  <img src="~static/images/fl32.jpg">
                </a>
              </b-carousel-slide>
            </b-carousel>
            <nuxt-link class="item" to="http://www.djw001.com/products/ysyl/170" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl33.jpg">
                <div class="floor-item-title">度假院落《山里寒舍》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item" to="http://www.djw001.com/products/djwdz/145" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl34.jpg">
                <div class="floor-item-title">《归来·银杏》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="http://www.djw001.com/products/djwdz/184" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl35.jpg">
                <div class="floor-item-title">《天空·北极光》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="http://www.djw001.com/products/yqxl/154" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl36.jpg">
                <div class="floor-item-title">《隐栖·玲珑C》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="http://www.djw001.com/products/yqxl/156" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl37.jpg">
                <div class="floor-item-title">《隐栖·野居》</div>
              </div>
            </nuxt-link>
            <nuxt-link class="item align-self-end" to="http://www.djw001.com/products/djwdz/160" target="_blank">
              <div class="floor-item-content-wrap">
                <img src="~static/images/fl38.jpg">
                <div class="floor-item-title">《原乡·富士山》</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <a href="http://www.djw001.com/" class="floor-line-ad" target="_blank" ><img src="~static/images/fl3b.png" width="1140"></a>
    </b-container>
    <b-container class="floor-line-con">
      <i class="color-mark"></i>
      <div class="floor-name">
        <div class="floor-title">
          玖米卖家秀
          <div class="floor-sub-name">
            seller's show
          </div>
        </div>
      </div>
      <div class="line-boy">
        <div class="child-cate">
          <nuxt-link target="_blank" to="//www.9-mi.cn/theme/yangtai.html">定制我的专属阳台</nuxt-link>
          <nuxt-link target="_blank" to="//www.9-mi.cn/zhuanti/znygf/">智能又有颜值的阳光房</nuxt-link>
          <nuxt-link target="_blank" :to="{name: 'show'}">更多></nuxt-link>
        </div>
        <div class="floor-content">
          <div class="floor-show-content">
            <nuxt-link to="/show/10" target="_blank" class="item">
              <div class="item-cover">
                <img src="~static/images/mjx1.jpg">
                <div class="item-cover-hover">
                  <img class="content-icon" src="~static/images/jumi1.png">
                  <div class="content-tab">
                    <span>玖米阳台</span>
                    <span>|</span>
                    <span>1572关注</span>
                  </div>
                  <div class="content-line"></div>
                </div>
              </div>
              <div class="item-describe">
                <div class="show-title">阳台</div>
                <div class="short-line"></div>
                <span>阳光的味道</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/show/34" target="_blank" class="item">
              <div class="item-cover">
                <img src="~static/images/mjx2.jpg">
                <div class="item-cover-hover">
                  <img class="content-icon" src="~static/images/jumi2.png">
                  <div class="content-tab">
                    <span>玖米阳光房</span>
                    <span>|</span>
                    <span>1572关注</span>
                  </div>
                  <div class="content-line"></div>
                </div>
              </div>
              <div class="item-describe">
                <div class="show-title">阳光房</div>
                <div class="short-line"></div>
                <span>览尽四季的颜色</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/show/38" target="_blank" class="item">
              <div class="item-cover">
                <img src="~static/images/mjx3.jpg">
                <div class="item-cover-hover">
                  <img class="content-icon" src="~static/images/jumi3.png">
                  <div class="content-tab">
                    <span>花园休闲空间</span>
                    <span>|</span>
                    <span>1572关注</span>
                  </div>
                  <div class="content-line"></div>
                </div>
              </div>
              <div class="item-describe">
                <div class="show-title">花园休闲空间</div>
                <div class="short-line"></div>
                <span>每一刻都很惬意</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/show/41" target="_blank" class="item">
              <div class="item-cover">
                <img src="~static/images/mjx4.jpg">
                <div class="item-cover-hover">
                  <img class="content-icon" src="~static/images/jumi4.png">
                  <div class="content-tab">
                    <span>智能百叶屋顶</span>
                    <span>|</span>
                    <span>1572关注</span>
                  </div>
                  <div class="content-line"></div>
                </div>
              </div>
              <div class="item-describe">
                <div class="show-title">智能百叶屋顶</div>
                <div class="short-line"></div>
                <span>开合之间全是用心</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/show/42" target="_blank" class="item">
              <div class="item-cover">
                <img src="~static/images/mjx5.jpg">
                <div class="item-cover-hover">
                  <img class="content-icon" src="~static/images/jumi5.png">
                  <div class="content-tab">
                    <span>智能推拉阳光房</span>
                    <span>|</span>
                    <span>1572关注</span>
                  </div>
                  <div class="content-line"></div>
                </div>
              </div>
              <div class="item-describe">
                <div class="show-title">智能推拉阳光房</div>
                <div class="short-line"></div>
                <span>比爱人还知冷暖</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/show/39" target="_blank" class="item">
              <div class="item-cover">
                <img src="~static/images/mjx6.jpg">
                <div class="item-cover-hover">
                  <img class="content-icon" src="~static/images/jumi6.png">
                  <div class="content-tab">
                    <span>凉亭 廊架</span>
                    <span>|</span>
                    <span>1572关注</span>
                  </div>
                  <div class="content-line"></div>
                </div>
              </div>
              <div class="item-describe">
                <div class="show-title">凉亭</div>
                <div class="short-line"></div>
                <span>都说我是艺术品</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style lang="stylus">
.home-floor
  .floor-line-con
    margin-top: 20px
    position: relative
    .color-mark
      display: inline-block
      width: 5px
      height: 18px
      background-color: #333
      vertical-align: middle
    .floor-name
      display: inline-block
      height: 28px
      font-size: 18px
      vertical-align: middle
      .floor-title
        margin-left: 10px
        vertical-align: middle
        .floor-sub-name
          margin-left: 10px
          display: inline-block
          font-size: 14px
      img
        height: 24px
    .line-boy
      margin-top: 10px
      .child-cate
        position: absolute
        top: 0
        right: 0
        text-align: right
        a
          display: inline-block
          margin: 5px 0px 5px 20px
          height: 20px
          line-height: 20px
          font-size: 14px
          color: #000
          &:hover
            padding-bottom: 6px
            border-bottom: 1px solid #000
            text-decoration: none
      .floor-content
        display: flex
        .banner-con
          position: relative
          width: 236px
          height: 554px
          a
            img
              width: 100%
              height: 100%
              transition: opacity 300ms ease-out
            .banner-detail
              position: absolute
              display: flex
              bottom: 20%
              width: 218px
              height: 64px
              .left-title-wrap
                display: flex
                width: 70px
                justify-content: center
                align-items: center
                color: #fff
                background: rgba(0, 0, 0, 0.9)
                .left-title
                  width: 36px
                  line-height: 24px
                  font-size: 18px
              .right-title-wrap
                flex: 1
                padding-left: 10px
                color: #fff
                font-size: 18px
                background: rgba(0, 0, 0, 0.6)
                .right-title-absolute
                  display: flex
                  height: 100%
                  flex-direction: column
                  justify-content: center
            .detail-wrap
              position: absolute
              bottom: 0px
              left: 0px
              width: 100%
              height: 60px
              background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 4%, rgba(0, 0, 0, 0.36) 100%)
              .floor-arrow-big
                position: absolute
                bottom: 15px
                right: 15px
                width: 32px
                height: 32px
          &:hover
            img
              opacity: .7
        .column-con
          display: flex
          width: 904px
          flex-wrap: wrap
          .hot-grid
            margin-left: 12px
            padding: 10px
            width: 440px
            height: 270px
            background-color: #fff
            .carousel-caption
              top: 0
              right: 0
              left: 0
              bottom: 0
              padding: 0
            img
              width: 100%
              height: 250px
          .item
            margin-left: 12px
            width: 214px
            height: 270px
            .floor-item-content-wrap
              padding: 14px
              width: 100%
              height: 100%
              text-align: center
              border: 1px solid #fff
              background-color: #fff
              img
                width: 100%
              .floor-item-title
                margin-top: 14px
                font-size: 14px
                color: #333333
                text-decoration: none
            &:hover
              text-decoration: none
              .floor-item-content-wrap
                border: 1px solid #ff0036

        .floor-show-content
          flex: 1
          display: flex
          justify-content: space-between
          flex-wrap: wrap
          .item
            margin-bottom: 20px
            width: 366px
            text-align: center
            border: 1px solid #f5f5f5
            .item-cover
              position: relative
              height: 200px
              img
                display: block
                max-width: 100%
                height: 200px
              .item-cover-hover
                position: absolute
                top: 0
                width: 100%
                height: 100%
                background-color: #f5f5f5
                opacity: 0
                z-index: -1
                transition: opacity 300ms
                .content-icon
                  margin: 44px auto 20px auto
                  width: 68px
                  height: 68px
                .content-tab
                  span
                    padding: 0 2px
                    color: #000
                .content-line
                  margin: 30px auto 0 auto
                  width: 258px
                  height: 1px
                  background-color: #dadada
            .item-describe
              margin-top: 30px
              margin-bottom: 30px
              .show-title
                font-size: 16px
                font-weight: bold
                color: #000
              .short-line
                margin: 7px auto
                width: 20px
                height: 1px
                background-color: #828282
              span
                font-size: 14px
                color: #696969
            &:hover
              border: 1px solid #000
              text-decoration: none
              .item-cover
                .item-cover-hover
                  opacity: 1
                  z-index: 99
  .floor-line-ad
    display: block
    margin: 20px 0
    text-align: center
    img
      max-width: 100%
</style>

