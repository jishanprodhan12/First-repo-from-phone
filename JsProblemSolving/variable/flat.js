function flattenArray(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
const arr = [1, [2, [3, [4, 5]]]];

const flatArr = flattenArray(arr);
console.log(flatArr); // [1, 2, 3, 4, 5]
