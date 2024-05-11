/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import boxes from "./boxes";
import Box from "./box";

export default function Boxchallanges(props){
    const [sqaures, setSquares] = React.useState(boxes)

  
    const sqauresElements = sqaures.map(square =>(
        <Box key={square.id} on={square.on}/>
    ))
    return (
        <main>
            {sqauresElements}
        </main>
    )
}