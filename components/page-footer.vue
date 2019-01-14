<template>
  <div class="page-footer">
      <b-container class="ensure"></b-container>
      <b-container class="desc">
        <div class="desc-wrap">
          <dl>
            <dt><span>玖米空间</span></dt>
            <dd>
              <a href="/guide/12" target="_blank">关于我们</a>
              <a href="/guide/15" target="_blank">品牌实力</a>
              <a href="/guide/16" target="_blank">材料工艺</a>
              <a href="/guide/17" target="_blank">联系我们</a>
            </dd>
          </dl>
          <dl>
            <dt><span>帮助中心</span></dt>
            <dd>
              <a href="/guide/18" target="_blank">服务流程</a>
              <a href="/guide/20" target="_blank">交易流程</a>
              <a href="/guide/19" target="_blank">发货配送</a>
              <a href="/guide/21" target="_blank">隐私政策</a>
              <a href="/guide/22" target="_blank">发票说明</a>
              <a href="/guide/23" target="_blank">常见问题</a>
            </dd>
          </dl>
          <dl>
            <dt><span>售后服务</span></dt>
            <dd>
              <a href="/guide/24" target="_blank">退款政策</a>
              <a href="/guide/25" target="_blank">退货政策</a>
              <a href="/guide/26" target="_blank">售后保障</a>
            </dd>
          </dl>
          <dl class="contact">
            <dd>
              <p>客服热线: <span>400-883-8366</span></p>
              <p class="address">广州天河区天源路天河新天地C座9楼</p>
            </dd>
          </dl>
          <dl class="right">
            <dt><span>手机浏览</span></dt>
            <dd>
              <img src="~assets/images/mper.svg" width="105">
            </dd>
          </dl>
        </div>
      </b-container>
      <div class="footer-copyright">
        <p><a target="_blank" href="//www.9-mi.cn">玖米空间</a>|<a target="_blank" href="//www.djw001.com/">玖米建筑工业</a></p>
        <span>Copyright © 2016-2026 广东玖米空间科技有限公司. All Rights Reserved.     粤ICP备15094424号 </span>
      </div>
  </div>
</template>

<style lang="stylus">
.page-footer
  border-top: 1px solid #d1d7dc
  .ensure
    width: 1140px
    height: 100px
    background: url(../assets/images/help.jpg) no-repeat
  .desc
    padding-top: 22px
    border-top: 1px solid #ededed
    dl
      display: inline-block
      padding-left: 52px
      width: 200px
      vertical-align: top
      span
        color: #646464
        font-size: 16px
        font-weight: 700
        line-height: 30px
      dd
        a
          display: block
          width: 100px
          line-height: 26px
          color: #8b8b8b
          &:hover
            text-decoration: none
      &.contact
        padding-top: 30px
        width: 320px
        vertical-align: top
        font-size: 16px
        color: #646464
        p
          margin-bottom: 3px
        .address
          font-weight: 400
      &.right
        float: right
  .footer-copyright
    padding: 24px 0
    text-align: center
    color: #5f5f5f
    border-top: 2px solid #cb0d1c
    background-color: #000
    p
      color:#fff
    a
      padding:0 6px
      color: #fff
      &:hover
        text-decoration: none
</style>
