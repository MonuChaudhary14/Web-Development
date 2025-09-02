import './App.css';
import { apiUrl , filterData } from "./data";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";


const App = () => {
  
  const [courses, setCourses] = useState(null);

  useEffect( () => {

    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);

      }
      catch(error){
        toast.error('Something went wrong');
      }
    }

    fetchData();

  }, );

  return (
    <div className="App">

      <Navbar/>

      <Filter
      filterData = {filterData}
      />

      <Cards courses = {courses}/>

    </div>
  );
}

export default App;
