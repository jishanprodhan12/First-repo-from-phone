// QN–003: Find the Largest Number in an Array

// This function takes an array of numbers
// and returns the largest number using Math.max
function findLargestNumber(numbers) {
  return Math.max(...numbers);
}

// Test the function
const result = findLargestNumber([10, 55, 32, 18]);

console.log(result);  // Output: 55
