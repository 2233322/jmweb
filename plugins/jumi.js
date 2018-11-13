export default ({ app: { router }, store }) => {
  router.afterEach((to, from) => {
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
  })
}
