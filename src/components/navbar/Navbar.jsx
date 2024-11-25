import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = ({displayText}) => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <span>{displayText}</span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt=""/></a>
                    <a href="https://www.instagram.com/yellow_ice_cube_tray/"><img src="/instagram.png" alt=""/></a>
                    <a href="www.linkedin.com/in/yan-shek-609369309"><img src="/LinkedIn_icon.svg" alt="LinkedIn"/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;