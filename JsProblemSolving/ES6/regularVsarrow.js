// QN-017: this কি-ওয়ার্ড এবং অ্যারো ফাংশনের পার্থক্য।
// 'user' নামে একটি অবজেক্ট তৈরি করুন, যার দুটি প্রোপার্টি থাকবে:
// 1. 'name': যার মান 'Jishan'
// 2. 'regularGreeting': একটি নিয়মিত ফাংশন (regular function) হিসেবে তৈরি করুন যা কনসোলে "Hello, my name is Rony" প্রিন্ট করবে। (ভেতরে 'this.name' ব্যবহার করতে হবে)
// 3. 'arrowGreeting': একটি অ্যারো ফাংশন (arrow function) হিসেবে তৈরি করুন যা কনসোলে "Hello, my name is Rony" প্রিন্ট করবে। (ভেতরে 'this.name' ব্যবহার করতে হবে)

// 4. অবজেক্টের বাইরে থেকে দুটি মেথডই কল করুন।
// Note: অ্যারো ফাংশনে 'this' কীভাবে আচরণ করে, তা দেখানোটাই এই প্রশ্নের উদ্দেশ্য।


const user = {
name : 'Jishan' , 
age : 22 ,
regularGreeting: function (){
console.log(`Regular greeting : Hello , my name is ${this.name}` )
},
arrowGreeting: ()=>{
    console.log(`arrow greeting : Hello , my name is ${this.name}` )
}
} 
user.regularGreeting();
user.arrowGreeting();
