/* eslint-disable no-unused-vars */
import React from "react";
import navlogo from "../assets/Navlogo.png"

export default function Navbar(){
    return (
        <nav>
            <img src={navlogo} className="navbar--logo" />
            <h1 className="navbar--title">My Travel Journal.</h1>
        </nav>
    )
}