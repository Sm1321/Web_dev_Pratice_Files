// Closures in python
/*
The Outer Function Varaiables having the Acces to the inner Function,
The outer function varaiables are in the lexical environment.
*/
function outsideFunction(){

    // lexical environment
    var a = "JavaScript"
    console.log("I am in the Outer Function.")
    function innerFunction(){
        var  a = "Js" // if avilabel it will take this
        console.log("I a in Inner Function,res:-",a)
    }
    innerFunction();//call the inner function
}
outsideFunction();// call the outside function

/*
A closure is the combination,
of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
*/
console.log('---------------------------------------------------------')


// call back function
 //A function is an Argument of Another Function is Called as call back function
 function printName(name) {
   console.log(name); // hello from call back function
}

function callBackFun(printName) {
  printName("hello from call back function");
 }
callBackFun(printName);


/*
Error handling
 ------------------------------------------------------------------------
// try,catch,finally,throw
Syntax :
--------
  try {
  //this block will execute by default
 } catch (e) {

 //if we get any errors in try block then this catch block will execute
 } finally {
 //this block will be execute with or without errors by default
 }
 throw new Error("custom error"); // If we want  to display custom
 errors then throw block will be execute
*/

console.log('---------------------------------------------------------')
try {
  console.log(z)
}catch(e){
  console.log("Catach BLock,the ele is not there")
} finally{ //by default it will execute the ,if excpetion is there are not
  console.log("This is Finally Block")
}

console.log('---------------------------------------------------------')


// example :
try {
   let a = 200;
   console.log("try block :", a);
 } catch (e) {
   console.log("catch block :", e);
 } finally {
   console.log("this block will be execute with or without errors by default !");
 }
 throw new Error("this is my custom error");

 console.log('---------------------------------------------------------')


