// function myFunction(msg){
//     // parameter -> input
//     console.log(msg);
// }

// myFunction();


// function sum(x,y){
//    return x+y;
    
// }

// const arrowSum = (x,y) => {
//     return x+y;
// }

// let val = sum (3, 4);
// console.log(x);
// console.log("Functions");
// console.log(val);

// let calculator = {
//     add:function(a,b){
//         return a+b;
//     }
// };

// let result = calculator.add(5,7);
// console.log(result);



// const vowel = (msg) => {
//     let count = 0;
//     msg = msg.toLowerCase();
//     for (let ch of msg) {
//         if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// let str = "Education";
// console.log(vowel(str));  

// Functions
// function greet(name){
//     return `hello, ${name}`;
// }

// console.log(greet("Aisha"));


//Methods
// let person = {
//     firstName : "John",
//     lastName : "Doe",

//     getFullName:function(){
//         return `${this.firstName} ${this.lastName}`
//     },

//     greet:function(){
//         return `Hello, ${this.getFullName()}`;

//     }


// };

// console.log(person.getFullName());
// console.log(person.greet());

// For each
// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//     console.log(val);
// });


// let city = ["pune", "chennai", "mumbai"];

// city.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx, city);
// })

//higher order Function

// const message = greetPerson(greet, 'Alice');
// console.log(message);

// function greet(name){
//     return `hello, ${name}`;
// }


// function greetPerson(greetingFunction, name){
//     return greetingFunction;
// }

// function double(x){
//     return x*2;
// }

// function applyFunctionTwice(fn, value){
//     return fn(fn(value));
// }

// const result = applyFunctionTwice(double,5);
//     console.log(result);

// map 

// let nums = [67, 52, 33];

// let newarr2= nums.map((val) => {
//     console.log(val*val);
// });

// let newArr = nums.map((val) => {
//     return val;
// });
// console.log(newArr);

//filter

// let arr=[1, 2, 3, 4, 5, 6, 7];

// let evenArr= arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);


// reduce

let arr =[1, 2, 9, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return res+curr;
// } )

// console.log(output);

// using reduce find the largest number in the array.

const ouput = arr.reduce((max, curr) => {
    return curr > max ? curr: max;
})

console.log(output);