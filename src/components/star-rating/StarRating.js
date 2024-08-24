import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import "./styles.css";

const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleMouseClick( getCurrentIndex){
        setRating(getCurrentIndex);
    }
    
    function handleMouseOver(getCurrentIndex){
        setHover(getCurrentIndex);
    }
    
    function handleMouseLeave(){
        // console.log(getCurrentIndex);
        setHover(rating);
    }

    
    return (
        <div className="container">
            <h1>Star Rating</h1>
            {
            [...Array(noOfStars)].map((_,index) =>{
                index += 1;

                return(
                    <FaStar 
                    key={index} 
                    className={index <= (hover || rating) ? "active" : "inactive"}
                    size={40}
                    onClick={()=>handleMouseClick(index)}
                    onMouseOver={()=>handleMouseOver(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    />
                    /*<span 
                    style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "skyBlue", display: "inline-block", margin: " 1%"}}
                    key={index}
                    className="circle"
                    >
                    </span>*/
                )
            })
            
            }
        </div >
    )
}

export default StarRating;