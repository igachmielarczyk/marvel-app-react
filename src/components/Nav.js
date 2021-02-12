import React, {useState} from 'react';
import './Nav.css';
import { Link} from 'react-router-dom';
import logo from '../img/marvel-logo.png';

const Nav = () => {

    const [openMenu, setOpen] = useState("");
    const [closeMenu, setClose] = useState("")

    const toggleOpenMenu = () => {
        setOpen("open");
        setClose("");
    }

    const toggleCloseMenu = () => {
        setClose("colse");
        setOpen("");
    }
    
    return (
        <nav className="Nav main-nav">
            <div className="container">
                <div className="main-nav-holder">
                    <a href="" className="brand"><img src={logo} alt=""/></a>

                    <div className="mobile-hamburger" onClick={toggleOpenMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className={"open-menu-holder " + openMenu + closeMenu}>
                        <div className="mobile-close" onClick={toggleCloseMenu}>
                            <i className="fas fa-times"></i>
                        </div>
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to="/">Movie</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/comics">Comics</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/characters">Characters</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
