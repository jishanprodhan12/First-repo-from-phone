// QN-009: try...catch ব্যবহার করে এরর হ্যান্ডলিং।
// একটি ফাংশন তৈরি করুন যার নাম 'processData'।
// এই ফাংশনটি একটি 'try...catch' ব্লক ব্যবহার করবে।
// 'try' ব্লকের ভিতরে, একটি এরর তৈরি করুন (যেমন: throw new Error("Processing failed!"));
// 'catch' ব্লকের ভিতরে, কনসোলে সেই এরর মেসেজটি প্রিন্ট করার জন্য প্রয়োজনীয় কোডটি লিখুন।

const processData = () => {
    try {
        throw new Error("Processing failed: File not found.");
        console.log("This line will not be executed.");
    } catch (error) {
        console.log("Error happened:", error.message);
    }
};

processData();
