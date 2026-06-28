import React from "react";
import "../MyWorks/MyWorks.scss";

const MyWorks = (props) => {
    const spisok = props.spisok
    return(
        <div className="myContainer">
        <div className="myWor">Мои работы</div>
        <div className="workWrapp"> 
            {spisok.myWorks.map((ob, index)=>{
                return(
                    <div className={ob.name} key={index}>
                        <img className="workImg" src={ob.img} alt=" "/>
                    </div>
                )
            })}

        </div>
        </div>
    )
}

export default MyWorks;