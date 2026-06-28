import React, {useState, useEffect} from 'react';
import "./Header.scss";
//import HeaderButton from '../HeaderButton/HeaderButton';
import Avatar from '../Avatar/Avatar';
//import Logo from '../Logo/Logo';
//import Photo from '../.././Images/Header.jpg';
//import HeaderCenter from '../.././Images/HeaderCenter.png';
import MenuDesktop from './MenuDesktop/MenuDesktop'
import { useLocation } from "react-router-dom";
import MenuMobile from './MenuMobile/MenuMobile';



const Header = ({setModalActive}) =>{
    const [activeMenuItem, setActiveMenuItem] = useState('Личный кабинет');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    
        // useEffect будет запускаться при изменении URL
        useEffect(() => {
            const currentPath = location.pathname;
            let newMenuItem = 'Личный кабинет'; // Значение по умолчанию
    
            // Определяем 'activeMenuItem' на основе текущего URL
            if (currentPath === '/Mastera') {
                newMenuItem = 'Выбрать мастера';
            } else if (currentPath === '/history') { // Предполагается, что у вас есть такой путь
                newMenuItem = 'История';
            } else if (currentPath === '/about') { // Предполагается, что у вас есть такой путь
                newMenuItem = 'О нас';
            }
            // Можно добавить другие условия для разных страниц
    
            setActiveMenuItem(newMenuItem); // Обновляем состояние
        }, [location.pathname]); // Зависимость - pathname, эффект сработает при его изменении

        const toggleMenu = () =>{
            setIsMenuOpen(!isMenuOpen)
        }

    return(
    <header className='header'>
        <div className='header__null'>
            <div className='header__wrapper'>

                <div className='header__wrapperlogo'>
                    <div className='header__logo'>Логотип</div>
                </div>

                <div className='header__wrappernavigation'>
                    <div className='header__navigation'>{activeMenuItem}</div>
                </div>
        
            </div>
            <Avatar setModalActive={setModalActive}/>
        </div>
            <MenuDesktop setActiveMenuItem={setActiveMenuItem}/>
            <MenuMobile setActiveMenuItem={setActiveMenuItem} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            <div className='header__buttonmenu' onClick={toggleMenu}>
                <div className='header__line'></div>
            </div>
    </header>
    );  
}

export default Header;