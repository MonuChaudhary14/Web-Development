import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review = props.reviews;
    return (

        <div>
            
            <div>
                <img src = {review.image} alt = "user-image"></img>
            </div>

            <div>
                <p>{review.name}</p>

            </div>

            <div>
                <p>{review.job}</p>
            </div>

            <div>
                <FaQuoteLeft/>
            </div>

            <div>
                {review.text}
            </div>

            <div>
                <FaQuoteRight/>
            </div>



        </div>

    );

}

export default Card;
