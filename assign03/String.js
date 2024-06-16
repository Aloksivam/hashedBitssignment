// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];
console.log(statesInIndia.filter(name=>!/^[aeiou]/i.test(name)))
let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.
console.log(str.split(' ').slice().reverse().join(' '))


// Q3) 
let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
string = string.split("")
string.splice(3,0,'ONES')
console.log(string.join(''))


// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

// const myString = "Lorem ipsum dolor sit amet";
const myString = "Hello World";
String=myString.split(' ').join('')
let vowel=0;
let constants=0;
for( i of String){
    if(/[aeiou]/i.test(i)){
        vowel++;
    }
    else{
        constants++;
    }
}
console.log(`vowels are ${vowel} and nr of contants are ${constants}`)

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.



// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.



// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.



// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.



// Q9) Write a function to count the number of words in a paragraph.



// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH



// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

