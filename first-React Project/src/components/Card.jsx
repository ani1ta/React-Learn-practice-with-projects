/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// import React from "react"
// import star from "../images/Star.png";

// export default function Card(props) {
//     let badgeText
//     if(props.item.openSpots === 0){
//         badgeText = 'SOLD OUT'

//     }else if(props.item.location === 'Online'){
//         badgeText = 'ONLINE'
//     }

//     return (
//         <div className="card">
//             {badgeText && <div className="cards-badge">{badgeText}</div>}
//             <img src={props.item.coverImg} className="card--image" />
//             <div className="card--stats">
//                 <img src={star} className="card--star" />
//                 <span>{props.item.stats.rating}</span>
//                 <span className="gray">({props.item.stats.reviewCount}) • </span>
//                 <span className="gray">{props.item.location}</span>
//             </div>
//             <p className="card--title">{props.item.title}</p>
//             <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
//         </div>
//     )
// }



import React from "react"
import star from "../images/Star.png";

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT'

    }else if(props.location === 'Online'){
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeText && <div className="cards-badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
