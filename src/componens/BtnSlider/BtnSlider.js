import React from "react";
import '.././Slider/Slider.scss';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function BtnSlider({direction, moveSlide, modalIndex}) {
    return(
        
        <div onClick={moveSlide} className={direction === "next" ? "dicr next" : "dicr prev"} >
            {direction ==="next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft/> }
        </div>
    )
}