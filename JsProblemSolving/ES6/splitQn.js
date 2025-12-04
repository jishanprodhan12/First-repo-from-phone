// QN-022: স্ট্রিং split() মেথড ব্যবহার।
// 'tagString' নামে একটি স্ট্রিং আছে যেখানে কমা (,) দ্বারা বিভিন্ন ট্যাগ আলাদা করা আছে।
//const tagString = "javascript,html,css,react,frontend";

// 1. 'split()' মেথড ব্যবহার করে এই স্ট্রিংটিকে কমা (',') দিয়ে বিভক্ত করে একটি অ্যারে তৈরি করুন।
// 2. নতুন অ্যারেটির নাম দিন 'tagsArray'।
// 3. 'tagsArray' ভেরিয়েবলের প্রথম আইটেমটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।
 


const tagString = "javascript,html,css,react,frontend";
const tagsArray = tagString.split(',');

console.log(tagsArray);

console.log(tagsArray[0]);


