import React, { useState } from "react";
import './Slider.scss';
import BtnSlider from "../BtnSlider/BtnSlider";






const Slider = ({spisok}) => {
    
    const[startIndex, setStartIndex] = useState(0);
    //const[modalIndex, senIndex] = useState(false)

    const ITEM_PER_SLIDE = 3

    // Проверяем, что spisok и spisok.reviews являются массивами
    const reviews = Array.isArray(spisok?.reviews) ? spisok.reviews : [];
    
    const nextSlideGroup = () => {
        
        if(startIndex - ITEM_PER_SLIDE >= 0 ){
            const nextIndex = startIndex - ITEM_PER_SLIDE;
                setStartIndex(nextIndex);
            
        } else {
            setStartIndex(Math.max(0, reviews.length - ITEM_PER_SLIDE))
        }
        
    };
    
    const prevSlideGroup = () => {
        if(startIndex - ITEM_PER_SLIDE >= 0  ){
            setStartIndex(startIndex - ITEM_PER_SLIDE)
        }else {
            setStartIndex(Math.max(0, reviews.length - ITEM_PER_SLIDE))
        }
    };

    const curretSlides = reviews.slice(startIndex, startIndex + ITEM_PER_SLIDE);

    // const openModal = () => {
    //     senIndex(!modalIndex)
    //     setSliderIndex(sliderIndex)
    // } 
    
   
    return(
        
         <div className="sliderOb">

            <div className="slider">
                 <div className="obBtn">
                    <BtnSlider  moveSlide={prevSlideGroup} direction={"prev"} />
                    <BtnSlider moveSlide={nextSlideGroup} direction={"next"} />
                </div>
        
                    <div className="flex">
                        
                        {curretSlides.map((obj, index) =>{ 
                         
                           return(
                            <div key={obj.id} className="slide">
                            
                                <div className="wrapperimg">
                                    <img src={obj.img} alt="" className="sliderImg"/>
                                </div>
                                
                                <div className="fiowrapper">
                                    <div className="firstname fio">{obj.firstname}</div>
                                    <div className="name fio">{obj.name}</div>
                                </div>
                                
                                <div className="reviewwrapper">
                                    <div className="reviews">{obj.reviews}</div>
                                </div>
                                
                                   
                            </div> 
                            
                           
                           )
                        
                           })}
                    </div>
                    


                
</div>
            
            // </div>
           
               
        
    )
}


export default Slider

                    
                    
               