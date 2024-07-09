import {motion} from 'framer-motion'

const Test = () => {
    return (
        <div className="tut">
            <motion.div className="box" initial={{opacity:50, size:75}} animate={{opacity:0, width:20}} transition={{duration:2, delay:2}}></motion.div>
        </div>
    )
}

export default Test