// QN–007: Find the Mode of an Array

// This function takes an array of numbers
// and returns the number that appears most frequently
function findMode(arr) {
  const frequency = {};
  let maxFreq = 0;
  let mode;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  }

  return mode;
}

// Test the function
const numbers = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3];
console.log(findMode(numbers));  // Output: 3
