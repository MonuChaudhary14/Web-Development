import { useState, useEffect, use } from 'react';
import './App.css';

function App() {
  const [text , setText]  = useState('');

  // For every render
  // useEffect( () =>{
  //   console.log("Component Rendered");
  // });

  // On first render
  useEffect( () => {

    console.log("UI render first time");

  } , []);  // In this the second parameter which represnt the dependencies-list is send empty array

  /*
  In React 18 (with Strict Mode enabled):

  React intentionally mounts → unmounts → mounts again in development.

  This helps catch bugs with side effects that aren’t properly cleaned up.

  */

  // first render + whenever dependency changes
  useEffect( () => {
    console.log("Dependency changed");
  } , [text]); // It will run whenever there is a change in the text
  // In this, the text is known as dependency and the array is known as dependency list

  // to handle unmounting of a component

  useEffect( () =>{

    console.log("Listener aded");

    return () => { // This will be executed before the listener added , because the previous l;istener is removed then the new is added
      console.log('Listener removed');
    }

  }, [text]);

  function changeHandler(event){
    setText(event.target.value);
  }

  return (
    <div className = "App">

    <input type = "text" onChange={changeHandler} className='input-box'></input>

    <div>{text}</div>

    </div>
  );
}

export default App;

/*

use effect hook is used to manage side effect


A side effect means anything outside the normal rendering process, like:

Fetching data from an API

Subscribing/unsubscribing (e.g., event listeners, WebSocket)

Updating the document title

Setting a timer (setTimeout, setInterval)




use effect hook will render the code present in it after the rendering of the component in which it is present




Mount of the element means it added to the DOM

Unmount means the element is removed from the DOM




🔹 What is a Class-based Component?

Before React Hooks (useState, useEffect), React components with state and lifecycle methods were written as ES6 classes instead of functions.


🔹 Lifecycle Methods in Class Components

Hooks like useEffect are replacements for lifecycle methods.

| Lifecycle (Class)        | Equivalent (Hooks)      | Usage                                        |
| ------------------------ | ----------------------- | -------------------------------------------- |
| `componentDidMount()`    | `useEffect(..., [])`    | Runs after first render (good for API calls) |
| `componentDidUpdate()`   | `useEffect(..., [dep])` | Runs after updates                           |
| `componentWillUnmount()` | Cleanup in `useEffect`  | Runs before unmount (good for cleanup)       |


*/
