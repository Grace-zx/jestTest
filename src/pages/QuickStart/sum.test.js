/*
 * @Author: zhouxu
 * @Date: 2023-05-18 11:19:22
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
