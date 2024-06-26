/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

// eslint-disable-next-line no-unused-vars
import React from "react"

import reactLogo from "../images/react-logo1.png";

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} alt="React Logo" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}
