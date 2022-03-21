import react from "react"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <svg viewBox="0 0 50 25">
                <circle 
                    className="circle-one"
                    r="8px" 
                    cx="8"
                    cy="12.5"
                    fill="red">
                </circle>
                <circle 
                    className="circle-two"
                    r="8px" 
                    cx="25" 
                    cy="12.5" 
                    fill="green"
                >
                </circle>
                <circle 
                    className="circle-three"
                    r="8px"
                    cx="42"
                    cy="12.5"
                    fill="blue"
                >
                </circle>
            </svg>
            <div className="nav-links">
                <NavLink  to="/About">
                    About
                </NavLink>
                {/* <NavLink to="/Projects">
                    Projects
                </NavLink> */}
                <NavLink to="/Rutgers">
                    Rutgers
                </NavLink>
                {/*<NavLink to="/Books">
                    Books
                </NavLink> */}
                <NavLink to="/Learn">
                    Learning
                </NavLink>
                <NavLink to="/Contact">
                    Contact Me
                </NavLink>
            </div>
        </nav>
    )
}