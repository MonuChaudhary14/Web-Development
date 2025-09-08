import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName , setFirstName] = useState('');
  // const [lastName , setLastName] = useState('');

  // function changeFirstName(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }

  // function changeLastName(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", isVisible: false, mode: "", favcar: "" });


  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name] : event.target.value

        [name]: type === 'checkbox' ? checked : value


      }
    })

  }

    function submitHandler(event){
      event.preventDefault();
      console.log("Submitting");
      console.log(formData);
    }




  return (
    <div className="App">

      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter your email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter you comment here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br />
        <br />

        <label htmlFor="isVisible">Is it visible</label>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        // In this we have to give this here , because the value of the check box is accessed by checked
        />

        <br />
        <br />

        <fieldset>
          <legend>Mode : </legend>
          <label htmlFor='mode'>online</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online"
            id="online_mode"
            checked={formData.mode === 'online'}
          />

          <label htmlFor='mode'>offline</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline"
            id="offline_mode"
            checked={formData.mode === "offline"}
          />
        </fieldset>

        <br />
        <br />

        <label htmlFor='favcar'>Favourite car</label>
        <select
          name="favcar"
          value={formData.favcar}
          onChange={changeHandler}
        >

          <option value="scorpio">scorpio</option>
          <option calue="fortuner">Fortuner</option>


        </select>

        <br />
        <br />
        {/* id there is button in form , then a onsubmit event is triggered */}
        <button>Submit</button>

      </form>

    </div>
  );
}

export default App;
