/* eslint-disable no-unused-vars */
import React from "react";

export default function MakingApiCall(){
    const [starWarData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    console.log("component rederer")

    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))


    // side effect


    React.useEffect(function (){
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/1")
        // .then(res => res.json())
        // .then(data => setStarWarsData(data))
    }, [count])


    return(
        <div>
            <pre>{JSON.stringify(starWarData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>ADD</button>
        </div>
    )
}

