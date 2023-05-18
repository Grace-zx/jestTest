/*
 * @Author: zhouxu
 * @Date: 2023-05-18 16:44:17
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // 可以使用必须包含在错误消息中的字符串或正则
  expect(() => compileAndroidCode()).toThrow('you are using the wrong');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // 使用正则表达式来匹配一条精确的错误消息
  //   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); fail
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // success
});
