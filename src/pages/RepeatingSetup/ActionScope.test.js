/*
 * @Author: zhouxu
 * @Date: 2023-05-24 14:31:04
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
/**
 * @description 顶层的 `before*` 和 `after*` hook 函数会应用于文件中的每一条测试 在 `describe` 块中声明的 hook 函数，只会作用于 `describe` 中的测试.比如说，我们不仅有一个城市的数据库，还有一个食品数据库。 我们可以为不同的测试做不同的设置︰
 */
// Applies to all tests in this file

const {
  initializeCityDatabase,
  isCity,
  initializeFoodDatabase,
  isValidCityFoodPair,
} = require('./tools');

beforeEach(() => {
  return initializeCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
