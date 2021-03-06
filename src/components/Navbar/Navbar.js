import React, { useState } from "react";
import { MenuItems } from "./MenuItems"
import './Navbar.css'

function Navbar({ setCurrentPage, title,  currentPage }) {

        const [switchToggle, setSwitchToggle] = useState(false)
        const [currentTitle, setCurrentTitle] = useState(MenuItems[0].title)

        function renderTitle() {
                switch (currentTitle) {
                        case 'Projects':
                                return "Projects"
                        case 'Contact':
                                return "Contact Me"
                        case 'Resume':
                                return "Resume"
                        default:
                                return "About"
                }
        }

        const ToggleSwitch = () => {
                switchToggle ? setSwitchToggle(false) : setSwitchToggle(true)

        }

        return (<div>
                <nav className="NavbarItems">
                        <h2 className="navbar-name">{title}</h2>
                        <a href="#" className="toggle-button" onClick={ToggleSwitch}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                        </a>
                        <div className={((switchToggle) ? "mobile-links" : "navbar-links")}>
                                <ul >
                                        {MenuItems.map((item, index) => {
                                                return (
                                                        <li key={index} 
                                                        >
                                                                <a
                                                                        className={"nav-links" + " " +
                                                                                ((currentPage === item.title) ? "Active" : "")
                                                                        }

                                                                        href={item.url}
                                                                        onClick={() => { setCurrentPage(item.title); setCurrentTitle(item.title) }}

                                                                >
                                                                        {item.title}
                                                                </a>
                                                        </li>
                                                )
                                        })}
                                </ul>
                        </div>
                </nav>
                <h1 className={((switchToggle) ? "mobile-hero-text" : "hero-text")}>{renderTitle()}</h1>
        </div>
        )
}

export default Navbar