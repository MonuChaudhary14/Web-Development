import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){ 
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='wrapper'>

      <div className='counter-container'>

          <div className='text-container'>Increment and Decrement</div>
          <div className='button-container'>
          <button className='button1' onClick={decreaseHandler}>
            -
          </button>
          <div className='number-counter'> 
              {count}
          </div>
          <button className='button2' onClick={increaseHandler}>
            +
          </button>
          </div>
      </div>
      <button className='reset-button' onClick={resetHandler}>Reset</button>

    </div>
  )
}

export default App
