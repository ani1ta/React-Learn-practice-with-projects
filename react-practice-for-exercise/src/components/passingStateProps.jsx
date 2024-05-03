/* eslint-disable no-unused-vars */
import React from "react";
import Count from "./count";
export default function PassingStateProps(){

    const [count, setCount] = React.useState(0)

    function add(){
        setCount(count + 1)
    }
    function subtract(){
        setCount(count - 1)
    }

    return(
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}