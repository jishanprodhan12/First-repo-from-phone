// QN-007: async/await ব্যবহার করে API কল।
// একটি ফাংশন তৈরি করুন যার নাম 'fetchData' এবং এটি অবশ্যই 'async' কি-ওয়ার্ড ব্যবহার করবে।
// এই ফাংশনটি 'https://jsonplaceholder.typicode.com/todos/1' এই পাবলিক API Endpoint-এ ডেটা আনার জন্য 'fetch' ব্যবহার করবে।
// ডেটা সফলভাবে আনার পর, JSON থেকে প্রাপ্ত ডেটাটিকে কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোডটি লিখুন। 
// (ফাংশন ঘোষণা এবং ফাংশন কল করা প্রয়োজন।)

const fetchData = async () => {
    try {
        const getTodos = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await getTodos.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchData();
