import React from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import Random from "./components/random-color-generator/Random";
import StarRating from "./components/star-rating/StarRating";

const App = () => {
    return (
        <>
            <Accordian />
            <Random />
            <StarRating noOfStars={5}/>
        </>
    )
}

export default App;