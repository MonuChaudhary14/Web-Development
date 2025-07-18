// ---------------------------
// Basic Object Example
// ---------------------------
let shape = {
    length: 1,
    breadth: 2,

    area: function () {
        console.log('The area is ' + this.length * this.breadth);
    }
};

shape.area();

shape.height = 1;  // Add new property
console.log(shape.height);  // Output: 1

console.log("This is the constructor: " + shape.constructor);  // Output: function Object()

delete shape.height;
console.log(shape.height);  // Output: undefined


// Object Creation

// ---------------------------
// Factory Function (1st Way)
// ---------------------------
function createShape() {
    return {
        length: 1,
        breadth: 2,

        area: function () {
            console.log('The area is ' + this.length * this.breadth);
        }
    };

    // We can also create a new Shape and then we can use return that object

}

let rectangle = createShape();
console.log('\nRectangle object:', rectangle);
rectangle.area();

console.log();
// ---------------------------
// Factory Function with Parameters
// ---------------------------
function createShape1(length, breadth) {
    return {
        length,
        breadth,

        area: function () {
            console.log('The area is ' + this.length * this.breadth);
        }
    };
}

let longRectangle = createShape1(5, 4);
longRectangle.area();  // Output: 20


// ---------------------------
// Simple Object with Method
// ---------------------------
let newObject = {
    length: 78,
    breadth: 12,
    height: 3,

    volume: function () {
        console.log("The volume is " + this.length * this.breadth * this.height);
    }
};

newObject.volume();  // Output: volume

console.log( );
// ---------------------------
// Constructor Function
// ---------------------------
function MyShape() {   // In this we Pascal Notation(means 1st word is always capital)
    this.length = 45;
    this.breadth = 12;
    this.height = 3;

    this.volume = function () {
        console.log("The volume is " + this.length * this.breadth * this.height);
    };
}

console.log("\nConstructor of MyShape function:");
console.log(MyShape.constructor);  // Output: Function (built-in)
// The function is a object so when it's constructor is used it will call the constructor of a function no the constructor of object 


let cuboid = new MyShape();
console.log("Constructor of cuboid object:", cuboid.constructor);  // Output: MyShape
console.log("Cuboid object:", cuboid);
cuboid.volume();


// ---------------------------
// Dynamic Function Constructor  (Advanced)
// ---------------------------
let Rectangle2 = new Function(   // This is how javascript create the function    (in build constructor)
    'length', 'breadth',
    `
    this.length = length;
    this.breadth = breadth;
    this.area = function() {
        console.log("Area is " + this.length * this.breadth);
    };
    `
);

let rect = new Rectangle2(2, 4);
rect.area();  // Output: 8

if ('length' in Rectangle2) {
    console.log("Length is present in Rectangle2");
} else {
    console.log("Length is not present in Rectangle2");
}


// To find out if a property is present or not

if('color' in MyShape){
    console.log("Present");
}
else{
    console.log("Absent");
}




// ---------------------------
// Object Cloning via Iteration
// ---------------------------
let obj3 = {};

for (let key in newObject) {
    obj3[key] = newObject[key];  // Corrected key assignment
} 

console.log("\nCloned object (obj3):");
for (let key in obj3) {
    console.log(key, obj3[key]);
}


 
// ---------------------------
// Object Cloning via Assiging
// ---------------------------
let obj4 = {};
obj4 = Object.assign({}, newObject, shape);  

// In this , the first value is the empty object(target)
// Second value-> Source
// Third value -> Second Source

// If both newObject and shape have properties with the same keys, the later one (shape) will overwrite the earlier one


console.log("\nCloned object (obj4):");
for (let key in obj4) {
    console.log(key, obj4[key]);
}



// ---------------------------
// Object Cloning via Spread
// ---------------------------
let obj5 = {...newObject};

console.log("\nCloned object (obj5):");
for (let key in obj5) {
    console.log(key, obj5[key]);
}


// ---------------------------
// String as Object
// ---------------------------
let lastname = new String("Jaat"); 
// This is a Object String

let firstname = 'Monu';

console.log(typeof(firstname));
console.log(typeof(lastname));


// ---------------------------
// Conversion of Primitive String into Object String
// ---------------------------

// When we use . with primitive string then it is treated as object

firstname.length; // We can use any function to make it Object

firstname.includes('Monu');
