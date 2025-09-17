// let marks = [97, 85, 75, 64, 38];
// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }

let fruit = ["Banana", "Mango", "Apple","watermelon", "Litchi"];
// let fruits2 = ["Litchi", "watermelon"];
// let num = [10, 20, 30, 40]
// console.log(fruits);
// fruits.push("watermelon", "Litchi"); // adds at end
// console.log(fruits);
// fruits.pop();  // deletes from end
// console.log(fruits);
// console.log(fruits.toString());  // converts to string

// let newfruits = fruits.concat(fruits2).concat(num);
// console.log(newfruits);  // join multipl arrays


// fruits.unshift("watermelon", "Litchi");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// let fruits = ["Banana", "Mango", "Apple","watermelon", "Litchi"];
// console.log(fruits.slice(1,4));  //last index value is not included

let arr=[1, 2, 3, 4, 5, 6, 7];
// arr.splice(2,2,101,102);


//add element
arr.splice(2,0,101);
console.log(arr);

// delete element
arr.splice(3,2);
console.log(arr);