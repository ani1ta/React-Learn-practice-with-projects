/* eslint-disable no-unused-vars */
import React from "react";
import './style.css'
import WindowTracker from "./WindowTracker";


export default function PracticeStateEffect(){
    const [show, setShow] = React.useState(true)

    function toggle(){
        setShow(prevShow => !prevShow)
    }

    return(
        <div className="container">
            <button onClick={toggle}> Toggle WindowTracker</button>
            {show && <WindowTracker/>}
        </div>
    )
}