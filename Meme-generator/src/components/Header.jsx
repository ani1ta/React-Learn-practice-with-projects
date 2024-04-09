/* eslint-disable no-unused-vars */
import React from "react"
import trollFace from "../assets/Troll Face.png"

export default function Header(){
    return (
        <Header>
            <img src={trollFace} className="header--img"  />
            <h2 className="header-title">Meme generator </h2>
            <h4 className="header--project">React course - Project 3</h4>
        </Header>
    )
}