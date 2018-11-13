<template>
  <div class="jumi-popup-feedback" v-show="isVisible">
    <div class="jumi-popup-mask" @click="maskClick"></div>
    <div class="jumi-popup-container">
      <div class="jumi-popup-content">
        <div class="form-wrap">
          <div class="popup-close" @click="hide"></div>
          <div class="group-box">
            <div class="input-group">
              <input class="inputbox" v-model="formObj.name" placeholder="您的称呼" ref="name" />
            </div>
            <div class="input-group">
              <input class="inputbox" v-model="formObj.mobile" placeholder="您的手机号码" ref="mobile" />
            </div>
            <div class="input-group">
              <area-cascader v-model="formObj.address" type="text" :level="1" :data="pcaa"></area-cascader>
            </div>
            <div class="input-group">
              <b-form-select v-model="formObj.contactTime" :options="options"></b-form-select>
            </div>
            <div class="input-group">
              <button class="submit" @click="fromSubmit" :disabled="formObj.isDisable">提交申请</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { pcaa } from 'area-data'
import VueAreaLinkage from 'vue-area-linkage'
import axios from 'axios'
import 'vue-area-linkage/dist/index.css'
import CreateAPI from 'vue-create-api'
import JumiToast from './jumi-toast'

Vue.use(VueAreaLinkage)
Vue.use(CreateAPI)

Vue.createAPI(JumiToast, true)
// axios.defaults.baseURL = 'http://192.168.10.191:3006/graphql/'
axios.defaults.baseURL = 'https://api.9-mi.cn/graphql/'

export default {
  name: 'JumiPopupFeedback',
  data () {
    return {
      isVisible: false,
      pcaa,
      formObj: {
        name: '',
        mobile: '',
        address: ['广东省','广州市','天河区'],
        contactTime: 0,
        isDisable: false
      },
      options: [
        {text: '随时可联系', value: 0},
        {text: '上午 (09:30—12:00)', value: 1},
        {text: '中午 (12:00—14:00)', value: 2},
        {text: '下午 (14:00—18:00)', value: 3},
        {text: '晚上 (18:00—22:30)', value: 4}
      ]
    }
  },
  methods: {
    maskClick (e) {
      this.hide()
    },
    show () {
      this.isVisible = true
    },
    hide () {
      this.isVisible = false
    },
    fromSubmit() {
      const { name, mobile, address, contactTime} = this.formObj
      const isMobile = /^1[3-8]{1}[0-9]{1}[0-9]{8}$/
      if (name === '') {
        this.toast = this.$createJumiToast({
          content: '请输入您的称呼！'
        })
        this.toast.show()
        this.$refs.name.focus()
        return false
      }
      if (!isMobile.test(mobile)) {
        this.toast = this.$createJumiToast({
          content: '请输入正确的手机号码！'
        })
        this.toast.show()
        this.$refs.mobile.focus()
        return false
      }

      const _entryUrl = sessionStorage.getItem('oneurl') || window.location.href
      const QcontactTime = contactTime ? `contactTime: "${contactTime}"` : ''
      const QentryUrl = `entryUrl: "${_entryUrl}"`
      const QsubmitUrl = `submitUrl: "${window.location.href}"`
      const Qremark = address ? `remark: "${address[0]},${address[1]},${address[2]}"` : ''
      const getfrom = sessionStorage.getItem('_from')
      let _from = []
      if (getfrom) {
        if (getfrom.indexOf('_') !== -1) {
          _from = getfrom.split('_')
        } else {
          _from = ['w', 'czr958']
        }
      } else {
        _from = ['w', 'czr958']
      }
      axios.post('/graphql', {
        query: `mutation {
          addFeedback(input: {
            name: "${name}"
            mobile: "${mobile}"
            identity: "${_from[0]}"
            shareCode: "${_from[1]}"
            ${Qremark}
            ${QcontactTime}
            ${QentryUrl}
            ${QsubmitUrl}
          }){
            code
            message
          }
        }` })
      .then(({ data: { data, errors } }) => {
        if (typeof errors === 'undefined') {
          this.formObj.name = ''
          this.formObj.mobile = ''
          this.toast = this.$createJumiToast({
            content: '恭喜登记成功,请您24小时内留意接听玖米家居顾问来电！'
          })
          this.toast.show()
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>


<style lang="stylus">
.jumi-popup-feedback
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 99
  //pointer-events: none
  .jumi-popup-mask
    position: absolute
    width: 100%
    height: 100%
    overflow: hidden
    background-color: rgb(0,0,0)
    opacity: .3
    //pointer-events: auto
  .jumi-popup-container
    position: absolute
    width: 100%
    height: 100%
    transform: translate(100%,100%)
    .jumi-popup-content
      position: absolute
      width: auto
      max-width: 100%
      top: -50%
      left: -50%
      transform: translate(-50%,-50%)
      .form-wrap
        width: 476px
        height: 588px
        background-image: url(../assets/images/poput-feedback.png)
        background-repeat: no-repeat
        background-size: 100%
        .popup-close
          position: absolute
          top: 196px
          right: 18px
          width: 30px
          height: 30px
          cursor: pointer
        .group-box
          padding: 280px 80px 0 80px
          .input-group
            margin-top: 10px
            color: #999
            input
              padding: 0 15px
              height: 38px
              width: 100%
              border-radius: 2px
              border: none
              color: #999
              background-color: #f5f5f5
            .area-cascader-wrap
              width: 100%
              .area-select
                &.large
                  width: 100%
                  height: 38px
                  background-color: #f5f5f5
                  border: none
                  color: #999
                .area-select-icon
                  border-top-color: #000
            .custom-select
              border: none
              background-color: #f5f5f5
              color: #999
              &:focus
                outline: none
                box-shadow: none
            .submit
              margin: 20px auto
              width: 60%
              height: 38px
              line-height: 38px
              border-radius: 2px
              color: #fff
              font-size:16px
              background-color: #f34d41
              border: none
              cursor: pointer
</style>
