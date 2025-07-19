// Methods of String

// Ways to make a String

let string1 = 'Monu';  // This is a string (primitive)
let string2 = 'Chaudhary';

let string3 = new String('Jaat'); // This is a Object

// When we use '.' with primitive string, then javascript will treat it as Object

// Length
console.log(string1.length);

// Searching

console.log(string2.indexOf('a'));

console.log(string3.lastIndexOf('a'));

if(string3.includes("aa")){
    console.log('This is present in string');
}

if(string2.startsWith('Ch')){
    console.log('This is present in string');
}

if(string1.endsWith('nu')){
    console.log("ends");
}



// Modifying String

'hello'.replace('l', 'r');


// Add more Objects

string1.includes("Mo");
string1.startsWith("Mo");
string1.endsWith("Mo");
string1.toLowerCase("Mo");
string1.toUpperCase("Mo");
string1.trim();
string1.replace("Mo" , "Ao");


let string4 = "This will be split";

let words = string4.split(' ');

console.log(words);







