// QN-008: অ্যারে রিডিউস (reduce) মেথড ব্যবহার করে মোট যোগফল বের করা।
// 'monthlySales' নামে একটি অ্যারে আছে, যেখানে বিগত মাসগুলির বিক্রয়ের পরিমাণ (সংখ্যা) রয়েছে।
//const monthlySales = [1500, 2200, 1800, 3500, 1200];

// আপনাকে 'reduce' মেথড ব্যবহার করে এই অ্যারের সমস্ত সংখ্যাগুলির মোট যোগফল (Total Sum) বের করতে হবে।
// প্রাথমিক মান (initial value) 0 সেট করুন।
// ফলাফলটি 'totalRevenue' নামে একটি ভেরিয়েবলে সংরক্ষণ করুন এবং কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোডটি লিখুন।

const monthlySales = [1500, 2200, 1800, 3500, 1200];

const totalRevenue = monthlySales.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);

console.log(totalRevenue);
// Output: 10200
