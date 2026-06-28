import React from "react";
import '../Slider/Slider.scss';


export default function BSlider ({openModal, modalIndex}){
    return(
        <button onClick={openModal} className="bSlider">
            {modalIndex===false ? "Описание" : "Закрыть"}
        </button>
    )
}