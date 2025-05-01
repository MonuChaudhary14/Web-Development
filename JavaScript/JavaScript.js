// This is used for output
console.log("Hello i am Monu Chaudhary");

function solve(){
    var age = 25;   /*We can redecalre the variable with same name it can causes debugging issues*/
    console.log(age);

    var age = "Monu";
    console.log(age);
    console.age(a);

}


/*
3 ways to create a variable which are

1.Using var keyword-> Now this is not used. It is function-scoped or globally scoped but not block-scoped

2.Using let keyword -> This is used to create block scoped variable

3.Usging cons keyword-> This is used to create a constant variable

*/

var age = 19; 
// We can use this anywhere inside the code  -> Globally available

if(true){
    console.log(age);
}

solve();

{
    let a = 45;
console.log(a);
}
// console.log(a);

// Re delcaration is not possible

// let a = 78;

a = "Chaudhary";


const b = 54;
console.log(b);

// b = 86;      This is not possible
// console.log(b);     




/* Rules for naming identifiers or variables 

 Rules (Enforced by the Language):
Can contain letters, digits, underscores (_), and dollar signs ($)

Examples: myVar, _value, $data, var123

Must begin with a letter, underscore, or dollar sign

Valid: name, _private, $element

Invalid: 123name (starts with a digit)

Cannot be a reserved keyword

Invalid examples: let, class, return, function, etc.

Case-sensitive

myVar and myvar are different variables.

✅ Best Practices (Recommended):
Use meaningful names

Good: userAge, totalPrice

Bad: x, temp (unless for very short-lived use)

Use camelCase for variables and functions

Example: userName, calculateSum

Avoid starting with _ unless indicating private/internal use

Example: _internalCounter

Avoid using global variables when possible

Helps prevent naming collisions and bugs.


*/