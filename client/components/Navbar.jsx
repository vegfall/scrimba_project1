import React from "react";
import react_logo from "./../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav className="navbar_nav">
            <img src={react_logo} className="navbar_react_logo" alt="react logo"/>
            <h3 className="navbar_h3">ReactFacts</h3>
            <h4 className="navbar_h4">React Course - Project 1</h4>
        </nav>
    )
}