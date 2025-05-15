// Window -> 
/*
the window object is the global object in the browser environment. It represents the browser's window or tab

It is at the top of the hierarchy

Any variable or function declared in the global scope automatically becomes a property of window.


window gives access to built-in browser features:

*/

var x = 10;   // It is a global variable which is the property of the window

window.console.log("It is also a global varible"); // It is optional to write window in the window elements





//  DOM -> Document Object Model
/*
The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node is part of the page (elements, text, attributes, etc.).






When a web page loads, the browser parses the HTML, creates the DOM, and then allows JavaScript to interact with it. Here's how it works:

1. Browser Loads HTML
The browser reads the HTML file from top to bottom.

As it reads, it creates nodes for each element, attribute, and text.

2. DOM Tree is Built
These nodes are organized into a tree structure called the DOM Tree.

The top of the tree is the document object (the root of the page).

3. JavaScript Runs
After or during DOM creation (depending on where the <script> tag is), JavaScript runs.

It can:

Access nodes (document.getElementById)

Modify nodes (element.textContent)

Add or remove nodes (appendChild, removeChild)

Change styles or classes

4. Browser Updates the Page
When JavaScript modifies the DOM, the browser automatically re-renders the changed part of the page (this is called repainting or reflow).




character-> tags -> token -> node -> DOM

*/


// BOM

/*
BOM -> Browser Object Model

The BOM (Browser Object Model) allows JavaScript to interact with the browser itself, not just the content of the web page (which is what the DOM handles).




*/


/*
ways to access the HTML elements

1. ID
2. Class Name
3.Tag Name

*/





