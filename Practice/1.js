let objects = {
    fullname : "Monu", 
    height : 175, 
    weight : 50,

    hello (){
        console.log("Hello Ji Kaise ho sare");  // This prints the content in console in web browser
    },

    printvalue(){
        console.log(this);
    },

}

function objects(age, name){

}

objects.color = "White";

let Object1 = new Object();

Object1.fullname = 'Monu Chaudhary';
Object1.height = 78;

console.log(objects.fullname);
console.log(objects.height);

objects.hello();

console.log(objects.printvalue);

Object.assign(Object1, objects);

console.log(Object1);

// console.log(objects);

console.log(Object.entries(objects));


function constructor(age , height , weight){

    this.age = age;
    this.age = age;
    this.height = height;
    this.weight = weight;

}

constructor.prototype.nationalty = 'HINID'