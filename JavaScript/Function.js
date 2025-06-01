/* Functions in JavaScript are first-class citizens because they can be used in all the ways that values (like numbers or objects) can be used.


1. Assigned to variables
2. Passed as arguments to other functions
3. Returned from other functions
4. Stored in data structures

*/


// Hoisting -> The process of moving function declaration only(not function assignment) to the top of the file means all the function declaration will be hoisted to top


function greetme(greet, fullname) {
    console.log("Hello", fullname);
    greet();
}

function greet() {
    console.log("Greeting for the day");
}

function solvenums(num) {
    return num * num;
}


function printnum(num) {
    return solvenums(num);
}

console.log(solvenums(5));

function printcounting(val) {

    for (let i = 1; i <= val; i++) {
        console.log(i);
    }

}

function getsum(num1, num2) {
    return num1 + num2;
}

// sol();   We cannot call a function like this

// Named function assignment
let sol = function ques(){
    console.log('Solving');
}

sol();
// ques(); This is not possible

let solved = sol;

solved(); // This function is samea as sol because it's reference is copied


const arr = [
    function (a, b) {
        return a + b;
    },

    function (a, b) {
        return a - b;
    },

    function (a, b) { 
    return a * b; 
    }
]

let first = arr[0];
let ans = first(10, 5);
console.log(ans);

printcounting(10);

let obj = {
    age : 25  , 
    wt : 60, 
    greet: () => {
        console.log("HELLO");
    }
}


printnum("monu");

let x = getsum(3, 5);

console.log(x);

// Anonymous Function assignment
let solve = function (a, b) {
    return a * b;
}

console.log(solve(2, 4));

let exp = (x, y) => x ** y;   /* This is used only when there is only a single line of code in function */

console.log(exp(3, 4));

sayhello = () => {   /* When we have multiple lines then we have to use the {} */
    return "Hello";
}

console.log(sayhello());



function func1(value1 , value2){
    return value1 + value2;
}

console.log(func1(4));  // In this case when we provide only one value then it will consider other number as undefined and when we add undefined we get not a number

console.log(func1()); // This will also give Not a Number

console.log(func1(1, 2, 3, 5));

function argu(val1 , val2){
    console.log(arguments);  // This will return an object which will show arguments
    return val1 + val2;
}
argu(3, 4);  
argu(2, 3, 4, 2,1); // In this all the arguments are shown in the object



// If we want to print all the elements which we give it to the function even if it exceed the value then we can use loop

function arg(a, b){
    let total = 0;
    for (let value of arguments){  // In this we are iterating in the whole objects of arguments and adding them 
        total = total + value;
    }
    return total;
}

console.log(arg(1, 2, 4, 2, 4));



// Rest Operator

function a(...args){   //  This will return an array of args 
    console.log(args);
}

a(5,78,1,32,1,6);

function b(num , ...args /* Rest Parameter must be last parameter */){
    console.log(args);
}


// Default Parameters

function interest(p, r = 7, y = 5){
    return p*r*y/100;
}

console.log(interest(1, undefined , undefined));
console.log(interest(1, undefined , 9));


let person = {

    fname : 'Monu' , 
    lname : 'Chaudhary' ,

    get fullname(){
        return `${person.fname} ${person.lname}`;
    },

    set fullname(value){
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }

};

person.fullname = 'Ketan Chaudhary';
// person.fullname('Prachi Chaudhary'); Not Working Why?

console.log(person.fullname);









