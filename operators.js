// operators : are symbols used to perform some operation on data
// Arithmetic operators : mathematical operation (+ - * / % **)
// let a= 5;
// let b= 4;

// console.log(a+b);

// unary operator 
// increment(++) and decrement(--)

// let a = 10;
// // console.log(a++);  // 10 // post- increment
// // console.log(a); // 11

// // console.log(++a);  //11 // pre-increment

// console.log(a++);  //10  
// console.log(++a);  //12
// console.log(a);    //12
// console.log(--a);  //11
// console.log(--a);  //10
// console.log(a);   //10

// Assignment operator : it is used to assign values 

// let a = 10;

// a+=4;  // a=a+4

// Comparison opeartos : used to compare values 
// < > <= >= == != ===

// let a = 10;
// let b = "10";

// console.log(a==b);  // equal to
// console.log(a===b); // strcit type comparison

// logical opeartors : && || !

// let a = 6;
// let b = 5;

// console.log(a>b || a==10); 

// //ternary operator
// console.log(a>b?"a is larger":"b is larger");


// conditional statement : to implement some condition in the code


// if statement

// let age = 15;

// if(age>18){
//     console.log("you can vote");
// }

//if-else statement

// let age = 15;

// if(age>18){
//     console.log("you can vote");
// } else {
//     console.log("You cannot vote")
// }


// else-if

// let age = 15;

// if(age<18){
//     console.log("junior");
// } else if( age >60) {
//     console.log("senior")
// } else {
//     console.log("middle aged")
// }

// serach about switch and nested if else yourself
// Q: Get user to input a number using prompt("Enter a number").Check if the number is odd or even.

// alert("hello"); // one time popup

// prompt("Hello");  // can take input as well

// let num = prompt("Enter a number");

// if ( num%2 == 0){
//     console.log(num, " is even number");
// } else {
//     console.log(num, "is odd number");
// }

// Q: Take a score from user and display grade according to the score
/* 90-100 : A   
   70-89  : B
   60-69  : C
   50-59  : D
   0-49   : F */


//    console.log("5" - 2);
//    console.log(false-true);

// Loops : used to execute a piece of code for specified number of times

// For
// for (let i=1; i<=10; i++){
//     console.log("hello world")
// }

// while 

// let i=1;
// while(i<=10){  // 1<=10
//     console.log("hello world");
//     i++;
// }


// do while
// let i=20;
// do{ 
//     console.log("hello world");
//     i++;  // 21
// }while(i<=10);  // 21<=10 // false


// For of loop : used to iterate over the values of iterable(arrays, strings, maps)
//  let str = "HelloWorld";

//  for(let i of str){
//     console.log(i);
//  }

// const fruits = ["apple", "banana", "mango", "orange"];
// for(let i=0; i<4; i++){
//     console.log(i);
// }

// for(let i of fruits){
//     console.log(i);
// }

// For in : used to iterate over the keys(properties) of an object

// const student = {
//     name : "Aisha",
//     age : 26,
//     course : "WDR"
// };

// for (let key in student){
//     console.log(key, ":", student[key]);
// }

// Q. Create a lucky number random game. Ask the user to keep on guessing the game number until user enters correct value

let luckynum = 7;
let userNum = prompt("Guess the lucky number : ");

while(userNum != luckynum){ 
    userNum = prompt("You entered wrong number, Guess again: ")
}
alert("Congratualtions!! you won");

