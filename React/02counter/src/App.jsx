import { useState } from 'react'
import './App.css'

function App() {
// In React, the UI does not change without stage changed
// In order to change the UI, we have to import useState from react

  let [counter , setCounter] = useState(0);  // It is the default value  we can give any value in this

  const addValue = () =>{
    // console.log("value added");
    counter++;
    if(counter <= 20)
    setCounter(counter);
  }

  const removevalue = () => {
    if(counter > 0)
    setCounter(counter-1);
  }
    
  return (
    <>
      <h1>Hello , I am Monu</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
