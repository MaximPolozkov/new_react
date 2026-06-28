import React from "react";
import "../ButtonOnlain/ButtonOnlain.scss"
import { NavLink } from "react-router-dom";

const ButtonOnlain = () => {
    return(
        <div className="containerOnlain">
            <NavLink to="/Uslugi">
            <button className="ButtonOnlain">Запись Онлайн</button>
            </NavLink>
            
        </div>
    )
}

export default ButtonOnlain;