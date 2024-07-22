import {motion, stagger} from "framer-motion"

const variants = {
    open:{
        transition: {
            staggerChildren: 0.15,
        }
    },
    closed:{
        transition: {
            staggerChildren: 0.07,
            staggerDirection: -1,
        }
    }
}

const itemVariants = {
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        y: 100,
        opacity:0,
    }
}

const Links = ({open}) => {

    const items = [
        "Home", "About", "Portfolio", "Contact"
    ]


  return (
    <motion.div className="links" variants={variants}>
    {items.map(item => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale: 0.95}}>{item}</motion.a>
    ))}
    </motion.div>
  )
}

export default Links