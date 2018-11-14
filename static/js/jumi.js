/**
 *
 * @desc 跳转到手机版
 */
function uaredirect(f){try{if(document.getElementById("bdmark")!=null){return}var b=false;if(arguments[1]){var e=window.location.host;var a=window.location.href;if(isSubdomain(arguments[1],e)==1){f=f+"/#m/"+a;b=true}else{if(isSubdomain(arguments[1],e)==2){f=f+"/#m/"+a;b=true}else{f=a;b=false}}}else{b=true}if(b){var c=window.location.hash;if(!c.match("fromapp")){if((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))){location.replace(f)}}}}catch(d){}}function isSubdomain(c,d){this.getdomain=function(f){var e=f.indexOf("://");if(e>0){var h=f.substr(e+3)}else{var h=f}var g=/^www./;if(g.test(h)){h=h.substr(4)}return h};if(c==d){return 1}else{var c=this.getdomain(c);var b=this.getdomain(d);if(c==b){return 1}else{c=c.replace(".",".");var a=new RegExp("."+c+"$");if(b.match(a)){return 2}else{return 0}}}};
uaredirect("https://m.9-mi.cn/"+ window.location.search );
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
