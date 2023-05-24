/*
 * @Author: zhouxu
 * @Date: 2023-05-24 14:55:18
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */

/**
 * @description Jest 会在所有真正的测试开始之前执行测试文件里所有的 describe 处理程序（handlers）
 */
describe('describe outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');

    test('test 1', () => console.log('test 1'));
  });

  console.log('describe outer-b');

  test('test 2', () => console.log('test 2'));

  describe('describe inner 2', () => {
    console.log('describe inner 2');

    test('test 3', () => console.log('test 3'));
  });

  console.log('describe outer-c');
});

/**
 * 打印结果：
// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test 1
// test 2
// test 3
 */
