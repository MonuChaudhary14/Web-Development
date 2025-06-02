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
// More efficient way
console.log(arr1.includes(1));  // Returns true or false


// More advance version
console.log(arr1.indexOf(4, 3)); // Returns -1 if it does not exist in the given range
// the first digit is the number which is to be find 
// the second number is the starting index for search



// Searching on References

let course = [  // Array of Objects
    {
        no : 1 , fullname : 'Monu'
    },
    {
        no : 2 , fullname : 'Chaudhary'
    }
];

console.log(course.indexOf({no:1  , fullname: 'Monu'}));
console.log(course.includes({no:1  , fullname: 'Monu'}));
// This will give -1
// Array.prototype.indexOf() checks for object references, not object content.
// In JavaScript, objects are compared by reference, not by value.




// To search in reference , we should use callback function

// A callback function in JavaScript is a function that is passed as an argument to another function, and it's typically invoked later, after some operation completes.

let search1= course.find(function(item){  // here search1 is a predicate function
    return item.fullname === 'Monu';
});

console.log(search1);

// Shortcut method to write the find function

let search2 = course.find(item => item.fullname === 'Chaudhary');

console.log(search2);




/* Removing a element from a array 
1.Shift -> To remove from beginning 
2.splice -> To remove from beginning
3.pop -> To remove from end
*/

let numbers = [1,4,5,2,4,7,9,6,1];

console.log('Array before removing: ' + numbers);

numbers.pop();
numbers.shift();
numbers.splice(4, 1);   // This will remove 1 element from index 4

console.log("Array after removing: " + numbers);  

let number2 = numbers;
let number3 = numbers;

// Emptying an Array 

// 1.
numbers = []; 
// This numbers array will now point to a new refernce and the prev refernce will automatically removed by garbage collector but there is a problem in this method but if we give another array and give it same refernce then the other array will contain the same data

console.log(numbers);
console.log(number2);

// 2. By making number length = 0

number2.length = 0;

// This will make all the array whose reference is same to zero

console.log(number2);
console.log(number3);


//3. Using splice method
number3.splice(0 , number3.length);





// Combining and Slicing Arrays


let first = [1,2,3,4];
let second = [5,6,7,8];

// combinig using concat
let combine = first.concat(second);

console.log(combine);


// removing element using slice

let sliced = combine.slice(2, 4);

console.log(sliced);

let sliced2 = combine.slice(3);  // It will spile all the elements from index 3

console.log(sliced2);

let fullslicing = combine.slice(); // This will slice all the element and a copy of array is formed


// combine using spread operator

let combine2 = [...first , 'a' , 15 , ...second , true];  // we can also add some charcters or numbers in between this

console.log(combine2);

// We can also use copy using spread operator 

let combined3 = [...combine2];

console.log(combined3);


// Find out how to combine and slice reference types 





// Printing all the elements using loops

let values = [1,45,23,7,89,2,6,78];

// for(let val of values){
//     console.log(val);
// }

values.forEach(function(v){
    console.log(v);
})





// Joining Arrays

let joined = values.join('!'); // This will join all the elements of array by this character
console.log(joined);




// Split method -> This is a function of string

let message = 'This is the message which is to be split';

let parts = message.split(' '); // This will split the elements on the basis of ' ' which means that is will divide the string into multiple parts 
// Split method creates a array

console.log(parts);



// Sorting an Array 

values.sort();  // Internally , sort function convert the elements into string and then sort them

console.log(values);

// Find out how to sort using predicate function
let values1 = [5, 48, 89, 4, 6, 1, 3, 1];

let sorted = values1.sort(function(integer1, integer2){
    return integer1 - integer2;
});

console.log("The sorted array using custom comparator is", sorted);




// Reverse the array

values.reverse();

console.log(values);


// Filtering the array

let integers = [1,2,-1,4,-6,7];

let filtered = integers.filter(function(value){
    return value >= 0;
})

console.log(filtered);

let filtered2 = integers.filter(value => value <= 0);

console.log(filtered2);




// Mapping Arrays -> Map each element of array to something else

 let mapping = [1, 2, 4, 5, 6];

let mapped = mapping.map(function(value) {
    return 'student_no: ' + value; // If we give array name then it will use all the element and then map them 
    // Check one time by using this method of changing value by mapping 
});

console.log(mapped);


// Mapping with Objects

let num = [7, 8,-5,6,7];

let filtered3 = num.filter(value => value >= 0);

let items = filtered3.map(function(digit){
    let obj = {value : digit};
    return obj;  // We can also directly return the upper line
})

console.log(items);


// Chaining

let items2 = num.filter(value => value >= 0).map(h => {value : num});

console.log(items2);



// Reducing an Array
let arr = [1,2,3,4];

// reduce function require two values which are callback function and inital value

let totalsum = arr.reduce((accumulator , currentValue) => accumulator + currentValue , 0);
// In the above code 0 is the initial value of accumulator
// In this accumulator behave as a intital value in loop which can be total = 0 
// the current value behave as value of arr which will be added in the accumulator

// If we do not write intital value , the the accumulator initial is the first value of the array and it will start from the second value



console.log(totalsum);
