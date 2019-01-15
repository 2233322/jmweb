<template>
  <header class="header" :class="$nuxt.$route.name !== 'index' ? 'border-bottom-line' : ''">
    <a href="//9-mi.cn/theme/yangtai.html" v-show="$nuxt.$route.name === 'index'" target="_blank">
      <img src="~static/images/ad/topad.jpg" width="100%" alt="活动" />
    </a>
    <b-container class="header-top" fluid>
      <b-container class="content">
        <span>你好，欢迎来到玖米空间</span>
        <span><nuxt-link to="/guide/12">关于我们</nuxt-link></span>
        | <span><nuxt-link to="/guide/23">帮助中心</nuxt-link></span>
        <i class="phone"></i><b style="font-weight:boldcolor:#4d4d4d">400-883-8366</b>
      </b-container>
    </b-container>
    <b-container class="header-content d-flex">
      <nuxt-link to="/"><img src="~/assets/images/logo.png" /></nuxt-link>
      <nuxt-link to="/"><img src="~assets/images/slogen.gif" style="width: 200px;margin-top: 10px;"/></nuxt-link>
      <div class="search">
        <div class="search-box">
          <input type="text" v-model="q" @keyup.enter="onSearch" placeholder="阳台定制让家多一个空间">
          <div @click="onSearch" class="J-search-submit search-submit">搜索</div>
        </div>
        <div class="search-list d-flex">
          <div class="item"><a href="/goods/ytcs">茶空间</a></div>
          <div class="item"><a href="/goods/ytcwj">阳台储物间</a></div>
          <div class="item"><a href="/goods/tyxzs">新中式庭院</a></div>
          <div class="item"><a href="/goods/lthy">露台花园</a></div>
          <div class="item"><a href="/goods/yzxcg">一字橱柜</a></div>
        </div>
      </div>
      <a href="/p/helper/" target="_blank" style="margin-top: -10px"><img src="~assets/images/hsl.gif" /></a>
    </b-container>
    <b-container class="header-navbar">
      <div class="header-navbar-box">
        <div class="item category" :class="$nuxt.$route.name === 'index' ? 'isindex' : ''">
          <h3>所有空间分类</h3>
          <div class="category-box">
            <div class="category-list" v-for="category in categories" :key="category.id">
              <div class="category-list" v-if="category.key === 'djw'">
                <div class="category-list-left">
                  <div class="top">
                    <i class="icon"></i>
                    <a target="_blank" href="http://www.djw001.com?from=9-mi.cn">玖米建筑工业</a>
                  </div>
                  <div class="bottom">
                    <a target="_blank" href="http://www.djw001.com/products/djwdz?from=9-mi.cn" >度假屋</a>
                    <a target="_blank" href="http://www.djw001.com/products/djyldz?from=9-mi.cn" >度假院落</a>
                    <a target="_blank" href="http://www.djw001.com/products/jqjg?from=9-mi.cn" >景区景观产品</a>
                  </div>
                  <i class="arrow"></i>
                </div>
              </div>
              <div v-else-if="category.children">
                <div class="category-list-left">
                  <div class="top">
                    <i class="icon"></i>
                    <nuxt-link target="_blank" :to="{name: 'goods-name', params:{ name: category.key }}">{{category.name}}</nuxt-link>
                  </div>
                  <div class="bottom">
                    <nuxt-link target="_blank" v-for="(child, index) in category.children" :key="child.id" :to="{name: 'goods-name', params:{ name: child.key }}" v-if="index < 3">{{ index !== 0 ? '/' : '' }} {{child.name}}</nuxt-link>
                  </div>
                  <i class="arrow"></i>
                </div>
                <div class="category-list-right" v-if="category.children">
                  <div class="child-list">
                    <ul>
                      <li v-for="child in category.children" :key="child.id">
                        <div>
                          <nuxt-link target="_blank" :to="{name: 'goods-name', params:{ name: child.key }}"><img :src="child.diskfile.path"> <p>{{child.name}}</p></nuxt-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item"><nuxt-link :to="{name: 'index'}"><img src="~/assets/images/jumi-menu.png" alt="玖米空间"></nuxt-link></div>
        <div class="item"><a href="http:http://www.djw001.com/?from=9-mi.cn" target="_black">玖米建筑工业</a></div>
        <div class="item"><nuxt-link :to="{ name: 'topic' }">专题活动</nuxt-link></div>
        <div class="item itemore">
          <nuxt-link :to="{name: 'info'}">定制攻略</nuxt-link>
          <div class="children">
            <nuxt-link class="child-item" :to="{ name: 'info-name', params: { name: 'custom' } }" target="_black">
              <img src="~assets/images/m-icon-ytdz.png">
              <p>阳台定制</p>
            </nuxt-link>
            <nuxt-link class="child-item" :to="{ name: 'info-name', params: { name: 'outdoor' } }" target="_black">
              <img src="~assets/images/m-icon-tydz.png">
              <p>庭院定制</p>
            </nuxt-link>
             <nuxt-link class="child-item" :to="{ name: 'info-name', params: { name: 'gazebo' } }" target="_black">
              <img src="~assets/images/m-icon-ltwd.png">
              <p>露台屋顶</p>
            </nuxt-link>
             <nuxt-link class="child-item" :to="{ name: 'info-name', params: { name: 'cabinet' } }" target="_black">
              <img src="~assets/images/m-icon-cgdz.png">
              <p>橱柜定制</p>
            </nuxt-link>
            <nuxt-link class="child-item" :to="{ name: 'info-name', params: { name: 'company' } }" target="_black">
              <img src="~assets/images/m-icon-dtp.png">
              <p>动态篇</p>
            </nuxt-link>
          </div>
        </div>
        <div class="item"><nuxt-link :to="{ name: 'show' }">买家秀</nuxt-link></div>
        <div class="item"><nuxt-link :to="{ name: 'guide-id', params: { id: 12 } }">关于玖米</nuxt-link></div>
        <div class="item"><a href="http://www.9-mi.cn/zhuanti/zs/" target="_blank">阳台合伙人</a></div>
        <div class="item"><a href="http://www.9-mi.cn/zhuanti/hyzs/" target="_blank">玖米花园</a></div>
      </div>
    </b-container>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { filter_special_characters } from '../utils/common.js'

export default {
  data () {
    return {
      q: ''
    }
  },
  computed: mapGetters({
    categories: 'category/categories'
  }),
  methods: {
   async onSearch () {
     const q = await filter_special_characters(this.q)
      if (q === '') {
        window.open("//www.9-mi.cn/theme/yangtai.html")
        return true
      }
      let routeDate = this.$router.resolve({ name: 'search', query: { q } })
      window.open(routeDate.href, '_blank')
    }
  }
}
</script>

<style lang="stylus">
header
  &.border-bottom-line
    border-bottom: 2px solid #cb0d1c
  .header-top
    background: #f5f5f5
    border-bottom: 1px solid #e5e5e5
    .content
      padding: 8px 0 5px 0
      text-align: right
      color: #999
      font-size: 12px
      span
        margin:0 10px
        a
          color: #999
      .phone
        margin:0 10px 0 20px
        padding: 5px 12px
        background: url(../assets/images/phone.png) no-repeat
        background-size: 100%
  .header-content
    height: 106px
    justify-content: space-between
    align-items: center
    .search
      display: flex
      flex-direction: column
      justify-content: center
      .search-box
        position: relative
        input
          padding: 0 10px
          width: 340px
          height: 38px
          border: 1px solid #ccc
          border-radius: 40px
        .search-submit
          position: absolute
          width: 26px
          height: 26px
          top: 6px
          right: 10px
          font-size: 0
          background-image: url('~assets/images/search_icon.png')
          cursor: pointer
      .search-list
        padding-left: 10px
        .item
          margin-right: 10px
          a
            font-size: 12px
            color: #999
  .header-navbar
    margin-top: 10px
    .header-navbar-box
      display: flex
      .item
        line-height: 40px
        a
          display: block
          padding: 0 18px
          color: #333
          font-size:15px
          font-weight: bold
          &:hover
          &.nuxt-link-exact-active
            color: #bb0b19
            text-decoration: none
        &.category
          position: relative
          overflow: hidden
          &.isindex
            overflow: visible
            .category-box
              opacity: 1
              z-index: 99
          h3
            margin:0
            padding: 0 84px
            height: 100%
            font-size: 15px
            line-height: 40px
            color: #fff
            background-color: #cb0d1c
            cursor: pointer
          .category-box
            position: absolute
            left: 50%
            margin-left: -129px
            padding: 0
            height: 500px
            background-color: #000
            background-color: rgba(0, 0, 0, 0.55)
            transition: all .3s
            opacity: 0
            z-index: 0
            .category-list
              height: 84px
              // border-top: 1px solid #fff
              // border-bottom: 1px solid #e6e6e6
              &:first-of-type
                border-top: none
              &:last-of-type
                height: 80px
                border-bottom: none
              .category-list-left
                position: relative
                padding: 0 10px
                width: 258px
                .top
                  display: flex
                  align-items: center
                  .icon
                    display: block
                    width: 50px
                    height: 32px
                    background-image: url('~assets/images/categories_icon.png')
                  a
                    color: #fff
                .bottom
                  display: flex
                  a
                    padding: 0 5px 0 2px
                    font-size: 13px
                    color: #fff
                    line-height: 26px
                    font-weight: 400
              .category-list-right
                position: absolute
                top: 0
                left: 258px
                width: 0
                height: 100%
                overflow: hidden
                background-color: #fff
                transition: all .2s
                .child-list
                  width: 600px
                  ul
                    padding: 0
                    display: flex
                    flex-wrap: wrap
                    li
                      margin-bottom: 15px
                      width: 33.33%
                      text-align: center
                      img
                        width: 146px
                        height: 80px
                      p
                        margin-bottom: 0
                        line-height: 28px

                        font-weight: 400
              &:nth-child(2)
                .icon
                  background-position:-50px 0
              &:nth-child(3)
                .icon
                  background-position:-100px 0
              &:nth-child(4)
                .icon
                  background-position:-150px 0
              &:nth-child(5)
                .icon
                  background-position:-200px 0
              &:nth-child(6)
                .icon
                  background-position:-250px 0
          &:hover
            overflow: visible
            .category-box
              height: 500px
              opacity: 1
              z-index: 99
              .category-list
                &:hover
                  background-color: #fff
                  .category-list-left
                    .top
                      display: flex
                      align-items: center
                      .icon
                        display: block
                        background-position-y: 32px
                      a
                        color: #666
                    .bottom
                      display: flex
                      a
                        padding: 0 5px 0 2px
                        font-size: 13px
                        color: #666
                        line-height: 26px
                        font-weight: 700
                  .category-list-right
                    width: 600px
        &.itemore
          .children
            position: absolute
            display: flex
            left: 50%
            margin-left: -951px
            padding-left: 500px
            width: 1902px
            height: 0
            justify-content: center
            text-align: center
            background-color: #fff
            z-index: 100
            transition: all .6s
            overflow: hidden
            opacity: 0
            z-index: 99
            .child-item
              padding-top: 16px
              color: #666
              line-height: 32px
              font-size: 12px
              font-weight: 400
              img
                width: 36px
                height: 36px
              &:hover
                color: #cb0d1c
          &:hover
            .children
              overflow: inherit
              padding-left: 234px
              height: 110px
              opacity: 1
</style>
