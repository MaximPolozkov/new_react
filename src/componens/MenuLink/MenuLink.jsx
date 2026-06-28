import React from 'react';
import "../AvatarKabinet/AvatarKabinet.scss"
import { Link } from "react-router-dom";

const MenuLink = ({set}) => {
    // Функция для обработки клика по пункту меню
    const handleMenuItemClick = (itemName) => {
        set(itemName); // Обновляем состояние в Header
    };
    return(
        <>
            <Link to="/AvatarKabinet" style={{textDecoration: 'none'}}>
                <li className="header__menuli" onClick={() => handleMenuItemClick('Личный кабинет')}>Личный кабинет</li>
            </Link>
            
            <Link to="/Mastera" style={{textDecoration: 'none'}}>
                <li className="header__menuli" onClick={() => handleMenuItemClick('Выбрать мастера')}>Выбрать мастера</li>
            </Link>
                                        
            <li className="header__menuli" onClick={() => handleMenuItemClick('История')}>История</li>
            <li className="header__menuli" onClick={() => handleMenuItemClick('О нас')}>О нас</li>
        </>
    )
}

export default MenuLink;