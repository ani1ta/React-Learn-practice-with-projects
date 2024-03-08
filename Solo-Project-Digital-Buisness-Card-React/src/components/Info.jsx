// eslint-disable-next-line no-unused-vars
import React from 'react'
import img1 from "../images/profile-pic.jpg";

export default function Info(){
    return(   
        <div className= "info-section" >
            <img src={img1} alt=""/>
            <h1>Anita Mishra</h1>
            <p>Frontend Developer</p>
            <div className="site-domain">
             <a href="https://anita-s-portfolio.netlify.app/" target='_blank' >anitamishra.website</a>
            </div>
            <div className="header-btn">   
                <a className="first-btn" href="mailto: b21anitamishra@gmail.com">    
                    <p><i className="fa-solid fa-envelope"></i>Email</p>
                </a>
                <a className="second-btn" href="https://www.linkedin.com/in/anita-mishra-812092193/" target='_blank'>    
                    <p><i className="fa-brands fa-linkedin"></i>Linkedln</p>
                </a>
            </div>
        </div>
    )
}