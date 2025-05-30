//An array is a special variable in JavaScript that can hold multiple values in a single variable. 

let arr1 = [1, 2, 3, 4];              // Using square brackets
let arr2 = new Array(5, 6, 7, 8);     // Using Array constructor
let emptyArr = new Array(3);         // Creates an empty array of length 3


// Insertion

// 1. End 
arr1.push(8);

// 2. Begin 
arr1.unshift(7);

// 3. Middle
arr1.splice(2 , 0  , 'a' ,'b' , 'c');
// In this function, 
/*
2 -> index
0 -> delete elements
'a' , 'b' , 'c' -> characters

*/


console.log(arr1);

// To find a element in a array, we can use this method but it is not preferred
console.log(arr1.indexOf(4));  // 7 
console.log(arr1.indexOf(7));  // -1


// Another method to find the whether the element is present or not

console.log(arr1.includes(1));  // Returns true or false

