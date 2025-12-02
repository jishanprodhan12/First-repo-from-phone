// QN-005: অবজেক্ট ডি-স্ট্রাকচারিং এবং রেস্ট অপারেটর ব্যবহার।
const userProfile = {
    id: 101,
    firstName: 'jishan', 
    lastName: 'prodhan',
    email:'jishanprodhan132@gmail.com',
    role: 'Admin'
};

// ডি-স্ট্রাকচারিং ব্যবহার করে 'id' এবং 'firstName' আলাদা করা হলো,
// এবং রেস্ট অপারেটর (...) ব্যবহার করে বাকি সব প্রোপার্টি 'otherDetails' এ রাখা হলো।
const { id, firstName, ...otherDetails } = userProfile;

// পৃথক ভেরিয়েবল প্রিন্ট:
console.log("ID:", id); // 101
console.log("First Name:", firstName); // jishan

// রেস্ট অপারেটর দ্বারা সংগৃহীত অবজেক্ট প্রিন্ট:
console.log("Other Details:", otherDetails); 
/*
আউটপুট: 
{
  lastName: 'prodhan',
  email: 'jishanprodhan132@gmail.com',
  role: 'Admin'
}
*/
