import React, {useState} from "react";
import data from "./data.js";
import "./styles.css";

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]); //store open tabs id

    function handleSingleSelection(getCurrentId){

        // console.log(selected);
        // console.log("getCurrentId", getCurrentId);

        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    // console.log(selected);

    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple];
        //to find double clicked or not in order to close the open tab
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        // console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1){
            // push to the openTabsArray(copyMultiple)
            // open new multi tab
            copyMultiple.push(getCurrentId);
        }else {
            // close the tab
            // remove opened tab from the multiple array
            copyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(copyMultiple);
    }

    // console.log(selected, multiple);

    return (
        <>
            <div className="wrapper">
                <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
                <div className="accordian">
                    {
                        data && data.length > 0 ?
                        data.map((dataItem) => (
                            <div className="item" key={dataItem.id}>
                                <div 
                                    onClick ={
                                        enableMultiSelection 
                                        ?
                                        ()=>handleMultiSelection(dataItem.id)
                                        :
                                        ()=>handleSingleSelection(dataItem.id)
                                    } className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id ||
                                     multiple.indexOf(dataItem.id) !== -1 
                                     ? 
                                    <div className="content">{dataItem.answer}</div>
                                    : null
                                }
                            </div>
                        )) : <div>No data found !</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian;

// single selection
// multiple selection








// https://ruchibadkur.github.io/react-interview-projects/