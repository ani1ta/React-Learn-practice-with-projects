/* eslint-disable no-unused-vars */
import React from "react";

export default function FifthUsestate(){
    const [isImportant, setIsimportant] = React.useState("Yes")
    
    function handleClick(){
        setIsimportant("No")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know??</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}