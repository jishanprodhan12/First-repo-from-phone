// QN-020: অ্যারে slice() মেথড ব্যবহার।
// 'months' নামে একটি অ্যারে আছে।
//const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 1. 'slice()' মেথড ব্যবহার করে মার্চ থেকে মে মাস পর্যন্ত (Mar, Apr, May) নিয়ে একটি নতুন অ্যারে তৈরি করুন।
// 2. নতুন অ্যারেটির নাম দিন 'Q2Months'।
// 3. 'Q2Months' অ্যারেটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Q2Months = months.slice(2, 5);

console.log(Q2Months);
