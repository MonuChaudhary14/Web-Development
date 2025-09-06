import './App.css';
import reviews from "./data";
import Testimonials from './components/Testimonial';


function App() {
  return (
    <div>
        <div>
          <h1>Our testmonials</h1>
          <div></div>
          <Testimonials reviews = {reviews} />
        </div> 
    </div>
  );
}

export default App;
