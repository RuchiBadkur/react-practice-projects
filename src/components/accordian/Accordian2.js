
import React, {useState, useEffect} from "react";
import data from "./data";

const Accordian2 = () => {
    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState([]);
    const [enable, setEnable] = useState(false);
   
   
    function handleSelection(getCurrentId){
        selected === getCurrentId ? setSelected(null) : setSelected(getCurrentId)
    }

    function handleMultiple(getCurrentId){
        let copyMultiple = [...multiple];
        copyMultiple.indexOf(getCurrentId) === -1
        ? copyMultiple.push(getCurrentId)
        : copyMultiple.splice(copyMultiple.indexOf(getCurrentId), 1)
        setMultiple(copyMultiple);
    }


    return (
        <>
        <button onClick={()=>(setEnable(!enable))}>Enable Multiple</button>
            {data.map((item)=> (
                <div key={item.id}>
                    <p onClick={()=>
                        enable 
                        ? handleMultiple(item.id)
                        : handleSelection(item.id)
                    }>{item.question}</p>

                    {selected === item.id || multiple.indexOf(item.id) !== -1 ?
                        <p>{item.answer}</p>
                        : null
                    }
                    
                </div>
            ))}
        </>
    )
}

export default Accordian2;