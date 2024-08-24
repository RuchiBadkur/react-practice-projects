import React, {useState} from "react";
import "./styles.css";

const StarRating2 = ({numberOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    return (
        <>
            {
                [...Array(numberOfStars)].map((_,index)=>{
                    index += 1;
                    return (
                    <span
                        key={index}
                        style={{
                            display: "inline-block",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                        }}
                        onClick={()=>setRating(index)}
                        onMouseOver={()=>setHover(index)}
                        onMouseLeave={()=>setHover(rating)}

                        className={index <= (hover || rating) ? "active" : "inactive"}
                    >
                    </span>   
                    )
                })
            }

        </>
    )
}

export default StarRating2;