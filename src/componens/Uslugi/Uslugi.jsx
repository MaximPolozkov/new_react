import React, { useState } from "react";
import "./Uslugi.scss"
import Calendar from "../Calendar/Calendar";
import Modal from "../Modal/Modal";
// import { useNavigate } from "react-router-dom";




const Uslugi = ({spisok}) =>{
    // const navigate = useNavigate();
    const [modalActiveCalendar, setModalActiveCalendar] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const [transmittedData, setTransmittedData] = useState(null);

    

    
    const openModal = (id) => {
        const dataToSend  = {
        name: spisok.name,    
        firstname: spisok.firstname,
        midle: spisok.midle,
        img: spisok.img,
    }

    setTransmittedData(dataToSend)
         setCurrentId(id);
        setModalActiveCalendar(true);
      };

    //   const uslugiHandleClick = (uslugaData) => {
    //      navigate('/AvatarKabinet', {
    //         state: {
    //             nameUslugi: uslugaData.nameUslugi,
    //             name: spisok.name,
                
    //             firstname: spisok.firstname,
    //             midle: spisok.midle,
    //             img: spisok.img,
    //         }
            
    //      });
    //   }

    
    return(
       
        <div className="uslugi">
            <h1 className="uslugi__h1">Выбрать услугу</h1>
            {spisok.slider.map((ob, index) =>{  
                return(
                    <div className="uslugi__wrapperuslugi" key={index} onClick={() => openModal(ob.id, spisok)}>
                        <button className="uslugi__buttonuslugi"  key={index}

                            // onClick={() => uslugiHandleClick({
                            //     nameUslugi: ob.nameUslugi,
                            // })}
                        >{ob.nameUslugi}  <span>{ob.price}</span></button>
                        
                    </div> 
                )
            })}
            
            {modalActiveCalendar && (
                        <Modal 
                        active={modalActiveCalendar} 
                        setActive={setModalActiveCalendar}
                        children={<Calendar key={currentId} {...spisok.slider.find((item) => item.id === currentId)}  trans={transmittedData}/>}
                        />
                          
                        
                      )}
        </div>
    );
    
}
export default Uslugi;