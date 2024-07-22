import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 1}}>Smth</motion.span>
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