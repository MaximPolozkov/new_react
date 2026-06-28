import React from "react";
import AvatarJPG from "../../Images/Avatarka.jpg";
import { Link} from 'react-router-dom';
import "./Avatar.scss";


const Avatar = () => {
    return(
    <div className="avatarheader">
        <div className="avatarheader__wrapper">
            <h1>Фамилия Имя</h1>
        </div>
        
        <div className="avatarheader__logo">
            <img src={AvatarJPG} alt="" className="avatarheader__img"></img>
        </div>
        <div className="avatarheader__link">

        </div>
    </div>
    
        
    );
}

export default Avatar;