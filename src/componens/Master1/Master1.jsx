import React from "react";
import "./Master1.scss";


const Master1 = ({spisok}) => {
   
    return(
        <div className="Master1">
            {spisok.Logo.map((obj, index) => {
                
                return(
                <div className="ObMaster1" key={index}>
                <img className="imgMaster1" src={obj.img} alt="" />
                <button></button>
               </div>
               
                )
                
            })}
           
        </div>
    );
}

export default Master1;