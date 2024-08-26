import QRCode from "react-qr-code";
import { useState } from "react";

const QRCodeGenerator = () => {

    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGeneratorQrCode(){
        setQrCode(input);
        setInput("");
    }

    return (
        <>
            <div>
                <h1>QR Code Generator</h1>
                <input 
                type="text" 
                name="qr-code"
                placeholder="Enter your value here"
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                 />
                <button 
                disabled ={input && input.trim() !== ""
                    ? false
                    : true
                }
                onClick={handleGeneratorQrCode}>Generate</button>
            </div>
            <div>
                <QRCode 
                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="white"
                />
            </div>
        </>
    )
}

export default QRCodeGenerator;