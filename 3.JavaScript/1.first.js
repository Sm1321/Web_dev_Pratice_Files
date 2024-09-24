var myValue = 10;  //camel case

const k = 10;// we should intialize the varaible if we use the const
const name = "Mohan";
const NAME = "Mohan";

console.log("The value is:- ",k)
console.log("The name is",name);


var a = 20;
var b = "20";
console.log(a == b);// the outputis True
console.log("Useing the ===",a===b)  // return fasle

var c = 20;
var d = 20;
console.log(c == d);//return true

// Operators
var a1 = 10;
var b1 = 20;
console.log("a1++",a1++)
console.log("++b1",++b1)


/** @format */
// var a = 20;
// var b = "20";
// console.log(a == b); //true
// console.log(a === b); //false
// // Operators
// var c = 10;
// var d = 20;

// console.log(c ** d);
var a = 10;
var b = 20;
// var c = 30;
// console.log("!st", a);
// console.log((a += b)); // means a =  a + b
// console.log("b", b);
// console.log("second value", a);
// console.log(a <= b);
// 
// const c = 10 > 20 ? "A is greater" : "B is greater";
// console.log(c); b is greater


// Data types
var a11 = 10;
console.log("a", typeof a11);

console.log('-------------------------------------------------------');

//
var b11 = 12345678976865867867353453;
console.log("b11", typeof b11);
console.log('-------------------------------------------------------');


//
var name1 = "Mohan";
console.log("name", typeof name1);
console.log('-------------------------------------------------------');



//
var status = true;
console.log("status", typeof status);
console.log('-------------------------------------------------------');

//
var c11;
console.log("c", typeof c11);

console.log('-------------------------------------------------------');

//
var d11 = null;
console.log("d", typeof d11);



console.log('-------------------------------------------------------');



// Array
var items = ["a", 123, true];
console.log("items", typeof items);
console.log("Items in Array:-",items)

console.log('-------------------------------------------------------');


// Object
var details = {
  name: "xyz",
  age: 28,
};

console.log("details", typeof details);

console.log('-------------------------------------------------------');

// Ternary Operator
const c111 = a > b ? "A is greater:":"B is greater";
console.log(c111);


console.log('-------------------------------------------------------');
//const z = condition ? "True block": "False block"
const v = 10 > 20 ? "A is greater" : "B is greater";
console.log(v); //b is greater