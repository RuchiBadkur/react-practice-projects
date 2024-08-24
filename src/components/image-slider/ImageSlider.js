import React, {useState, useEffect} from  "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../image-slider/styles.css"

const ImageSlider = ({url, limit = 5, page = 1}) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl){
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data); 
                setLoading(false);
            }

        } catch (error) {
            setErrorMsg(error.message);
        }
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(()=>{
        (url !== "") && fetchImages(url)
    }, [url])

    // console.log(images);

    if(loading){
        return <div>Loading data ! Please wait</div>
    }

    if(errorMsg !== null){
        return <div>Error occured ! {errorMsg}</div>
    }

    return (
        <div className="main-container">
            <h2>Image Slider</h2>
            <div className="images-container">
                <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
                {
                    images && images.length ? images.map((imageItem, index)=>{
                        // console.log(imageItem.url);
                        return <img 
                        key={imageItem.id}
                        src={imageItem.download_url} 
                        alt={imageItem.download_id}
                        className={currentSlide === index ?  "current-image" : "current-image hide-current-image"}
                        />
                    }) : null
                }
                <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
                <span className="circle-indicators">
                    {
                        images && images.length ? 
                        images.map((_, index)=>{
                            return <button
                            key={index}
                            className={currentSlide === index ? 
                                "current-indicator" 
                                : "current-indicator inactive-indicator"
                            }
                            onClick = {() => setCurrentSlide(index)}
                            >-</button>
                        })
                        : null
                    }
                </span>
            </div>
        </div>
    )
}

export default ImageSlider;