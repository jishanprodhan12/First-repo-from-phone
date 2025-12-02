// QN-004: অ্যারে ফিল্টার (filter) মেথড ব্যবহার।
// 'students' নামে একটি অ্যারে আছে যেখানে কিছু অবজেক্ট রয়েছে।
// প্রতিটি অবজেক্টে 'name' এবং 'score' প্রোপার্টি আছে।
/*
const students = [
    { name: 'Raju', score: 85 },
    { name: 'Mira', score: 92 },
    { name: 'Joy', score: 78 },
    { name: 'Priya', score: 95 }
];
*/
// আপনাকে একটি নতুন অ্যারে তৈরি করতে হবে যার নাম 'highScorers'।
// এই নতুন অ্যারেতে শুধুমাত্র সেই ছাত্রদের অবজেক্টগুলি থাকবে যাদের 'score' 90 বা তার বেশি।
// একটি অ্যারো ফাংশন ব্যবহার করে 'filter' মেথডটি প্রয়োগ করুন এবং ফলাফল কনসোলে প্রিন্ট করুন।

// QN-004: অ্যারে ফিল্টার (filter) মেথড ব্যবহার।

const students = [
    { name: 'Raju', score: 85 },
    { name: 'Mira', score: 92 },
    { name: 'Joy', score: 78 },
    { name: 'Priya', score: 95 }
];

// filter() মেথড শর্ত পূরণকারী আইটেমগুলির ভিত্তিতে একটি নতুন অ্যারে তৈরি করে।
// এখানে, student.score 90 বা তার বেশি হলেই অবজেক্টটি নতুন অ্যারেতে অন্তর্ভুক্ত হবে।
const highScorers = students.filter(
    (student) => student.score >= 90 
);

console.log(highScorers);

