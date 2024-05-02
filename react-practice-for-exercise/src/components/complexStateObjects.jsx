/* eslint-disable no-unused-vars */
import React from "react";
import user from '../assets/user.jpg'
import blankStar from '../assets/blank star.jpg'
import filledStar from '../assets/fill star.jpg'

export default function ComplexStateObjects(){
    const [contact, setContact] = React.useState({
        firstName: "Annie",
        lastName: "Mishra",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    function toggleFavorite(){
        setContact(prevContact => {
            return {...prevContact, 
                isFavorite : !prevContact.isFavorite}
        })
    }

    let starIcon = contact.isFavorite ? filledStar : blankStar
    return (
        <main>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName } {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}