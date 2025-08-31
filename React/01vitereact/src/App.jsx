import Chai from "./chai";
import './App.css'

const username = "Monu Chaudhary";

// We can not use expression like if , in return 

const anotherUser = "ketan chaudhary";


function App() {
  


  return (
    <>  {/* This is known as fragment in react , we can also use div or any other tag */}

    <h1>This is {username}</h1>
    <Chai/>

    </>

  )
}

export default App
