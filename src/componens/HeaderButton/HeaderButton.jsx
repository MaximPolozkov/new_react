import React from "react";
import spisok from "../../spisoki_array";
import "./HeaderButton.scss";

const HeaderButton = () => {
    return(
        <div className="HeaderButton">
            { spisok.spisokMenu.map((menu) => <button key={menu.id} className="buttonHeader">{menu.nameMenu}</button> )}
        </div>
    );
}

export default HeaderButton;