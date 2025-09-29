function greet(a, b){
    console.log("hello", a+b)
}

function sub(a, b){
    const res = a>b? a-b: b-a
    return res;
}

module.exports = {
    greet,
    sub
}
 