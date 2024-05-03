/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import blankStar from '../assets/blank star.jpg'
import filledStar from '../assets/fill star.jpg'

export default function Star(props){
    const starIcon = props.isFilled ? filledStar : blankStar
    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"
    return (
        <button onClick={props.handleClick} 
            aria-label={buttonLabel}
            aria-pressed={props.isFilled}
            className="card--favorite-button"
        >
            <img 
                src={starIcon} 
                className="card--favorite"
                
            />
        </button>
    )
}