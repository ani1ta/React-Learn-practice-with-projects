/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Joke(props) {
    console.log(props.comments)
    return (
        <div>
            {props.setup && <h3>Setup : {props.setup}</h3>}
            <p>Punchline : {props.punchline}</p>
            <hr />
        </div>
    )
}