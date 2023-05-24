/*
 * @Author: zhouxu
 * @Date: 2023-05-24 14:09:30
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
const {
  initializeCityDatabase,
  clearCityDatabase,
  isCity,
} = require('./tools');

// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityDatabase();
// });

/**
 * beforeEach 和 afterEach 能够通过与 异步代码测试 相同的方式处理异步代码 — — 他们可以采取 done 参数或返回一个 promise。 例如，如果   initializeCityDatabase() 返回解决数据库初始化时的 promise ，我们会想返回这一 promise︰
 */
beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});
test('city database has San Jua', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
test('city database has San Jua', () => {
  expect(isCity('HAH')).toBeFalsy();
});
