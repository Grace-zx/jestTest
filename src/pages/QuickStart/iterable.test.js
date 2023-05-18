/*
 * @Author: zhouxu
 * @Date: 2023-05-18 16:29:51
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('test shoppingList has milk', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
