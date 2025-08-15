import "./ItemDate.css";
import React, {useState} from "react";

// React load the DOM single time , so whatever the items assigned will remain same
// and it will not change if we change the name or any other thing in it untill we do not give the state

function ItemDate(props){    

    // let date = props.date;
    // let month = props.month;
    // let  year = props.year;

    // const [date, setDate] = useState(props.date);  // In this props.date is the value which is to be initilised to the variable
    // const [month, setMonth] = useState(props.month);  // useState, returns two value  first the value of the variable , second is the function to update it
    // const [year, setYear] = useState(props.year);

    const [newTitle, setNewTitle] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newMonth, setNewMonth] = useState("");
    const [newYear, setNewYear] = useState("");

    // We can also use this to set the details in single usestate
  const [fulldetails, setdetails] = useState({
    title: props.title || "",
    date: props.date || "",
    month: props.month || "",
    year: props.year || ""
  });

  function submitHandler(event) {
    event.preventDefault();

    const productData = {
        title : newTitle,
        date : newDate,
        month : newMonth,
        year : newYear
    }

    console.log(productData);
  }

    function clickHandler(event, prevState) {
        // date = '26';
        // year = '2022';
        // month = 'June';

        // setDate('26');
        // setYear('2022');
        // setMonth('June');

        // console.log("Edit button clicked");

     setdetails((prevState) => ({
      ...prevState,
      title: "Edited Title",
      date: "01",
      month: "July",
      year: "2022"
    }));
    }

    return (  // If the code is in multiple lines , then we have to use ()
        <div className = "Date">
        {/* <span>{date}</span>
        <span>{month}</span>
        <span>{year}</span> */}

        <span>{fulldetails.date}</span>
        <span>{fulldetails.month}</span>
        <span>{fulldetails.year}</span>
        <span>{fulldetails.title}</span>

        <button className = "button"  onClick={clickHandler}>Edit</button>
        {/* <button className = "button"  onClick={clickHandler()}>Delete</button>  */}
        <button className = "button"  onClick={submitHandler}>Delete</button> 
        </div>
        // The automatic button will be activated when the program executes
    )

}

export default ItemDate;




