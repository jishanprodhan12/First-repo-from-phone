// QN-021: অ্যারে splice() মেথড ব্যবহার করে ডিলিট এবং যুক্ত করা।
// আপনার কাছে 'techStack' নামে একটি অ্যারে আছে।
//let techStack = ['HTML', 'CSS', 'VanillaJS', 'React', 'Vue', 'Angular'];

// 1. 'splice()' মেথড ব্যবহার করে 'React' এবং 'Vue' এই দুটি আইটেম ডিলিট করুন।
// 2. একই splice() কলে, ডিলিট করা আইটেমগুলির ঠিক জায়গায় 'NextJS' এবং 'Tailwind' এই দুটি নতুন আইটেম যুক্ত করুন।
// 3. পরিবর্তিত 'techStack' অ্যারেটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।


let techStack = ['HTML', 'CSS', 'VanillaJS', 'React', 'Vue', 'Angular'];
console.log("Original Array:", techStack);

techStack.splice(3, 2, 'NextJS', 'Tailwind');

console.log("Modified Array:", techStack);
