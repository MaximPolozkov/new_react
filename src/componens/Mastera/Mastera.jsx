//import React from "react";
import './Mastera.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";


const Mastera = ({spisok}) =>{
    const navigate = useNavigate();

    const handleButtonClick = (masterData) => {
        navigate('/Main', {state: masterData});
    }
    return (
        <>
            <Header />
            <div className="mastera">
                <div className="mastera__wrapper">
                    {spisok.Mastera.map((ob, index) => {
                        return(
                        <div className="mastera__index" key={index}>

                            <div className="mastera__dop">
                                <div className="mastera__wrapperimg">
                                    <img className="mastera__img" src={ob.img} alt="" />
                                </div>

                            <div className="mastera__name">{ob.firstname}</div>
                            <div className="mastera__name">{ob.name}</div>
                            <div className="mastera__name">{ob.midle}</div>

                                <button className="mastera__button"
                                onClick={() => handleButtonClick({
                                        id:ob.id,
                                        firstname: ob.firstname,
                                        name: ob.name,
                                        midle: ob.midle,
                                        img: ob.img,
                                        slider: ob.slider,
                                        myWorks: ob.myWorks,
                                        reviews: ob.reviews,
                                    })}>{ob.buttomName}
                                    
                                </button>

                            </div>          

                                </div>
                        )
                    })}
                        

                            </div>
                        </div>
                            <Footer/>
                            </>
    
)
}

export default Mastera;