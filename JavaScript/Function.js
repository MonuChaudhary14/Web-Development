/* Functions in JavaScript are first-class citizens because they can be used in all the ways that values (like numbers or objects) can be used.


1. Assigned to variables
2. Passed as arguments to other functions
3. Returned from other functions
4. Stored in data structures


*/


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

