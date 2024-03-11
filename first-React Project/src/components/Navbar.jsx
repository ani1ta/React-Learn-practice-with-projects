// eslint-disable-next-line no-unused-vars
import React from "react"
import airbnb from "../images/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb}  className="nav--logo"/>
        </nav>
    )
}