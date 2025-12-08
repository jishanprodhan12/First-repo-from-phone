// QN-029: রিকার্শন ব্যবহার করে ফ্যাক্টরিয়াল (Factorial) গণনা।
// একটি ফাংশন তৈরি করুন যার নাম হবে 'calculateFactorial'।
// এই ফাংশনটি একটি সংখ্যা (n) নেবে এবং রিকার্শন ব্যবহার করে সেই সংখ্যার ফ্যাক্টরিয়াল মান রিটার্ন করবে।
// (ফ্যাক্টরিয়াল: n! = n * (n-1) * (n-2) * ... * 1)
// 
// বেস কেস (Base Case): 0! = 1 এবং 1! = 1।
// 4 এর ফ্যাক্টরিয়াল (4!) = 4 * 3 * 2 * 1 = 24
// 
// 4 ইনপুট দিয়ে ফলাফলটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;            // Base Case
    }
    return n * calculateFactorial(n - 1);   // Recursive Call
}

const result = calculateFactorial(4);

console.log(result);  // Output: 24
