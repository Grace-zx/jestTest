/*
 * @Author: zhouxu
 * @Date: 2023-05-28 22:24:22
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
import forEach from './forEach';

const mockCallBack = jest.fn((x) => x + 42);
test('forEach', () => {
  forEach([0, 1], mockCallBack);
  // mock函数被调用了两次
  expect(mockCallBack.mock.calls).toHaveLength(2);
  // 对函数的第一次调用的第一个参数为0
  expect(mockCallBack.mock.calls[0][0]).toBe(0);
  // 对函数的第二次调用的第一个参数为0
  expect(mockCallBack.mock.calls[1][0]).toBe(1);
  // 对函数的第一次调用的返回值为42
  expect(mockCallBack.mock.results[0].value).toBe(42);
});
