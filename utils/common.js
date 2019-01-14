/**
 * 过滤特殊字符后返回
 * @param {String} s
 * @returns {String}
 */
export async function filter_special_characters(s) {
  return s.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
}
