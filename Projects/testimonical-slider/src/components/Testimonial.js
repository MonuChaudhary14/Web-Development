import { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const[index , setIndex] = useState(0);

    function leftshiftHandler(){
        if(index -1 < 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index +1 === reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
       let randomIndex =  Math.floor(Math.random() * reviews.length);
       setIndex(randomIndex);
    }

    return (
        <div> 
            <Card reviews={reviews[index]}></Card>

            <div>
                <button onClick={leftshiftHandler}>
                <FiChevronLeft/>
                </button>
                <button onClick={rightShiftHandler}>
                    <FiChevronRight/>
                </button>
            </div>

            <div>
                <button onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    )

}

export default Testimonials;