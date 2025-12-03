// QN-016: অ্যারে ডি-স্ট্রাকচারিং এবং স্প্রেড অপারেটর ব্যবহার।

// আপনার কাছে 'firstThree' এবং 'lastTwo' নামে দুটি অ্যারে আছে।
//const firstThree = ['Red', 'Green', 'Blue'];
//const lastTwo = ['Yellow', 'Purple'];

// 1. স্প্রেড অপারেটর (...) ব্যবহার করে এই দুটি অ্যারে যুক্ত করে 'fullColors' নামে একটি নতুন অ্যারে তৈরি করুন।

// 2. ডি-স্ট্রাকচারিং ব্যবহার করে 'fullColors' অ্যারে থেকে প্রথম দুটি আইটেমকে (Red, Green) যথাক্রমে 'color1' এবং 'color2' নামে দুটি ভেরিয়েবলে রাখুন।

// 3. 'color1' এবং 'fullColors' অ্যারে দুটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।


const firstThree = ['Red', 'Green', 'Blue'];
const lastTwo = ['Yellow', 'Purple'];

const fullColors = [...firstThree, ...lastTwo];

const [color1, color2] = fullColors;

console.log(fullColors);
console.log(color1);
console.log(color2);
