// Error is an event distrupts the normal flow of execution

// Types of Error->

// 1.Compile Time Errors-> During the parse of the code , these errors are find out
// Ex-> Syntax



// 2. Runtime Error-> During the execution of the program
// Ex-> ReferenceError


// Error Handling

// Try catch block

try{
    console.log(x);
    // All the line after the error will not be error
    console.log("This will not be executed");

}
catch(err){   // e is the name of the error 
   
    // Here we define what will happen when the error is find out
    console.log("x is not defined");
    console.log("The error is ", err);
}

finally{
    console.log("This will run everytime whether the error occurs or not")
}


// We can give a custom error using throw keyword

try{
    console.log(num);

    
}
catch(err){
    throw new Error("Declare the variable first");
}

let errorcode = 100;   // This line will not be executed because we have throw the prev error due to which the execution is stopped

if(errorcode == 100){
    throw new Error("Invalid JSON");
}



