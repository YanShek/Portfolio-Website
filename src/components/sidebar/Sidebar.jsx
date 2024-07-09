import "./sidebar.scss"
import { motion } from "framer-motion"

const Sidebar = () => {
    return <div className="sidebar"> 
    <motion.div className="optionBox" initial={{opacity:50, size:75}} onHoverStart={{}} transition={{duration:2, delay:2}}></motion.div> 
    </div>
}

export default Sidebar