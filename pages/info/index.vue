<template>
  <div class="page-info">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">首页</b-breadcrumb-item>
        <b-breadcrumb-item to="/" disabled>秒懂户外</b-breadcrumb-item>
      </b-breadcrumb>
      <div class="layer-inner outdoor-block">
        <div class="com-inner mod-hd">
          <h3><i></i><span>户外篇</span></h3>
          <nuxt-link :to="{ name: 'info-name', params: { name: 'outdoor' } }">更多></nuxt-link>
        </div>
        <div class="com-inner-content" ref="banner">
          <div class="banner-list">
            <div class="banner-item banner-item-active">
              <nuxt-link to="/info/outdoor/36" target="_blank">
                <img src="~static/images/mdhw1.jpg">
                <span>不容错过的庭院定制丨整体效果一级棒，入院的刹那就惊艳了！</span>
              </nuxt-link>
            </div>
            <div class="banner-item">
              <nuxt-link to="/info/outdoor/33">
                <img src="~static/images/mdhw2.jpg" target="_blank">
                <span>房子待久太闷？将露台改成这个模样，谁来谁着迷！</span>
              </nuxt-link>
            </div>
            <div class="banner-item">
              <nuxt-link to="/info/outdoor/35">
                <img src="~static/images/mdhw3.jpg" target="_blank">
                <span>在更接近天空的地方，眺望城市的模样</span>
              </nuxt-link>
            </div>
            <div class="banner-item">
              <nuxt-link to="/info/outdoor/32" target="_blank">
                <img src="~static/images/mdhw4.jpg">
                <span>360°观景全铝树屋，把大自然尽收眼底，睁开眼就是最想要的生活</span>
              </nuxt-link>
            </div>
            <div class="banner-item">
              <nuxt-link to="http://www.djw001.com/ljdjw" target="_blank">
                <img src="~static/images/mdhw5.jpg">
                <span>全铝别墅是采用全铝合金材料拼装成的系统化建筑，是目前世界上环保、节能、回收率最高的建筑结构之一</span>
              </nuxt-link>
            </div>
          </div>
          <div class="tab-list">
            <div class="tab-item tab-item-active">庭院定制</div>
            <div class="tab-item">露台定制</div>
            <div class="tab-item">天台定制</div>
            <div class="tab-item">度假屋定制</div>
            <div class="tab-item">了解铝制度假屋</div>
          </div>
        </div>
      </div>
      <div class="layer-inner company-block">
        <div class="com-inner mod-hd">
          <h3><i></i><span>动态篇</span></h3>
          <nuxt-link :to="{ name: 'info-name', params: { name: 'company' } }">更多></nuxt-link>
        </div>
        <div class="com-inner-content">
          <nuxt-link class="first" target="_black" to="/info/company/13">
            <img src="~static/images/mdhwdt.jpg">
            <h3>广交会实力圈粉，玖米让世界看见全铝臻品！</h3>
            <h4>2018年10月23日，伴着秋日和风，第124届广交会在广州琶洲展馆隆重举行...</h4>
          </nuxt-link>
          <nuxt-link class="item" to="/info/company/8" title="环保政策频发，全铝家居将成家具市场“潜力股”">环保政策频发，全铝家居将成家具市场“潜力股”</nuxt-link>
          <nuxt-link class="item"  to="/info/company/7" title="生活区域正在由室内向户外空间迁徙">生活区域正在由室内向户外空间迁徙</nuxt-link>
        </div>
      </div>
      <div class="layer-inner custom-block">
        <div class="com-inner mod-hd">
          <h3><i></i><span>定制篇</span></h3>
          <nuxt-link :to="{ name: 'info-name', params: { name: 'custom' } }">更多></nuxt-link>
        </div>
        <div class="com-inner-content">
          <nuxt-link class="item" target="_black" to="/info/custom/29">
              <img src="//api.9-mi.cn/resource/file/201811100948402400.jpg">
              <h3>玖米阳台定制中天花板、墙板、地板使用的是什么板材？健康、耐用、环保吗？</h3>
            <span>玖米阳台定制大面积使用的是玖米木铺装，什么是玖米木呢？玖米木是引进德国和新加坡高新科技技术，以木质纤维与高分子塑胶材料聚氯乙烯树脂（即PVC）聚合而成的新型再生木材，属于再生木的一种。</span>
          </nuxt-link>
          <nuxt-link class="item" target="_black" to="/info/custom/28">
            <img src="//api.9-mi.cn/resource/file/201811091546126940.jpg">
            <h3>房子小？看看别人家的阳台是怎么被安排得明明白白</h3>
            <span>在寸土寸金的城市，有个属于自己的房子已经是很不容易有个属于自己的私人空间就更难得了,看看这款阳台,浓厚的东南亚气息室内都是环保耐用的玖米木板构造,肌理分明但色泽柔和的自然本色</span>
          </nuxt-link>
          <nuxt-link class="item" target="_black" to="/info/custom/1">
            <img src="//api.9-mi.cn/resource/file/201811131625214010.jpg">
            <h3>阳台改造后明明可以靠颜值却偏偏要靠实力，邻居看了都羡慕</h3>
            <span>装修前这仅仅8平方米的小阳台是如此简陋。阳台改造后明明可以考颜值去偏偏靠实力，如今邻居看了都羡慕。生活需要绿色的点缀，是否想过把自家的阳台打造成一个小花园？让家拥有一个绿意盎然的空间，修身养性，让生活“慢下来”。</span>
          </nuxt-link>
          <nuxt-link class="item" target="_black" to="/info/custom/30">
            <img src="//api.9-mi.cn/resource/file/201811100957094140.jpg">
            <h3>确认过眼神，小阳台变浪漫餐厅，品质和实用我两个都要！</h3>
            <span>有品味，省钱，舒适，实用是绝大多数人对家装的一个追求，而阳台的环境，布置，利用就是“小而美”的代表。在阳台设餐厅和厨房，极致的利用了空间，安心舒适。</span>
          </nuxt-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: '秒懂户外'
    }
  },
  mounted () {
    const _banner = this.$refs.banner
    _banner.addEventListener('click', event => {
      if (event.target.className.indexOf('tab-item') < 0) { return true }
      const _nodearr = event.target.parentNode.children
      const _index = [].indexOf.call(_nodearr, event.target)
      const _bannerList = _banner.querySelector('.banner-list').children
      _banner.querySelector('.banner-item-active').classList.remove('banner-item-active')
      _banner.querySelector('.tab-item-active').classList.remove('tab-item-active')
      _bannerList[_index].classList.add('banner-item-active')
      event.target.classList.add('tab-item-active')
    })
  }
}
</script>

<style lang="stylus">
.page-info
  padding-bottom: 35px
  background-color: #f5f5f5
  overflow: hidden
  .breadcrumb
    margin-bottom: 10px
    padding: 10px 0
    background: inherit
    a
      color: #666
  .layer-inner
    float: left
    height: 500px
    .com-inner
      display: flex
      align-items: center
      justify-content: space-between
      h3
        display: flex
        margin-bottom: 0
        align-items: center
        i
          display: inline-block
          width: 5px
          height: 18px
          background-color: #cb0d1c
        span
          padding-left: 10px
          font-size: 20px
          color: #666
    .com-inner-content
      margin-top: 15px
    &.outdoor-block
      width: 835px
      .banner-item
        position: relative
        display: none
        img
          width: 100%
          height: 350px
        span
          position: absolute
          display: block
          bottom: 0
          width: 100%
          height: 56px
          line-height: 56px
          text-align:center
          color: #fff
          background: url(../../assets/images/banner-item-bg.png) repeat-x bottom left
        &.banner-item-active
          display: block
      .tab-list
        display: flex
        background-color: #fff
        .tab-item
          flex: 1
          text-align: center
          height: 50px
          line-height: 50px
          color: #666
          font-size: 14px
          border-right: 1px solid #f5f5f5
          cursor: pointer
          transition: all .3s
          &.tab-item-active,
          &:hover
            background-color: #ec9026
            color: #fff
    &.company-block
      margin-left: 25px
      width: 280px
      .com-inner-content
        padding: 20px
        height: 400px
        background-color: #fff
        a
          display: block
          line-height: 30px
          color: #333
          &.item
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
          img
            width: 100%
            height: 146px
          h3
            margin-top: 10px
            font-size: 14px
            color: #000
            font-weight: 700
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
          h4
            margin-bottom: 20px
            font-size: 12px
            color: #666
            line-height: 20px
          &.first
            margin-bottom: 12px
            border-bottom: 1px dashed #ededed
    &.custom-block
      width: 100%
      .com-inner-content
        display: flex
        .item
          flex: 1 1 auto
          padding: 20px
          margin-right: 20px
          width: 270px
          height: 400px
          background-color: #fff
          transition: all 0.3s linear
          img
            width: 100%
          h3
            display: block
            margin-top: 50px
            margin-bottom: 20px
            height: 40px
            color: #000
            line-height: 20px
            font-size: 14px
            font-weight: 700
          span
            text-align: center
            color: #333
            line-height: 20px
          &:last-child
            margin-right: 0
          &:hover
            margin-top: -4px
            box-shadow: 0 5px 30px rgba(0,0,0,0.1)
</style>
