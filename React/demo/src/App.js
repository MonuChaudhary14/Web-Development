// import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';

function App() {   // This is the first component(function) of React
  return (    // There should be a single element of whole the code inside this return 
    <div>
    <Item message = "This is the new message"> If we want this message to display, them we have to use props.children</Item>
    <div className = "App">This will be displayed on local host</div> 
    </div>
    // This is not a HTML code
  );
}

export default App;
