<template>
  <div class="page-topic">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
        <b-breadcrumb-item :to="{name: 'topic'}">专题活动</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="topic-wrap">
        <a class="item" target="_blank" href="//www.9-mi.cn/theme/yangtai.html">
          <div class="item-bg">
            <img src="~static/images/hzt1.jpg">
            <b>有限空间，无限舒适</b>
          </div>
          <p>玖米阳台定制</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/zhuanti/huayuan/">
          <div class="item-bg">
            <img src="~static/images/hzt3.jpg">
            <b>庭院让家有了仪式感</b>
          </div>
          <p>花园休闲空间</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/zhuanti/ygf2/">
          <div class="item-bg">
            <img src="~static/images/hzt2.jpg">
            <b>这里的生活能有关日月，却无关风雨</b>
          </div>
          <p>德系高严密阳光房</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/theme/ptj.html">
          <div class="item-bg">
            <img src="~static/images/hzt8.jpg">
            <b>高颜值葡萄架</b>
          </div>
          <p>葡萄架</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/theme/chep.html">
          <div class="item-bg">
            <img src="~static/images/hzt5.jpg">
            <b>风雨无阻爱车好帮手</b>
          </div>
          <p>玖米车棚</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/zhuanti/ltydygf/">
          <div class="item-bg">
            <img src="~static/images/hzt6.jpg">
            <b>移动伸缩灵活多用</b>
          </div>
          <p>露台移动阳光房</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/theme/chugui.html">
          <div class="item-bg">
            <img src="~static/images/hzt7.jpg">
            <b>无甲醛耐冲击</b>
          </div>
          <p>全铝橱柜</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/zhuanti/vbox/">
          <div class="item-bg">
            <img src="~static/images/hzt9.jpg">
            <b>智能调度，自由调节</b>
          </div>
          <p>智能百叶遮阳系统VBOX</p>
        </a>
        <a class="item" target="_blank" href="//www.9-mi.cn/zhuanti/znqjygf/">
          <div class="item-bg">
            <img src="~static/images/hzt10.jpg">
            <b>亲近自然开阔视野</b>
          </div>
          <p>智能全景阳光房</p>
        </a>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: '玖米空间活动专题'
    }
  }
}
</script>


<style lang="stylus">
.page-topic
  padding-bottom: 35px
  background-color: #f5f5f5
  overflow: hidden
  .breadcrumb
    margin-bottom: 10px
    padding: 10px 0
    background: inherit
    a
      color: #666
  .topic-wrap
    margin: 0 -10px
    .item
      float: left
      margin: 0 10px 20px
      padding: 15px
      width: 270px
      text-align: center
      background-color: #fff
      .item-bg
        position: relative
        img
          width: 100%
          height: 181px
        b
          position: absolute
          display: flex
          padding: 30px 20px
          top: 0
          left: 0
          width: 100%
          height: 100%
          font-size: 14px
          color: #fff
          background-color: #ec9026
          opacity: 0
          transition: all .3s
      p
        margin: 20px 0 10px
        font-size: 16px
        color: #000
        font-weight: bold
      &:hover
        b
          opacity: 1
</style>
