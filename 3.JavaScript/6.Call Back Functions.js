// Closures in python
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


// call back function
 //A function is an argument of another function is called call back function
 function printName(name) {
   console.log(name); // hello from call back function
}

function callBackFun(printName) {
  printName("hello from call back function");
 }
callBackFun(printName);