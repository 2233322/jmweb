function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

if (!sessionStorage.getItem("oneurl")) {
  var thisurl = window.location.href;
  var from = GetQueryString('from');
  sessionStorage.setItem('oneurl', thisurl);
  sessionStorage.setItem('from', from);
}

$(document).ready(function () {
  $(document).on('click', '.J_send', function () {
    $(this).attr('disabled', true)
    $_form = $(this).closest('.J_form')
    const _name = $('.J_value_name', $_form).val()
    const _mobile = $('.J_value_mobile', $_form).val()
    const _contactTime = $('.J_value_contactTime', $_form).val()
    const _province = $('.J_value_province', $_form).val()
    const _city = $('.J_value_city', $_form).val()
    const _district = $('.J_value_district', $_form).val()

    if (_name.length < 1) {
      $('.J_send_result', $_form).html('<span style="color: #ff0000">亲，请输入您的姓名！</span>')
      $('.J_value_name', $_form).focus()
      $(this).attr('disabled', false)
      return false
    } else if (_name.length > 10) {
      $('.J_send_result', $_form).html('<span style="color: #ff0000">亲，您的姓名不能大于10个字符！</span>')
      $('.J_value_name', $_form).focus()
      $(this).attr('disabled', false)
      return false
    }
    const isMobile = /^1[3-8]{1}[0-9]{1}[0-9]{8}$/
    if (!isMobile.test(_mobile)) {
      $('.J_send_result', $_form).html('<span style="color: #ff0000">亲，请您填写正确的电话号码！</span>')
      $('.J_value_mobile', $_form).focus()
      $(this).attr('disabled', false)
      return false
    }

    const _entryUrl = sessionStorage.getItem('oneurl')
    let _submitUrl = window.location.href
    let getfrom = sessionStorage.getItem('from')
    if (getfrom && (getfrom.indexOf('_') !== -1)) {
      var _from = getfrom.split('_')
    } else {
      var _from = ['w', 'czr958']
    }

    const contactTime = _contactTime ? `contactTime: "${_contactTime}"` : ''
    const remark = _province ? `remark: "${_province}${_city}${_district}"` : ''
    const entryUrl = _entryUrl ?　`entryUrl: "${_entryUrl}"` : ''
    const submitUrl = _submitUrl ? `submitUrl: "${_submitUrl}"` : ''

    $.ajax({
      type: 'POST',
      url: 'https://api.9-mi.cn/graphql',
      data: {
        query: `mutation {
          addFeedback(input: {
            name: "${_name}"
            mobile: "${_mobile}"
            identity: "${_from[0]}"
            shareCode: "${_from[1]}"
            ${contactTime}
            ${remark}
            ${entryUrl}
            ${submitUrl}
          }) {
            code
            message
          }
        }`
      },
      success: (result) => {
        if (typeof result.errors === 'undefined') {
           $('.J_send_result', $_form).html('<span style="color: #2a950f">恭喜登记成功，请您24小时内留意接听玖米家居顾问来电</span>')
        } else {
          $('.J_send_result', $_form).html('<span style="color: #ff0000">服务器被外星人偷走了，请拨打400-883-8366服务热线联系我们.</span>')
        }
      },
      errors: () => {
        $('.J_send_result', $_form).html('<span style="color: #ff0000">服务器被外星人偷走了，请拨打400-883-8366服务热线联系我们.</span>')
      }
    })
    $(this).attr('disabled', false)
  })
})
