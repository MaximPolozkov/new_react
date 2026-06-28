

import "./../Header.scss"
import MenuLink from '../../MenuLink/MenuLink';

const MenuDesktop = ({ setActiveMenuItem }) =>{
    
    return(
        <div className='header__menudesktop'>
                <MenuLink set = {setActiveMenuItem} />
        </div>
    );
}

export default MenuDesktop;