import React, {useState} from "react";
import "./styles.css";

const Random = () => {
    const [color, setColor] = useState("colour, colour which colour?");
    // const [typeOfColor, setTypeOfColor] = useState("");

    function hex(){
        const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
        let letter = "", randomHex = "#";
        for( let i = 1; i <= 6; i++){
            letter = Math.floor(Math.random()*letters.length);
            randomHex += letters[letter];
        }
        setColor(randomHex);
        
        document.querySelector(".hex").style.color = randomHex;
        document.querySelector(".rgb").style.color = "black";
    }

    function rgb(){
        let letter = "", randomRGB = "rgb(";

        for(let i =1; i<3; i++){
            letter = Math.floor(Math.random()*255);
            randomRGB += letter+",";
        }
        randomRGB += letter + ")";
        setColor(randomRGB);
        document.querySelector(".rgb").style.color = randomRGB;
        document.querySelector(".hex").style.color = "black";
    }


    return (
        <div className="container">
            {/* <button onClick={typeOfColor === "hex"?hex:rgb}>Generate Random Colour</button>

            <button onClick={()=>setTypeOfColor("hex")} className="hex">Hex</button>
            <button onClick={()=>setTypeOfColor("rgb")}  className="rgb">RGB</button> */}

            <h2>Generate Random Colour</h2>

            <button onClick={hex} className="hex">Hex</button>
            <button onClick={rgb}  className="rgb">RGB</button>
            
            <div style={{padding: "20px 0px", margin: "20px"}}>
                <span style={{fontSize: "25px"}}>{color}</span>
            </div>

            <div 
                style={{backgroundColor: color}}
                className="color-box"
            >
            </div>
        </div>
    )
}

export default Random;