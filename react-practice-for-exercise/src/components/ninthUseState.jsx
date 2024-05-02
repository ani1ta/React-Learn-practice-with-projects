/* eslint-disable no-unused-vars */
import React from "react";

export default function NinthUsestate(){
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know??</h1>
            <button className="state--value" onClick={changeMind}>
                {isGoingOut ? "Yes" : "No"}
            </button>
        </div>
    )
}