import React, { useState } from "react";

const Random2 = () => {
    const [rgb, setRgb] = useState("");
    const [hex, setHex] = useState("");

    function generateRgb (){
        let rgbStr = "rgb("
        for(let i = 0; i < 3; i++){
            let num = Math.floor(Math.random()*255);
            rgbStr += num ;
            if(i < 2){
                rgbStr += ","
            }
        }
        rgbStr += ")";
        setRgb(rgbStr);
    }

    function generateHex() {
        const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        let hexStr = "#";
        for(let i = 1; i <= 6; i++){
            let letter = Math.floor(Math.random()*letters.length);

            hexStr += letters[letter];

        }

        setHex(hexStr);
    }

    return (
        <>
        <button onClick={generateRgb}>RGB</button>
        <button onClick={generateHex}>HEX</button>
        <p style={{backgroundColor: rgb}}>rgb: {rgb}</p>
        <p style={{color: hex,  padding: "25px"}}>hex: {hex}</p>
        </>

    )
}

export default Random2;

