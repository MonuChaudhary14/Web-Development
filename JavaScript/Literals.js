/*
JavaScript literals serve as syntactic representations for various types of data like objects, string, boolean, array, and more.

But when we talk about the most important JavaScript literals we have the following list:

String literals
Template literals
Object literals
Array literals
*/

// String Literals
let myName = "Mayank Pandey!";
let message = 'JavaScript is a scripting language.';
let fullname = new String("Monu Chaudhary");
console.log(typeof(message));
console.log(typeof(fullname));

console.log(myName.length);
console.log();

let len = message.length;

console.log(len);


console.log(myName.toUpperCase());

let str = "HelloWorld";

console.log(str.substring(2));
console.log(str.substring(2, 8));

let sentence = "Hello I am Monu Chaudhary";
let words = sentence.split(' ');  // This will seperate the sentence on the basis of ' '
console.log(words);


let para = "hello i am \"monu chaudhary\"";
console.log(para);

console.log(words.join(','));


console.log();
// Template Literals -> They are enclosed within backticks (``) instead of the single('') or double("") quotation marks. 

// Template literals support multi-line strings and allow for easy interpolation of variables and expressions.

console.log(`My name is ${myName} and we know that ${message}`);

let firstline = "This is the first line";
let secondline = "This is the second line";

console.log(`${firstline} ,
     and ${secondline}`);


// Object Literals-> Object literals in JavaScript are a way to define and create objects directly within the code, without the need for a constructor function.
// They consist of key-value pairs enclosed within curly braces {}.

let person = {  // In this we define a object with its properties as name,age, islearning 
    name: "monu" , age: 19 , islearning: true
}

// It is worth noting that while dealing with objects in JavaScript, we don't use a semicolon ';' inside the object literal '{}'. Instead, we use a comma ',' after every key-value pair.


// Array Literals
/*
Array literals in JavaScript provide a convenient way to create arrays with initial values. They are defined using square brackets [] and can contain any number of elements separated by commas.
*/

let colors = ["blue", "orange","red","yellow", 5 , 10, true , "array" , "inside this" ];

