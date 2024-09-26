//Strict 


function add(a, a) {
  console.log(a + a);
}
add(10,20)


"//use strict";
function add_S(a, a) {
    console.log(a + a);
  }
add_S(10,2)
  
z = 1
console.log(z);


/*
Scope of the Variables:
*/

// {
//   let Z = 30;
//   console.log("Block scope", Z); //30
// }

/*
let
----------------------
const -> Block Scope

Global Scope
-------------------------
->var is used
 
 Loacal Scope /Function Scope
 -------------------------------
 1.Var
 2.let
 3.const
 */

const a = 20;
console.log(a);


var aa = 10;
console.log(aa);

let bb = 54
console.log(bb);

///////////////////////////////////////////////////////////////////////////////

var az = 20; //Global scope variable
console.log(az);
{
  let xz = 30; //Block scoped variable
  console.log(xz);
}

//////////////////////////////////////////////////////////////////////
function add() {
//Local scoped variable
    let b = 20;
    var c = 30
    const x = 20
  console.log(b);
}
add();


var q = 25
{
   var  w = 26
console.log("Block Varables:-",w)  
console.log("Global Variable:-",q)  
}
console.log("Block Varables with var",w)



/*
1. Use strict
=>The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
Why Strict Mode?
 =>Strict mode makes it easier to write "secure" JavaScript.
 =>Strict mode changes previously accepted "bad syntax" into real errors.
 =>As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.


2. Scope in javascript
Scope determines the accessibility (visibility) of variables.
    1. Global scope [variables outside function ex : var]
        =>we can access anywhere
    2. Block Scope [variables inside curly braces {} ex :let, const]
         =>we can access inside block only
    3. Functional scope or Local scope [variables inside function ex:var,let,const]
         =>we can access inside functions only


1. global variables can access anywhere 
    => we can access
    - global level,
    - block level,
    - local level

2. Block scoped variables can access only inside the block
    => we can't access (local - level),( global - level)

3. function or local scoped variables we can access only inside functions
    => we can't access (global-level ,block-level)
*/


