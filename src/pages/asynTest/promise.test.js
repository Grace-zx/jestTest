/*
 * @Author: zhouxu
 * @Date: 2023-05-18 17:24:26
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
function fetchData() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve('peanut butter');
    // }, 200);
    reject('error');
  });
}

// test('the data is peanut butter', () => {
//   return fetchData().then((res) => {
//     expect(res).toBe('peanut butter');
//   });
// });

/**
 * 如果期望Promise被Reject，则需要使用 .catch 方法。 请确保添加 expect.assertions 来验证一定数量的断言被调用。 否则，一个fulfilled状态的Promise不会让测试用例失败
 */

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch((err) => {
    expect(err).toMatch('error');
  });
});
