// import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';
import Card from './Components/card';

function App() {   // This is the first component(function) of React
  
  const itemName = 'SurfExcel';

  const response = [

    {
      itemName:'Nirma',
      ItemDate:'20',
      itemMonth : 'June 2',
      itemyear : '2006'
    }, 
    {
      itemName:'SurfExcel',
      ItemDate:'10',
      itemMonth : 'July',
      itemyear : '2025'
    }

  ]




  return (    // There should be a single element of whole the code inside this return 
    <Card>  
    <div>
    <Item message = "This is the new message"> If we want this message to display, them we have to use props.children</Item>

    <Item name = {response[0].itemName}></Item>
    <ItemDate date = {response[0].ItemDate} month = {response[0].itemMonth} year = {response[0].itemyear}></ItemDate>

    <Item name = {itemName}></Item>
    <ItemDate date = {response[1].ItemDate} month = {response[1].itemMonth} year = {response[1].itemyear}></ItemDate>


    <div className = "App">This will be displayed on local host</div> 
    </div>
    </Card>
    // This is not a HTML code

    // When we give property to card then it will be applied instead of individaul element. Find why?

  );
}

export default App;
