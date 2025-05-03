/*
Function hoisting is a behavior in JavaScript where function declarations are moved ("hoisted") to the top of their containing scope during the compilation phase, before the code is executed. This means you can call the function before it's defined in the source code.


Like regular function expressions, arrow functions are not hoisted with their definition.

sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};

Only the variable sayHi is hoisted (as undefined), not the function itself. So trying to invoke it before assignment results in an error.


Only for var keyword->
In case of variable only the variable is shifted not his value, so if we invoke the variable before inititlisation it will give undefined 



Class Level Hoisting is also not possible means first we have to declare the classm, then we can use this

*/


console.log(age);
var age = 45;


console.log(num);
let num = 78;

console.log(num1);
const num1 = 78;




