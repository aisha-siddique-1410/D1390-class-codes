// console.log("one");
// console.log("two");

// function hello(){
//     console.log("hello API")
// }
// setTimeout(hello, 4000);
// console.log("three");
// console.log("four");


// function getData(dataId, getNextData){
//    setTimeout(() => {
//      console.log("data", dataId);
//      if(getNextData){
//         getNextData();

//      }
//    }, 3000);
// }




// let promise = new Promise((resolve, reject) => {
//     console.log("I am a JavaScript Promise");
//     // resolve(123);
//     reject("some error");
// });

function getData(dataId, getNextData){

  return new Promise((resolve, reject) =>{
    setTimeout(() => {
     console.log("data", dataId);
     resolve("success");
     if(getNextData){
        getNextData();

     }
   }, 3000);

  })
   }


//    const getPromise = () => {
//     return new Promise((resolve, reject) => {
//     console.log("I am a JavaScript Promise");
//     resolve(123);
//     //reject("some error");
// });
//    }


//    let promise = getPromise();
//    promise.then(() => {
//     console.log("Promise fullfilled");
//    });

//    promise.catch(() => {
//     console.log("rejected");
//    });

// function asyncFunction(){
//     return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//      console.log("some data");
//      resolve("success");
    
//    }, 3000);
//     });
// };


// //callback hell
// getData(1, () => {
//     console.log("getting data2.....");
//     getData(2, ()=> {
//         console.log("getting data3.....");
//         getData(3, ()=> {
//             console.log("getting data4.....");
//             getData(4);
//         });
//     });
// });

// // promise chain

// getData(1).then((res) => {
//     console.log("fetching data2.....");
//     return getData(2);
// })
// .then((res) => {
//     console.log("fetching data3....");
//     return getData(3);
// })
// .then((res) => {
//     console.log("fetching data4...")
//     return getData(4);
// })
// .then((res) => {
//     console.log(res);
// })

// async-await
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

//Promise chain
// console.log("fetching data1......");
// asyncFunction().then((res) => {
    
// console.log("fetching data2......");
// asyncFunction().then((res) => {
    
// console.log("fetching data3......");
// asyncFunction().then((res) => {
    
// })
// })
// });


