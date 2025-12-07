// QN-031: অ্যারে every() মেথড ব্যবহার করে ডেটা ভ্যালিডেশন।
// 'products' নামে একটি অ্যারে আছে, যেখানে প্রতিটি প্রোডাক্টের 'price' প্রোপার্টি রয়েছে।
/*const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 0 }, // মূল্য 0, যা ইনভ্যালিড ধরা হবে
    { name: 'Monitor', price: 300 }
];*/

// 1. একটি ফাংশন তৈরি করুন যার নাম হবে 'allPricesValid'।
// 2. ফাংশনটি 'every()' মেথড ব্যবহার করে পরীক্ষা করবে যে অ্যারের সমস্ত প্রোডাক্টের 'price' 0 (শূন্য) এর চেয়ে বেশি কি না।
// 3. যদি কোনো একটি প্রোডাক্টের মূল্যও 0 বা তার কম হয়, তবে ফাংশনটি 'false' রিটার্ন করবে।
// 4. 'products' অ্যারে ব্যবহার করে ফাংশনটি কল করুন এবং ফলাফল কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।

const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 0 },
    { name: 'Monitor', price: 300 }
];

function allPricesValid(items) {
    return items.every(product => product.price > 0);
}

const result = allPricesValid(products);

console.log(result);

