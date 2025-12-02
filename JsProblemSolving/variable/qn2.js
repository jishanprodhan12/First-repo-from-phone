// QN-002: অ্যারে ম্যাপ (map) মেথড ব্যবহার।
const productPrices = [100, 250, 450, 1000];

// map() মেথডটি প্রতিটি এলিমেন্টের উপর পুনরাবৃত্তি করে এবং একটি নতুন অ্যারে রিটার্ন করে।
const pricesWithTax = productPrices.map((price) => price + (price * 0.10));

console.log(pricesWithTax);
// আউটপুট: [ 110, 275, 495, 1100 ]
