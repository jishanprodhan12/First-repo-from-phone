// QN-018: ক্লোজার (Closure) ব্যবহার করে একটি প্রাইভেট কাউন্টার তৈরি।
// একটি ফাংশন তৈরি করুন যার নাম হবে 'createCounter'।
// এই ফাংশনটি ভেতরে 'count' নামে একটি ভেরিয়েবলকে 0 মান দিয়ে সংরক্ষণ করবে। (এটি প্রাইভেট ভেরিয়েবল হিসেবে কাজ করবে)।
// 'createCounter' ফাংশনটি একটি নতুন ফাংশন রিটার্ন করবে, যার নাম হবে 'increment'।
// 'increment' ফাংশনটি কল করা হলে, এটি 'count' এর মান 1 করে বাড়িয়ে দেবে এবং নতুন মানটি রিটার্ন করবে।
// 
// 1. 'createCounter' ফাংশনটি কল করে 'counter1' নামে একটি ভেরিয়েবলে সংরক্ষণ করুন।
// 2. 'counter1' ফাংশনটি দুবার কল করুন এবং প্রতিবার ফলাফল কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।

function createCounter() {
    let count = 0;
    return function increment() {
        count += 1;
        return count;
    };
}

const counter1 = createCounter();

console.log(counter1());
console.log(counter1());
