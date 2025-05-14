/*
In JavaScript, a class is a blueprint for creating objects with shared properties and methods. Classes were introduced in ES6 (ECMAScript 2015) and are essentially syntactic sugar over JavaScript's existing prototype-based inheritance.
*/

class Human {

    /* We can create property and function of this class */

    // By default these properties are public
    age = 13;
    weight = 80;
    height = 180;
    name;

    #color = "white";  // This is a private property(member)

    constructor(newAge, newHeight , newColor) {
        this.age = newAge;
        this.height = newHeight;
        this.#color = newColor;
    }

    #walking() {
        console.log("I am walking");
    }

    mycolor() {
        console.log("My color is ", this.#color);
    }


    running() {
        console.log("I am running");
    }

    // Getter and Setter

    get fetchcolor() {   // This is optional to use get and set keyword
        return this.#color;
    }

    set modifycolor(val) {
        this.#color = val;
    }

    // Example of default parameter

    sayname(myName) {  
        console.log("My name is: ", myName);
    }

    saynamedefault(myName = "Monu" , surname = "Chaudhary"){
        console.log("I am ", myName + " " , surname);
    }

    fullname(myName = "Monu" , lastname = myName.toUpperCase()){
    console.log("My name is ", myName, " ", lastname);
    }

    solve(value = {age:15 , wt : 90, ht:190}){  // We can also pass the object as parameter
    console.log(value);
}

    solve(value = ["Hello" , "World"]){  // We can also pass the object as parameter
    console.log(value);
}

    solve1(value = "Rshul"){
        console.log(value);
    }

    solve2(name, age =  getage()){  // Function
        console.log(name , " ", age);
    }

}


let human = new Human(3 , 56, 7);   // If we donot give the values after declaring a constructor then, it will show the undefined value

console.log(human.age);

human.running();

console.log(human.height);

console.log(human.fetchcolor);  // No need to use () because it is not a normal function it is a getter

human.sayname(); // It will give undefined when the parameter is not passed

human.saynamedefault(); // In this if the name is not provided then it will give the default value to the parameter

human.fullname();

human.fullname("Monu");  // In the second parameter will be default which will be the output of the syntax

human.fullname("Monu" , "Chaudhary");  // This value will be printed as it is

human.solve(null); // This will be treated as a parameter so it will be uodated in the string

human.solve(undefined);   // The default parameter value will be used

human.solve();


// console.log(human.color);
