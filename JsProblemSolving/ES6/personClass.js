// QN-019: ক্লাস প্রোপার্টি এবং প্রোটোটাইপাল মেথড।
// 1. 'Person' নামে একটি ক্লাস তৈরি করুন, যার constructor-এ 'firstName' এবং 'lastName' এই দুটি প্রোপার্টি সেট করুন।
// 2. 'Person' ক্লাসের ভেতরে 'getFullName' নামে একটি মেথড তৈরি করুন, যা পুরো নাম (firstName + lastName) রিটার্ন করবে।
// 3. 'person1' নামে ক্লাসটির একটি ইনস্ট্যান্স তৈরি করুন, যার নাম দিন 'Rahim' এবং 'Khan'।
// 4. 'person1' ইনস্ট্যান্সের 'getFullName' মেথডটি কল করে কনসোলে পুরো নাম প্রিন্ট করার জন্য প্রয়োজনীয় কোড লিখুন।


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = new Person('Rahim', 'Khan');

const fullName = person1.getFullName();
console.log(fullName);
