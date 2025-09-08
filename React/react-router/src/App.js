import './App.css';
import {Route , Routes } from 'react-router-dom';
import Home from './Home';
import Support from './Support';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MainHeader from './MainHeader';

function App() {
  return (
    <div className="App">

      <nav>
        
          
            <Link to="/"> Home</Link>

            <Link to="/support"> Support</Link>
          
        
      </nav>

      {/* Nav links works similar to the link but it add a active class on the element we clicked */}
      <br />    
      <nav>
        <NavLink to ="/" > Home </NavLink>
        <NavLink to ="/support" > Support </NavLink>
      </nav>

      <Routes>    
        {/* This is used to create multiple Routes */}
        <Route path="/" element={ <Home/>} />  {/* This Home can be considered as the parent of other routes */}
        <Route path = "/support" element = {<Support/>}/>
        <Route path = "/about" element = {<div>about</div>}/>
        <Route path = "/contact" element = {<div>Contact Me</div>}/>
        <Route path = "*" element = { <div>404: Not found</div>}/>
        {/*  '*' means the path does not matches the other path */}
      </Routes>


      <Routes>    
        <Route path="/" element={ <Home/>}> {/* This is known as nested routing */}
        <Route path = "/about" element = {<div>about</div>}/>
        <Route path = "/contact" element = {<div>Contact Me</div>}/>
        <Route path = "*" element = { <div>404: Not found</div>}/>
        </Route>
        {/* Here Home is the parent of other routes and it does not allow the child elements to be rendered independently */}
        {/* To render the child elements we have to use <Outlet/> component in the parent component */} 
      </Routes>

      <Routes>
        <Route path = "/" element = {<MainHeader/>}>

        {/* index means the default component to be rendered when the path is exactly same as the parent path */}
        <Route index element= {<Home/>}/>
        <Route path = "support" element = {<Support/>}/>
        <Route path = "about" element = {<div>about</div>}/>
        <Route path = "contact" element = {<div>Contact Me</div>}/>
        <Route path = "*" element = { <div>404: Not found </div>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
