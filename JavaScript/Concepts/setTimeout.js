// The setTimeout() method allows you to run a function once after a specified delay (in milliseconds).

// setTimeout(function, delay, arg1, arg2, ...)

// | Parameter  | Description                                 |
// | ---------- | ------------------------------------------- |
// | `function` | The function to execute after the delay     |
// | `delay`    | Time in **milliseconds** to wait            |
// | `arg1...`  | (Optional) Arguments passed to the function |


// This will be delayed for minimum given value, i will execute when the call the call stack become empty because it is a sychronous code

console.log("Before");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);  // Wait 2 seconds

console.log("After");



function greet(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greet, 3000, "Monu"); // Here Monu is a parameter


// Clearing a TimeOut
let id = setTimeout(() => {
  console.log("This won't run");
}, 5000);

clearTimeout(id);  // Cancels the timeout



setTimeout(() => {
  console.log("Timeout");
}, 0);   // 0 ms is the default value of setTimeout function

console.log("Main");

// Main
// Timeout

//  How it works internally:
// setTimeout(..., 0) tells the browser:
// ➤ "Run this function after the current call stack is empty."

// The callback is placed in the Event Queue.

// The Event Loop waits for the Call Stack to become empty.

// Only then does it push the callback to the Call Stack for execution.
