// // what is function statement?

// function greet(){
//     console.log("Hello");
// }
// greet(); // invoking

// // Functions are first class : we can recieve a function as a parameter

// function logGreeting(fn){
//     fn();
// }

// logGreeting(greet);


// // Function expression : we can assign a whole new function inside a function
// const fn = function(){
//     console.log("function expression")
// }

// fn();

// // function expression on the fly
//  logGreeting(function(){

// });

// const greet = require("./greet.js")  // common js
// greet.greet(10, 30);
// console.log(greet.sub(10,20));

//ES Module
// import add from './math.js';  // import for export default
// import {add, subtract} from './math.js' // import named export

// console.log(add(5,7));
// console.log(subtract(5,2));

const fs = require('fs');

//write data into a file

// fs.writeFile('abc.txt', "hello! We are learning FS module", (err) => {
//     if(err){
//         console.error("Error while writing file",err)
//     }else{
//         console.log("File written successfully");
//     }
// });


// read the file content

fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if(err){
        console.error("Error while reading file",err)
    }else{
        console.log("data: ", data);
    }
});

// append data to a file

// fs.appendFile('abc.txt', " \n This line was added", (err) => {
//      if(err){
//         console.error("Error while appending file",err)
//     }else{
//         console.log(" new content added");
//     }
// })

// // delete a file 
// fs.unlink('abc.txt', (err) => {

// })