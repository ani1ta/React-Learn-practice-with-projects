/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

export default function Joke(props){
    
    const [isShown, setIsShow] = React.useState(false)
    function toggleShown(){
        setIsShow(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p> }
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </div>
    )
}