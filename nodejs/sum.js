
function sum(a,b){
    return a+b;
}

console.log(sum(10,20));

function greetingSum(text, a, b, sum){
    const result = sum(a,b);
    console.log(text, result);
}

greetingSum("hello i am greeting with sum", 10, 20, sum)