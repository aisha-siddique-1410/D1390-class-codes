// const student = {
//     fullName : "Aisha Siddique",
//     marks : "95.3",

//     printMarks:function(){
//         console.log("marks : ", this.marks);
//     }


// }

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};

const shyam = {
    salary: 50000,
};
const shyam2 = {
    salary: 50000,
};
const shyam3 = {
    salary: 50000,
};
const shyam4 = {
    salary: 50000,
};

shyam.__proto__ = employee;
shyam2.__proto__ = employee;
