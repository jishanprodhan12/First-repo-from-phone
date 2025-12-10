// QN–002: Check if a Number is Even or Odd

// This function checks whether a number is even or odd
function checkNumber(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Test the function
console.log(checkNumber(7));   // Output: Odd
console.log(checkNumber(12));  // Output: Even
