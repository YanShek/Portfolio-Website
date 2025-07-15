import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = ({displayText}) => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <span>{displayText}</span>
                <div className="social">
                    <a href="https://https://github.com/YanShek" target="_blank"><img src="github.svg" alt="GitHub"/></a>
                    <a href="https://www.linkedin.com/in/yan-shek-609369309" target="_blank"><img src="/LinkedIn_icon.svg" alt="LinkedIn"/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;