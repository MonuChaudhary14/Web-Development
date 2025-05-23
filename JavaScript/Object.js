let shape = {  // This is a object 

    length: 1,  // These are the properties
    breadth: 2,

    // If we create a function in a object , then it is called as method

    area: function () {
        console.log('The area is ' + this.length * this.breadth);
    }

}
shape.area();

shape.height = 1;  // This will be added in the object

console.log(shape.height);

console.log("This is the constrctor "+shape.constructor);

delete shape.height;

console.log(shape.height);





// Object Creation 
// 1. Factory Function
// 2. Constructor Function


// 1. Factory Function

function createshape() {

    // We can also directly return the function just remove 'let'

    /*return */let shape = {  // This is a object 

        length: 1,  // These are the properties
        breadth: 2,

        // If we create a function in a object , then it is called as method

        area: function () {
            console.log('The area is ' + this.length * this.breadth);
        }

    }
    return shape;
}

let rectangle = createshape();

rectangle.area();

function createshape1(length , breadth) {

    /*return */let shape = {  // This is a object 

        length,   // This will give the value of length which is given as parameter
        breadth,

        // If we create a function in a object , then it is called as method

        area: function () {
            console.log('The area is ' + this.length * this.breadth);
        }

    }
    return shape;
}

let longrectangle = createshape1(5, 4);
longrectangle.area();


// this keyword represnt the current object

let newObject = {
    length  : 78, 
    breadth :12, 
    height :3, 

    volume : function(){
        console.log("The volume of the object is "+ this.length*this.breadth*this.height);
    }
}

// 2 . Using Constructor function : It intilised the value/defining

function shapes(){

    this.length = 45;
    this.breadth = 12;
    this.height = 3;
    
    this.volume = function(){
        console.log("The volume of the shape is "+ this.length*this.breadth*this.height);
    }

}

console.log(shapes.constructor);

let cuboid = new shapes();

console.log(cuboid);


// Another Method to 


let Rectangle2 = new Function(
    'length', 'breadth',
    `
    this.length = length;
    this.breadth = breadth;
    this.volume = function() {
        console.log("Volume of the cylinder is " + this.length * this.breadth);
    };
    `
);

let rect = new Rectangle2(2, 4);

console.log(rect.volume());
// This shows a undefined value because the function is itself does not returning anything so
// a undefined value is printed 

