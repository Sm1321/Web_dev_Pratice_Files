
//

var a =10 // global scope (var keyword is used)
{   
    let b  = 20
    console.log(a)
    console.log("Block Scope",b)
}

//console.log("global",b)
function add(){
    console.log(a)
}

add()//call the function

/*
JavaScript variables have 3 types of scope:

Block scope
Function scope
Global scope
*/

console.log("global Scope",a)



// -----------------------------------------------------------------------------
/* TemporalDeadZone :
1.The time period between the variable is initialized and untill some value is
assigned to the variable those variables are in temporal deadzone.
2.The variables let and const before its initialized.
3.we will get errors bcz those variables are in temporal deadzone.
*/



/*
// Reference error :
1.If we try to access the variables which are in temporal deadzone.
 - we will get reference error.
2.example for reference error.
Ex:-
   console.log(a); // here we will get reference error
   let a = 20;
   console.log(b);
   const b = 20;
*/


console.log(z) //hoisting will work for the var only
var z = 100;   // hoisting will worl for the regular functions

// let and const , and arrpw functions hoisting will not work











////




