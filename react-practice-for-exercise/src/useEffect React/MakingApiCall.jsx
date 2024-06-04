/* eslint-disable no-unused-vars */
import React from "react";

export default function MakingApiCall(){
    const [starWarData, setStarWarsData] = React.useState({})

    console.log("component rederer")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))


    return(
        <div>
            <pre>{JSON.stringify(starWarData, null, 2)}</pre>
        </div>
    )
}

