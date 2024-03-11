/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.Setup && <h3>Setup : {props.Setup}</h3>}
            <p>Punchline : {props.Punchline}</p>
            <hr />
        </div>
    )
}