/* eslint-disable no-unused-vars */
import React from "react";

export default function EighthUsestate(){
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */

    const isGoingOut = true

    // let answer
    // if(isGoingOut === true){
    //     answer = "Yes"
    // }else{
    //     answer = "No"
    // }

    // let answer = isGoingOut ? "Yes" : "No"
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know??</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}