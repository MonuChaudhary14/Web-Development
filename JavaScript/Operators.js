/*
Operators->


Types->
1.Arithmetic
2.Assignment
3.Comparison
4.Logical
5.Bitwise
6.Ternary

*/

//  We can directly use 15+5 in the console window of the browser because console.log is already there

console.log(2**4);   /* This wroks as a power function    Arithmetic Operator*/  


/* Strict equality -> '==='  When we use strict equality operator, both the data-type and the value are checked to determine equality , and it returns a boolean answer

!== -> Strict 


Loose equality-> "==" This only checks the value 

!= -> Loose
*/



let x = "10";
let y = 10;

console.log(x === y);
console.log(x==y);

let fullname = 'monu chaudhary';
console.log(fullname);

/*In the browser environment, name is a global property of the window object that refers to the name of the current window or frame:

js
Copy
Edit
console.log(window.name); // usually an empty string unless explicitly set
So when you write:


let name = "John";
You're shadowing the global window.name property. Many linters or browser dev tools (like Chrome DevTools or VS Code) will show a warning like:

"'name' is a deprecated alias" or "Avoid using 'name' as a variable — it's a global property".*/

// Concatination of 2 strings

let firstname = "monu";
let secondname = "chaudhary";
console.log(firstname+" "+secondname);


// Falsy values-> undefined , null , 0 , false, '' , NaN

// Truthy -> Anthing that is not false

 
console.log(false || 5); 
// This will print 5 because 5 is the truthy 

console.log(false || 3 || 1); // The output is 3 because of short circuit