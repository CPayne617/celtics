import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav-bar">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/players">Players</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar