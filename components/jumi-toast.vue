<template>
  <div class="jumi-popup" v-show="isVisible" @click="maskClick">
    <div class="jumi-popup-mask"></div>
    <div class="jumi-popup-container">
      <div class="jumi-popup-content">
        <i class="jumi-popup-icon"></i>
        <div class="jumi-popup-tip">
          {{content}}
          <slot name="other"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumiToast',
  props: {
    content: {
      type: String,
      default: 'txt'
    },
    txt: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    maskClick (e) {
      this.hide()
    },
    show () {
      this.isVisible = true
      this.clearTimer()
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide()
          }, this.time)
        }
      })
    },
    hide () {
      this.isVisible = false
      this.clearTimer()
    },
    clearTimer () {
      clearTimeout(this.timer)
        this.timer = null
    }
  }
}
</script>

<style lang="stylus">
.jumi-popup
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 999
  //pointer-events: none
  .jumi-popup-mask
    display: none
    position: absolute
    width: 100%
    height: 100%
    overflow: hidden
    background-color: #333
    opacity: .4
    //pointer-events: auto
  .jumi-popup-container
    position: absolute
    width: 100%
    height: 100%
    transform: translate(100%,100%)
    .jumi-popup-content
      position: absolute
      padding: 14px 20px
      display: flex
      width: auto
      max-width: 100%
      top: -50%
      left: -50%
      transform: translate(-50%,-50%)
      background-color: rgba(0,0,0,.8)
      border-radius: 2px
      .jumi-popup-tip
        color: #ff0000
</style>
