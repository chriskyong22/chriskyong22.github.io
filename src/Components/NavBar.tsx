import react from "react"
import { Link } from "react-router-dom"

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
                <Link to="/About">
                    About
                </Link>
                {/* <Link to="/Projects">
                    Projects
                </Link> */}
                <Link to="/Rutgers">
                    Rutgers
                </Link>
                {/* <Link to="/Books">
                    Books
                </Link> */}
                <Link to="/Learn">
                    Learning
                </Link>
                <Link to="/Contact">
                    Contact Me
                </Link>
            </div>
        </nav>
    )
}