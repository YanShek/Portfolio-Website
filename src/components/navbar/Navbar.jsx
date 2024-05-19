import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
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