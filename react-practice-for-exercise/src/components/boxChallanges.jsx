/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import boxes from "./boxes";
import Box from "./box";

export default function Boxchallanges(props){
    const [sqaures, setSquares] = React.useState(boxes)

    
    function toggle(id){
        // second mehod
        // setSquares(prevSquares => {
        //     const newSquares = []
        //     for(let i=0; i<prevSquares.length; i++){
        //         const currentSquare = prevSquares[i]
        //         if(currentSquare.id === id) {
        //             const updateSquares = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updateSquares)

        //         }else {
        //             newSquares.push(currentSquare)
        //         }
        //     }
        //     return newSquares
        // })

        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    
    }
  
    const sqauresElements = sqaures.map(square =>(
        <Box 
        key={square.id} 
        id={square.id}
        on={square.on}
        toggle={toggle}/>
    ))
    return (
        <main>
            {sqauresElements}
        </main>
    )
}