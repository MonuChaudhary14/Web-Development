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

let name = 'monu chaudhary';
console.log(name);

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



