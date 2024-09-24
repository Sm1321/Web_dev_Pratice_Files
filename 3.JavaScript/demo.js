var a = 10;
console.log("intial",a);


a = 30;
console.log("second",a);




/*
var can be create the multiple variables name


*/
var a = 50;
var a = 40;

console.log(a);


/*let -> it will get erro if we use the same variable name */
let b;
console.log("intialization",b);

b = 20;
b = 50;
console.log("end",b);

/*
Drawbacks of var and let:
You mentioned drawbacks:
var can cause issues because of re-declaration and function scoping, 
     leading to unexpected behavior in certain contexts.
let solves some of these issues by using block scope,
     but it can still be reassigned, which might not always be ideal when you want a value to remain constant (which is why const exists).
*/

//if you decalre the Const,definntely you should declare 
const c = 1;
console.log(c)




/*
Key Points:
var:-
---->allows re-declaration and is function-scoped.
let:-
---->does not allow re-declaration in the same scope and is block-scoped.
const:-
----> must be initialized at the time of declaration and cannot be reassigned.
*/