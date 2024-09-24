
// Logical operators and(&&) ,or(||) ,not(!)
const a = 10;
const b = 20;
const c = 10;
const output = (a<b)&&(a==c) //true
console.log("output", output);
// && -> both should be True


const output1 = (a>b)||(a==c) //true
console.log("output", output1);
// || -> Atlest one should be true

const output2 = !(a != c); //true
console.log("output", output2);
// !-> not operator


//Bitwise operators
const x = 5;
const y = 3;
console.log(5 & 2);
console.log(5 | 2);
console.log(5 ^ 2);
console.log(~2);
console.log(5 << 2);
console.log(5 >> 2);


// Multi-line string
const str = `hello
how are you
hi`
console.log(str)

console.log('\n\n\n')

// If,else,else if -Conditions
const a1 = 10;
const b1 = 20;
const c1 = 30;

if (a1 > c1) {
  console.log("c1 is greater");
} else if (a1 == b1) {
  console.log("B1 is greater");
} else {
  console.log("A1 is greater");
}
