/* eslint-disable no-unused-vars */
import React from "react";
import jokesData from "./jokesData";
import Joke from "./jokes";

export default function ConditionalRendering(){
    const jokesElement = jokesData.map(joke =>  {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })

    return (
        <div>
            {jokesElement}
        </div>
    )
}