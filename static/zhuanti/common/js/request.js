if (!sessionStorage.getItem("oneurl")) {
  var thisurl = window.location.href;
  var from = GetQueryString('from') || GetQueryString('chp');
  sessionStorage.setItem('oneurl', thisurl);
  sessionStorage.setItem('from', from);
}

if (!sessionStorage.getItem('sourceRef')) {
  sessionStorage.setItem('sourceRef', document.referrer || '未知')
}

$(document).ready(function () {
  $(document).on("click", ".tjajax", function () {
    $_form = $(this).closest('.ajaxform');
    const _name = $('.tj_name', $_form).val();
    const _mobile = $('.tj_mobile', $_form).val();
    const _contactTime = $('.tj_contactTime', $_form).val();
    const _remark = $('.tj_other', $_form).val();

    if (_name.length < 1) {
      $(".ajax-result", $_form).text("亲，请输入您的姓名！");
      $('.tj_name', $_form).focus();
      return false;
    } else if (_name.length > 10) {
      $(".ajax-result", $_form).text("亲，您的姓名不能大于10个字符！");
      $(".tj_name", $_form).focus();
      return false;
    } else {
      $(".ajax-result", $_form).text("");
    }

    const isMobile = /^1[3-8]{1}[0-9]{1}[0-9]{8}$/;
    if (!isMobile.test(_mobile)) {
      $(".ajax-result", $_form).text("亲，请您填写正确手机号码!");
      $(".tj_mobile", $_form).focus();
      return false;
    } else {
      $(".ajax-result", $_form).text("");
    }

    const _entryUrl = sessionStorage.getItem('oneurl');
    var _submitUrl = window.location.href;
    var getfrom = sessionStorage.getItem('from');
    if (getfrom) { //兼容之前参数
      if (getfrom.indexOf('_') !== -1) {
        var _from = getfrom.split('_');
      } else if (getfrom.indexOf('kj') !== -1) {
        _from = getfrom.split('kj');
      } else {
        _from = ['w', 'czr958'];
      }
    } else {
      var _from = ['w', 'czr958']
    }

    const contactTime = _contactTime ? `contactTime: "${_contactTime}"` : '';
    const remark = _remark ? `remark: "${_remark}"` : '';
    const entryUrl = _entryUrl ? `entryUrl: "${_entryUrl}"` : '';
    const submitUrl = _submitUrl ? `submitUrl: "${_submitUrl}"` : '';
    const sourceRef = sessionStorage.getItem('sourceRef') || '未知';

    $.ajax({
      type: "POST",
      url: "https://api.9-mi.cn/graphql",
      data: {
          query: `mutation {
            addFeedback(input: {
              name: "${_name}"
              mobile: "${_mobile}"
              identity: "${_from[0]}"
              shareCode: "${_from[1]}"
              sourceRef: "${sourceRef}"
              ${contactTime}
              ${remark}
              ${entryUrl}
              ${submitUrl}
            }){
              code
              message
            }
          }`
        },
      success: function (result, status) {
        if (typeof result.errors === 'undefined') {
          $(".tj_name", $_form).val('');
          $(".tj_mobile", $_form).val('');
          $(".ajax-result", $_form).css('color', '#2a950f');
          $(".ajax-result", $_form).text("恭喜登记成功，玖米空间为您免费测量、出效果图，请您24小时内留意接听020-8527****家居顾问来电.");
        }
      },
      error: function (xhr, status) {
        $(".ajax-result", $_form).text("服务器被外星人偷走了，请您稍后重试或拨打400-883-8366联系我们.");
      }
    });

  });
});

function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
