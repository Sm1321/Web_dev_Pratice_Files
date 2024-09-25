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
const add = function (a, b) {//we add varible front i.e the funcation name
const c = a + b;
return c;
console.log("function expression is called");
};
console.log(add(100, 200));

//Arrow Functions
const add_A = (az,cz) =>{
    console.log(az + cz)
    console.log("Arrow Function Call!!!!!!1")
};

add_A(-1,3);


console.log('---------------------------------------')
//Duplicate arguments :
// if we used the Duplicate Argunments
//so,this wil take the last Argument only
function Add_A(a, a) {
const c = a + a;
console.log("The Function with Duplicates Arguments are called!!!!!!!!")
 console.log(c);
 }
Add_A(10, 20);

console.log('---------------------------------------')

function Add_AA(a, a,a) {
    const c = a + a +a;
    console.log("The Function with Duplicates (3) Arguments are called!!!!!!!!")
     console.log(c);
     }
Add_AA(10, 20,1);


//With Arrow function , the duplicates Contect will not be allowed
/*
const ADDDD = (a, a) => {
  console.log(a + a);
 };
ADDDD (10, 20); //Duplicate parameter name not allowed in this context
*/


// 4. calling function with new constructor :

function new_add(a, b) {
  const c = a + b;
  console.log("\n\nNew Add Function")
  console.log(c);
  
}
new new_add(10, 20);


//Object
const obj = {
    firstName: "Mohan",
    lastname:"S",
}

console.log(obj.lastname)

////fucntion in obj_1
const obj_1 = {
    firstName: "Mohan",
    lastname:"S",
    regularFunction:function(){
        console.log(this.firstName)
    },
};

console.log(obj_1.lastname);
obj_1.regularFunction();


////fucntion in obj_2
const obj_2 = {
    firstName: "Mohan",
    lastname:"S",
    regularFunction:function(){
        console.log(this.firstName)
    },
    arrowFunction:()=>{
        //console.log(this.firstName) //this keyword is not there in arrow function 
        const firstName = "Ram"
        console.log(firstName)
    }
};

console.log(obj_2.lastname);
obj_2.regularFunction();
obj_2.arrowFunction();// undefined if we sue the this keyword
