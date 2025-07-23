// The Temporal Dead Zone (TDZ) in JavaScript is a behavior related to let and const declarations. It refers to the time between the entering of the scope and the actual declaration of the variable, during which the variable cannot be accessed.

// 🔹 What causes the TDZ?
// When you use let or const, the variable is hoisted (just like with var), but not initialized. Accessing it before the declaration line will throw a ReferenceError.

// 🔹 Example:

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;
// In this example, the variable a exists in the scope (because of hoisting), but it is in the temporal dead zone from the start of the scope until the let a = 5; line is executed.

// 🔹 TDZ also applies to const:

{
  console.log(b); // ❌ ReferenceError
  const b = 10;
}
// 🔹 var does not have a TDZ:

console.log(c); // ✅ undefined
var c = 3;
// 🔹 Why does TDZ exist?
// It’s a safeguard to help catch bugs. Unlike var, let and const are block-scoped and meant to prevent accidental use before a variable is properly declared.

// 🔹 Key Rules:
// TDZ starts at the beginning of the block and ends when the variable is declared.

// Accessing the variable in TDZ causes a ReferenceError.

