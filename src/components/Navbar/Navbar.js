import React from "react";
import { MenuItems } from "./MenuItems"
import './Navbar.css'

function Navbar() {



        return (
                <nav className="NavbarItems">
                        <h2 className="navbar-name">Blake Hyland</h2>

                        <ul className='nav-menu'>
                                {MenuItems.map((item, index) => {
                                        return (
                                                <li key={index}>
                                                        <a className={item.cName} href={item.url}>
                                                                {item.title}
                                                        </a>
                                                </li>
                                        )
                                })}
                        </ul>
                </nav>
        )
}

export default Navbar