<template>
  <div class="common-rightside">
    <div class="common-rightside-wrap">
      <a href="javascript:void(0)" onclick="openBaidu()" class="item">
        <div class="item-icon">
          <img src="~assets/images/tool-icon1.png">
        </div>
        <p>咨询客服</p>
      </a>
      <a href="javascript:;" @click="openFeedback" class="item">
        <div class="item-icon">
          <img src="~assets/images/tool-icon2.png">
        </div>
        <p>免费预约</p>
      </a>
      <a href="/topic" target="_blank" class="item">
        <div class="item-icon">
          <img src="~assets/images/tool-icon3.png">
        </div>
        <p>近期活动</p>
      </a>
      <div class="item">
        <div class="item-icon" @click="totop">
          <img src="~assets/images/tool-icon4.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CreateAPI from 'vue-create-api'
import JumiPopupFeedback from '~/components/jumi-popup-feedback'
Vue.use(CreateAPI)
Vue.createAPI(JumiPopupFeedback, true)

export default {
  methods: {
    openFeedback () {
      this.poput = this.$createJumiPopupFeedback()
      this.poput.show()
    },
    totop ()　{
      var oTop = document.documentElement.scrollTop
      const duration = 300
      const step = oTop / (duration / ( 1000 / 60 )) >> 0
      const fn = () => {
        if (oTop >= step) {
          oTop -= step
          document.documentElement.scrollTop = oTop
          requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(fn)
        }
      }
      requestAnimationFrame(fn)
    }
  }
}
</script>


<style lang="stylus">
.common-rightside
  position: fixed
  padding: 14px 8px 26px 8px
  right: 20px
  top: 50%
  width: 78px
  height: auto
  background: rgba(255,255,255,.85)
  box-shadow: -2px -2px 10px rgba(0,0,0,.35)
  text-align: center
  transform: translate(0, -50%)
  .item
    p
      margin-top: 4px
      margin-bottom: 14px
      padding-bottom: 10px
      border-bottom: 1px solid #efefef
    img
      transition: all 0.6s
      cursor: pointer
    &:hover
      color: #dd0017
      img
        transform: scale(1.2)
</style>
