// QN-024: স্ট্রিং ক্যাপিটালাইজেশন (Capitalization) সমস্যা।
// 'message' নামে একটি স্ট্রিং আছে।
//const message = "hello world, this is javascript";

// 1. একটি ফাংশন তৈরি করুন যার নাম হবে 'capitalizeWords'।
// 2. ফাংশনটি 'message' স্ট্রিংটি নেবে এবং এটিকে এমনভাবে পরিবর্তন করবে যাতে প্রতিটি শব্দের প্রথম অক্ষর ক্যাপিটাল হয়।
//    (যেমন: "Hello World, This Is Javascript")
// 3. পরিবর্তিত স্ট্রিংটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।
// Hint: স্ট্রিংকে স্পেস দিয়ে split করুন, map ব্যবহার করে পরিবর্তন করুন এবং আবার join করুন।


const message = "hello world, this is javascript";

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const capitalizedMessage = capitalizeWords(message);
console.log(capitalizedMessage);

