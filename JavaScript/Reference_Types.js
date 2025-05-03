// When we create a reference variable then the values are stoerd in heap memory and the name of the array is stored in stack memory(it is actually a reference)


// Object-> It is the collection of key value pair 

let obj = {
    fullname: "Monu Chaudhary",
    "name": "Monu", // We can aslo write the key in " ". It is mostly used when there is a name in the key
    "full name": "monu",

    greet: function () {   // We can also make functions in it 

        console.log("hello");

    }

};

console.log(obj);
console.log(obj.name);
obj.greet();

let obj2 = obj;
// In this the obj2 is a reference which points to the obj in the heap so no new object is created



/*
A deep copy creates a new object or array and recursively copies all nested levels, so changes to the copy do not affect the original.
*/


/*
A shallow copy copies the top-level properties, but nested objects or arrays are still referenced (i.e., not copied). Changes to nested objects affect both the original and the copy.
*/





/*  Array-> 
1. Using []
2. Using array constructor

*/

welcome = () => {
    console.log("Hello Ji");
    console.log("Kaise ho");
    return "Badiya";
};

console.log();
console.log();
console.log();


// 1.

let arr = [1, 2, 3, 'string', 3.5, true, welcome];


// 2.
let arr1 = new Array("monu", " chaudhary", 1, 5);

console.log(typeof (arr));
console.log(typeof (arr1));

console.log();
console.log();
console.log();

console.log(arr[6]());
arr[6]();

console.log(arr);

console.log(arr1);

// Build In Methods->
// 1.Push -> insert the element at the end
// 2.Pop -> removes the last element from the array
// 3.shift -> removes the first element
// 4.unshift -> insert the element at the start
// 5.slice -> It creates a new part from the array 
// 6.splice -> It is used to change the content of the array (insert , replace , remove at any postion)
// 7.map -> The **map()** method in JavaScript is used to transform each element in an array and return a new array with the transformed values, without modifying the original array.

// 8.filter -> The **filter()** method in JavaScript is used to select items from an array that meet a specific condition. It returns a new array containing only the elements that pass the test in the provided callback function.

// 9.reduce -> The **reduce()** function in JavaScript is used to accumulate or reduce an array into a single value—this can be a number, string, object, array, or anything else

// In this if we use give accumate a value , then the current will point the first element and if the accumulate value is not given then , the curr will point the second value 



// 10.sort
// 11.indexof
// 12.find

console.log();
console.log();
console.log();

let a = [1, 12, 2, 4, 5, 9];

a.push("monu");
console.log(a);

a.pop();
console.log(a);

a.shift();
console.log(a);

a.unshift("first")
console.log(a);

console.log(a.slice(2, 4));  // Here 2 is the starting index of the new array and 4 is the last but the last index is excluded

a.splice(1, 2, "monu"); // This means that remove the elements from the index 1 to 2 and insert monu

a.splice(4, 0, "last");  // this means add last to the 4th index

let numarray = [10, 20, 30];
let ansarray = numarray.map((number) => number * number);
console.log(ansarray);

numarray.map((number, index) => {
    console.log(index, " ", number + 1);
});
console.log(a);

let evenarray = numarray.filter((number) => {
    return number % 2 == 0;
});

let stringarray = a.filter((value) => {
    if (typeof (value) === 'String') {
        return true;
    }
    else {
        return false;
    }
});

console.log(evenarray);

let sum = [40, 20, 30, 40];

console.log();
console.log();
console.log();

sum.sort();
sum.sort((a, b) => b - a);

console.log(sum);

let ans = sum.reduce((acc, curr) => {
    return acc + curr;
}, 0);   // This zero is the value of acc

console.log(ans);

console.log(sum.indexOf(9));




let nums = [10,50,4,0,7,0,4,58,7,2];
let length = nums.length;

// For each loop
nums.forEach((value, index) => {
    console.log("Number: ",value , "Index: ", index);
});

// For in loopp
for(let key in obj){
    console.log(key , " ", obj[key]);
}

// For of loop

for(let value of nums){
    console.log(value);
}

let sirname = "jaat";

for(let val of sirname){
    console.log(val);
}

// Passing array to function

function getsum(arr){
    //logic
}
