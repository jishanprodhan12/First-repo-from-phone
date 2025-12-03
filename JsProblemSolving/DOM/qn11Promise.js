// QN-011: প্রমিজ (Promise) তৈরি এবং চেইনিং (Chaining) ব্যবহার।
// একটি প্রমিজ তৈরি করুন যার নাম হবে 'myPromise'।
// এই প্রমিজটি ২ সেকেন্ড (2000 ms) পর সফলভাবে 'Data Fetched Successfully!' মেসেজ সহ 'resolve' হবে।
// প্রমিজটি তৈরি করার পর, '.then()' মেথড ব্যবহার করে সফল রেজাল্টটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data Fetched Successfully!');
    }, 2000);
});

myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Failure:", error);
    });

// Output: (২ সেকেন্ড পর) Success: Data Fetched Successfully!

