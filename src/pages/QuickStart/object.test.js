describe('Object Assignment moudle', () => {
  const data = { one: 1 };
  data['two'] = 2;
  test('Use toEqual to test a object', () => {
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
