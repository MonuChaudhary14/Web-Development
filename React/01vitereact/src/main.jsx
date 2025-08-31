import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}



const anotherElement = (
    <a href = "https://google.com" target = "_blank">Visit google</a>

)

const anotherUser = " ketan chaudhary";

const reactElement = React.createElement(
    'a' , 
    {href: 'https://google.com' , target : '_blank'},
    'click me to visit google',
    anotherUser
)


createRoot(document.getElementById('root')).render(

    // <App />

    // <MyApp />
        // OR
    // MyApp()

    // anotherElement


    reactElement

)
