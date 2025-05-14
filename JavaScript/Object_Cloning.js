// Object is dynamic because we can change the property during runtime

let obj = {
    age : 12,
    weight : 45,
    height: 180
};

let obj2 = {
    firstname : "Monu",
    surname : "Chaudhary"
};

console.log(obj);

obj.color = "White";   // We can add a property in the object in the runtime

console.log(obj);

let link = obj;  // In this no new object is created , the link just point to the obj 
// This is not cloning



// Methods Of Object Cloning -> More than 3 methods find other

// 1. Spread Operator

let clone1 = {...obj};


// 2. Assign Method 

let clone2 = Object.assign({}, obj, obj2); // We can give multiple objects and the value will be cloned

// 3. Iteration 

let clone3 = {};

for(let key in obj){
    let newkey = key;
    let value = obj[key];

    // insert new key and value and create a clone

    clone3[newkey] = value;

}





obj.age = 78;
obj2.firstname = "Ketan";

console.log("This is real:-> ",obj);
console.log("This is clone->",clone1);
console.log("This is clone->",clone2);