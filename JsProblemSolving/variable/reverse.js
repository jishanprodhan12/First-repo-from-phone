// QN–004: Reverse a String

// This function takes a string and returns its reverse
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Test the function
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("jishan")); // Output: "nahsij"

