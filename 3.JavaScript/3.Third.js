// Functions in javascript


/*
Function in JavaScripts
1.Function Defination.
2.Function Experssion.
3.Arrow Function.
*/


//Addition of two numbers without function :
const aa = 10;
const ba = 20;
console.log(aa + ba);
const da = 23;
const ea = 34;
console.log(da + ea);


console.log("\n\nThe function Topic Strt:-\n\n")
//Write a function to add the two numbers

function Add_two_numbers(aa,ab){
    console.log(aa + ab);
    return aa + ab //return the sum 
}

//Call the funcation
console.log("The sum is:-");
Add_two_numbers(1,2);
Add_two_numbers(23, 34);
Add_two_numbers(2, 4);

//
console.log('\n');


// Function Expression :
const add = function (a, b) {
const c = a + b;
return c;
console.log("function expression is called");
};
console.log(add(10, 20));

//
