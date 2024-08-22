import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <span>Yan</span>
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