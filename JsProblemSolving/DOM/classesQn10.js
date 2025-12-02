// QN-010: ক্লাসেস এবং ইনহেরিটেন্স ব্যবহার।
// 1. 'Animal' নামে একটি ক্লাস তৈরি করুন, যার একটি constructor থাকবে যা 'name' প্যারামিটার নেবে এবং সেই প্যারামিটারকে একটি প্রোপার্টি হিসেবে সেট করবে।
// 2. 'Animal' ক্লাসের মধ্যে 'makeSound' নামে একটি মেথড তৈরি করুন যা কনসোলে "Animal makes a sound." প্রিন্ট করবে।
// 3. 'Dog' নামে আরেকটি ক্লাস তৈরি করুন যা 'Animal' ক্লাসকে 'extend' (উত্তরাধিকার) করবে।
// 4. 'Dog' ক্লাসের মধ্যে 'makeSound' মেথডটিকে ওভাররাইড (Override) করুন, যা কনসোলে "Woof! Woof!" প্রিন্ট করবে।
// 5. 'Dog' ক্লাসের একটি অবজেক্ট তৈরি করুন যার নাম হবে 'myDog' (যেমন: 'Buddy'), এবং তার 'makeSound' মেথডটি কল করুন।


class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`${this.name} says Woof! Woof!.`);
    }
}

const myDog = new Dog('Buddy');
myDog.makeSound();
// Output: Buddy says Woof! Woof!.
