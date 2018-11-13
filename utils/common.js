/**
 *
 * @param {String} s 字符串
 * @returns {String} 字符串
 * @desc 过滤特殊字符串返回
 */
export async function filter_special_characters(s) {
  return s.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
}
