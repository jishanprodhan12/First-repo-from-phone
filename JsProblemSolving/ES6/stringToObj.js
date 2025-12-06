// QN-027: সেমিকোলন-সেপারেটেড স্ট্রিং থেকে অবজেক্ট তৈরি।
// 'dataString' নামে একটি স্ট্রিং আছে যেখানে কী (key) এবং ভ্যালু (value) জুটি সেমিকোলন (;) দিয়ে আলাদা করা।
//const dataString = "name:Rumi;age:30;city:Dhaka;occupation:Developer";

// 1. একটি ফাংশন তৈরি করুন যার নাম হবে 'stringToObject'।
// 2. ফাংশনটি 'dataString' নেবে।
// 3. প্রথমে স্ট্রিংটিকে সেমিকোলন (;) দিয়ে ভাগ করে একটি অ্যারে তৈরি করুন।
// 4. এরপর সেই অ্যারেটিকে 'reduce()' মেথড ব্যবহার করে একটি জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করুন।
//    (প্রতিটি আইটেম আবার কোলন (:) দিয়ে ভাগ করে key এবং value বের করতে হবে।)
// 5. ফলাফল অবজেক্টটি কনসোলে প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।
//    প্রত্যাশিত আউটপুট: { name: 'Rumi', age: '30', city: 'Dhaka', occupation: 'Developer' }


const dataString = "name:Rumi;age:30;city:Dhaka;occupation:Developer";

function stringToObject(str) {
    return str.split(";").reduce((obj, item) => {
        const [key, value] = item.split(":");
        obj[key] = value;
        return obj;
    }, {});
}

const result = stringToObject(dataString);

console.log(result);
// আউটপুট: { name: 'Rumi', age: '30', city: 'Dhaka', occupation: 'Developer' }
