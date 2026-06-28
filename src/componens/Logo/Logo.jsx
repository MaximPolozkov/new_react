import React from "react";

import LogoIm from "../../Images/Logo.jpg";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
    return(
        <div className="Logo">
            <Link to="/">
            <div className="LogoImg">
                <img src={LogoIm} alt="" className="Img"/>
            </div>
            </Link>
        </div>
    );
}

export default Logo;