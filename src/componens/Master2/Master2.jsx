import React from "react";
import './Master2.scss'
import { NavLink } from "react-router-dom";


const Master2 = ({spisok}) => {
    return(
        <div className="Master2">
           {spisok.Logo.map((ob, index) => {

return(
<div className="ObMaster2" key={index}>
<div className="nameMaster2">{ob.name}</div>
<img className="imgMaster2" src={ob.img} alt="" />
<nav>
    <NavLink to="/Main2">
    <button className="buttonMaster2">{ob.buttomName}</button>
    </NavLink>

</nav>

</div>

)

})}
    
    

        </div>
    );
}

export default Master2;