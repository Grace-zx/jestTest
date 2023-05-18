/*
 * @Author: zhouxu
 * @Date: 2023-05-18 16:14:42
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // 大于
  expect(value).toBeGreaterThanOrEqual(3.5); //大于或等于
  expect(value).toBeLessThan(5); // 小于
  expect(value).toBeLessThanOrEqual(4.5); // 小于或等于

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

/**
 * 对于比较浮点数相等，使用 toBeCloseTo 而不是 toEqual，因为你不希望测试取决于一个小小的舍入误差。
 */
test('两个浮点数相加', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3);
});
