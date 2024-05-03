/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import blankStar from '../assets/blank star.jpg'
import filledStar from '../assets/fill star.jpg'

export default function Star(props){
    const starIcon = props.isFilled ? filledStar : blankStar
    return (
        <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={props.handleClick}
                    />
    )
}