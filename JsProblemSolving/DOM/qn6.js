// QN-006: ইভেন্ট লিসেনার (Event Listener) যোগ করা।
// HTML এ একটি বাটন আছে যার id হলো "click-me-button"।
// এই বাটনে ক্লিক করলে যেন কনসোলে "Button Clicked!" মেসেজটি দেখায়, তার জন্য প্রয়োজনীয় জাভাস্ক্রিপ্ট কোড লিখুন।
// ইভেন্ট লিসেনার যোগ করার জন্য 'addEventListener' মেথডটি ব্যবহার করুন।

// QN-006
const clickButton = document.getElementById('click-me-button');

clickButton.addEventListener('click', () => {
    console.log("Button Clicked!");
});
