/* This is the type of data a variable can hold */


// Types->

// Primitive
// Non-Primitive

/*

1.Numbers -> 1 , 2, 2.3, .567
2.String -> "JavaScript"
3.boolean -> true , false
4.undefined -> No value is provided to the varbiable. It occurs when we do not initilise the value
5.null
6.BigInt
7.Symbol

*/

let b;
console.log(b);  /* This shows undefined behavior*/

let a = "Monu";
console.log(a);

a = 45.78;   // It is a feature of dynamic typing (means we can give any variable any type of value)
console.log(a);


a = true;
console.log(a);

a = null;

console.log(a);


let big = "54654684684";     // -(2^53) to (2^53 - 1)


console.log(typeof(big));
console.log(typeof(a));
console.log(typeof(b));

let fullname = new String("Monu");

const sym1 = Symbol('HashTag');

// const sum2 = new Symbol("Not possible");
//  it is not possible because symbol is not a constructor


console.log("Symbol is " , sym1);
console.log("Symbol is " , typeof(sym1));

const sym2 = Symbol('HashTag');

console.log(sym1 === sym2);


console.log(undefined === undefined);
console.log(null === null);

const k1 = Symbol();
const k2 = Symbol("identifier for k2");

myobj = {};  

myobj[k1] = "Harry";
myobj[k2] = "Rohan";
myobj["name"] = "Monu Poonia";
myobj[4] = "four";
// We can access the object by two methods , first we can use '.' or '[]'
console.log();
console.log(myobj);
console.log(myobj[k1]);   
console.log(myobj.k2);  // This will give undefined and we cannot use this to get the value

console.log(myobj.name); 

console.log();
console.log();

// Symbols are ingnored in for in loop
for(key in myobj){
    console.log(key, myobj[key]);
}


console.log(JSON.stringify(myobj));
// When we use this the symbols are ignored


// Arrays in JS -> We can store any type of data in array

let arr = ['1' , 'Monu' , 1.25 , true, null , undefined];

console.log(arr[0]);
console.log(arr[3]);




let rectangle = {
    length : 1, 
    breadth : 2 , 


    draw : function() {  //  This will create a function with name draw
        console.log('draw');
    }
}


console.log(rectangle.draw());

