// QN-013: প্রমিজ (Promise) রিজেক্ট এবং .catch ব্যবহার।
// একটি প্রমিজ তৈরি করুন যার নাম হবে 'failedPromise'।
// এই প্রমিজটি ১ সেকেন্ড (1000 ms) পর ব্যর্থ হবে এবং 'Error: User Not Authenticated' মেসেজ সহ 'reject' হবে।
// প্রমিজটি তৈরি করার পর, '.catch()' মেথড ব্যবহার করে ব্যর্থতার মেসেজটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।


// QN-013: প্রমিজ (Promise) রিজেক্ট এবং .catch ব্যবহার।

const failedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false; // এখানে success এর মান false থাকায় reject হবে

        if (success) {
            resolve("User is authenticated");
        } else {
            reject("Error: User Not Authenticated!");
        }
    }, 1000);
});

failedPromise
    .then(result => console.log(result))  // সফল হলে এখানে আসবে
    .catch(err => console.error("Failure Handled:", err));

