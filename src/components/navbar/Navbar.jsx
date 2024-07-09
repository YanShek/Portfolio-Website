import "./Navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <span>Smth</span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt=""/></a>
                    <a href="#"><img src="/instagram.png" alt=""/></a>
                    <a href="#"><img src="/LinkedIn_icon.svg" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;