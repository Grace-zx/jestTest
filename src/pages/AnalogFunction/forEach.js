/*
 * @Author: zhouxu
 * @Date: 2023-05-28 22:22:04
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
export default function forEach(items, callBack) {
  for (let i = 0; i < items.length; i++) {
    callBack(items[i]);
  }
}
