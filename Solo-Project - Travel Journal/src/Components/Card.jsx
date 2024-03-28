/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import pin from '../assets/pin.png'

export default function Card(props) {

    return (
        <div className="card">
            <div className="card--container">
                <img src={props.imageUrl} className="card--image" />
            
            <div className="card__text--container">
                <div className="card__location--container">
                    <img src={pin} className="card--pin" />
                    <h2 className="card__location--location">{props.location}</h2>
                    <a href={props.googleMapsUrl}  target="_blank" rel="noopener noreferrer" className="card__location--link">
                        View on Google Maps    
                    </a>
                </div>
                    <h1 className="location--title">{props.title}</h1>
                    <p className="location--Date">{props.date}
                    </p>
                    <p className="location--decription">{props.description}</p>
                </div>
            </div>
            <hr className="card__line" />
        </div>
    )
}
