/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import boxes from "./boxes";

export default function Boxchallanges(props){
    const [sqaures, setSquares] = React.useState(boxes)

    const styles = {
        backgroundColor : props.darkMode ? "#222222" : "#cccccc"
    }
    const sqauresElements = sqaures.map(square =>(
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {sqauresElements}
        </main>
    )
}