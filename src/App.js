import React from "react";
import "./App.css";
import Accordian2 from "./components/accordian/Accordian2.js";
import Random2 from "./components/random-color-generator/Random2";
import StarRating2 from "./components/star-rating/StarRating2";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreProducts from "./components/load-more-products/LoadMoreProducts.js";

const App = () => {
    return (
        <>
            {/* <Accordian2 />
            <Random2 />
            <StarRating2 noOfStars={5}/>
            <ImageSlider url={'https://picsum.photos/v2/list'} 
            limit={"5"} 
            page={"1"}/> */}
            <LoadMoreProducts />
        </>
    )
}

export default App;