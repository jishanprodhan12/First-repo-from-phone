// QN-003: DOM এলিমেন্ট নির্বাচন এবং কনটেন্ট পরিবর্তন।
// HTML এ একটি <h1> ট্যাগ আছে যার id হলো "main-heading"।
// জাভাস্ক্রিপ্ট ব্যবহার করে এই <h1> ট্যাগটিকে নির্বাচন করার জন্য সবচেয়ে আধুনিক এবং রেকমেন্ডেড মেথডটি ব্যবহার করুন।
// এরপর, সেই হেডিং-এর টেক্সট কনটেন্ট "Welcome to JavaScript World" এ পরিবর্তন করার জন্য প্রয়োজনীয় কোড লিখুন।

// QN-003: DOM এলিমেন্ট নির্বাচন এবং কনটেন্ট পরিবর্তন।
// <h1> ট্যাগ যার id হলো "main-heading"
const headingElement = document.getElementById('main-heading');

// innerText ব্যবহার করে হেডিং-এর টেক্সট কনটেন্ট পরিবর্তন করা হলো।
headingElement.innerText = "Welcome to JavaScript World";

// Note: querySelector ব্যবহার করে আরও আধুনিক পদ্ধতি:
// const headingElement = document.querySelector('#main-heading');
// headingElement.textContent = "Welcome to JavaScript World";
