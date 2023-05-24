/**
 * @description: 一次性设置
 * 在某些情况下，你只需要在文件的开头或结尾做一次设置。 如果这个通用设置是异步的，就比较麻烦，因为没办法每个用例都设置一遍，这样性能还很差。 Jest 提供`beforeAll`和`afterAll`来就处理这个问题
 */

const {
  initializeCityDatabase,
  clearCityDatabase,
  isCity,
} = require('./tools');

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
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
