// The window object in JavaScript is a global object provided by the browser 
// when running JavaScript in a web page context. 
// It represents the browser window or tab that contains a web page.

// The window contains:
// 1. DOM (Document Object Model)
// 2. BOM (Browser Object Model)
// 3. JS core features (like arrays, objects, functions)


// ========================
// 📄 DOM → Document Object Model
// ========================

// The DOM is a programming interface for HTML and XML documents.
// It represents the page so that programs (like JavaScript) can 
// read, manipulate, and modify the content, structure, and style of a website.

// In simple words, the whole HTML code is converted into a JS object, 
// and that object is known as the "document".

// We can access multiple elements using the document object:
// console.log(document.body);       // Access body tag
// console.log(document.title);      // Access title
// console.log(document.head);       // Access head

/*
DOM Tree Structure:
document                ← Root object
 └── html
     ├── head            head and body are sibling
     │   └── title
     └── body
         ├── h1
         └── p
*/



// Internally:
// 1. The tags are converted into tokens by the tokenizer
// 2. Then these tokens are converted into nodes
// 3. Finally, a DOM tree is built


// ========================
// 🌍 BOM → Browser Object Model
// ========================

// BOM allows JavaScript to interact with the browser itself 
// (not just the content of the web page like the DOM does).

// BOM provides access to:
// - window
// - navigator
// - screen
// - location
// - history
// - alert(), prompt(), confirm()

// Example usage:
console.log(window.location.href);  // Current page URL
console.log(window.history.length); // Number of pages in history

// In short:
// BOM is used to communicate with the browser for operations 
// like navigation, location, history, etc.
