import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {

    const navigate = useNavigate();  // Thgis hook is used to programmatically navigate the user known as navigate hook
    function clickHandler() {
        // navigate('/');
        navigate(-1); // This will take us to the previous page
    }

  return (
    <div>
      <h1>Support Page</h1>
      <button onClick={clickHandler}>Request Support</button>
    </div>
  );
};

export default Support;
