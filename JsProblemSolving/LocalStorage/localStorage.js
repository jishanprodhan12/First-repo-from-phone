// QN-015: localStorage ব্যবহার করে অবজেক্ট সংরক্ষণ ও পুনরুদ্ধার।
// 1. 'userSettings' নামে একটি জাভাস্ক্রিপ্ট অবজেক্ট তৈরি করুন: 
//    { theme: 'dark', notifications: true }
// 2. এই অবজেক্টটিকে স্ট্রিং আকারে (JSON.stringify ব্যবহার করে) 'settings' কি (key) তে localStorage এ সংরক্ষণ করুন।
// 3. এরপর, localStorage থেকে 'settings' কি এর মানটি পুনরুদ্ধার করুন (JSON.parse ব্যবহার করে) এবং সেটিকে 'loadedSettings' নামে একটি ভেরিয়েবলে রাখুন।
// 4. 'loadedSettings' অবজেক্টের 'theme' প্রোপার্টি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।


const userSettings = { 
    theme: 'dark',
    notifications: true
};

const userSettingsStr = JSON.stringify(userSettings);
localStorage.setItem('settings', userSettingsStr);

const loadedSettingsStr = localStorage.getItem('settings');
const loadedSettings = JSON.parse(loadedSettingsStr);

console.log(loadedSettings.theme);
