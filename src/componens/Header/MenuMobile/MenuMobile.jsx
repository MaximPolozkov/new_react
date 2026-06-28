import "../Header.scss";
import MenuLink from "../../MenuLink/MenuLink";
import { useState } from "react";

const MenuMobile = ({ setActiveMenuItem, setIsMenuOpen, isMenuOpen }) => {
    //const [closeMenu, setCloseMobile] = useState(true)

    const handleClose = () => {
        setIsMenuOpen(false)
    }
    return(
        <div className={`header__menumobile ${isMenuOpen ? 'header__activemobiolemenu': 'header__menumobile'}`}>
            
            <div className="header__closemenumobile">
                <div className="header__closewrapper" onClick={handleClose}>
                    <div className="header__close-right"></div>
                    <div className="header__close-left"></div>
                </div>
            </div>
            
            <MenuLink set = {setActiveMenuItem}/>
        </div>
    )
}

export default MenuMobile;