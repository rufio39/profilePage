const sortItems = require('./sortItems');

test('arranges the array from lowest int to highest int', () => {
  expect(sortItems).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  console.log(sortItems);
});