/**
 *
 * @param {String} name
 * @desc 获取url查询参数
 */
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
if (!sessionStorage.getItem("oneurl")) {
  sessionStorage.setItem('oneurl', window.location.href);
  sessionStorage.setItem('_from', GetQueryString('from'));
}

/**
 * @desc 打开百度商桥
 */
function openBaidu() {
  window.open("http://p.qiao.baidu.com/cps/chat?siteId=10571075&userId=23558704", "", "top=100,left=100,width=780,height=760")
}
