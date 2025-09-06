import React from 'react';

// used to be required in older versions of React (before React 17). Let me explain why and what’s different now:

// 🔹 Old React (before v17)

// Every time you wrote JSX like:

// const element = <h1>Hello</h1>;


// The JSX wasn’t real HTML. It got compiled (by Babel) into:

// const element = React.createElement("h1", null, "Hello");


// That means JSX always needed access to the React object, so you had to import React from "react"; at the top of every file that used JSX.



// New React (v17+)

// React introduced a new JSX transform that doesn’t require the explicit React import.

// Now, JSX is compiled into special function calls that don’t always need React directly in the file.

// That’s why you can write:

// const App = () => {
//   return <h1>Hello</h1>;
// };

// export default App;


import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

