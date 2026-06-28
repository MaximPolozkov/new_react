import React, { useEffect, useState } from "react";
import "../Main/Main.scss"
import Slider from "../Slider/Slider"
import MyWorks from "../MyWorks/MyWorks";
//import ButtonOnlain from "../ButtonOnlain/ButtonOnlain";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import Uslugi from "../Uslugi/Uslugi";
import BlockList from "../BlockList/BlockList";
import Price from "../Price/Price";

const Main = () =>{
    const location = useLocation();
    const [masterData, setMasterData] = useState(null);
    const [menuUslugi, setMenuUslugi] = useState(false)

    const[menuBlock, setMenuBlock] = useState(false)
    const [contentData, setContentData] = useState(null);
    const [contentType, setContentType] = useState(null);

    const handleBlock = (type) => {
        let data = null;
        switch(type) {
            case 'works':
                data = masterData
                break;
            case 'reviews':
                data = masterData;
                break;
            case 'price':
                data = masterData;
                break;
        }
        setContentData(data)
        setContentType(type)
        setMenuBlock(true)
    }

    const handleClick = () => {
        setMenuUslugi(true)
    }

    useEffect(() =>{
        if(location.state) {
            setMasterData(location.state);
        }
    }, [location.state])
    return(
        <>

            <Header />
            <div className="main">
                <div className="main__wrapper">
                {masterData ? (
                    <>
                        <div className="main__wrapperimg" key={masterData.id}>
                            <img src={masterData.img} alt="" />
                        </div>

                        <div className="main__wrapperfio">
                            <div className="main__fioob">
                                <div className="main__fio">{masterData.firstname}</div>
                                <div className="main__fio">{masterData.name}</div>
                                <div className="main__fio">{masterData.midle}</div>
                            </div>

                            <div className="main__uslugi">
                                <li className="main__li" onClick={() => handleClick()}>Запись на встречу</li>
                                <li className="main__li" onClick={() => handleBlock('works')}>Мои работы</li>
                                <li className="main__li" onClick={() => handleBlock('review')}>Отзывы</li>
                                <li className="main__li" onClick={() => handleBlock('price')}>Прайс лист</li>
                            </div>
                            
                        </div>   
            
                    </>
                ) : (
                    <p>Выберите мастера</p>
                )}

                 

                 {/*<ButtonOnlain/>
            <Slider spisok={spisok.Master2.slider}/>
            <MyWorks spisok={spisok.Master2.myWorks}/> */}

            {menuUslugi && (
                <Modal
                    active={menuUslugi}
                    setActive={setMenuUslugi}
                    children={<Uslugi spisok={masterData}/>} 
                />
            )}

            
                </div>
                <div className="main__menublock">
                {menuBlock && (
                    <BlockList active = {menuBlock} setActive={setMenuBlock}>
                
                    {contentType === 'works' && <MyWorks spisok={masterData} />}
                    {contentType === 'review' && <Slider spisok={masterData} />}
                    {contentType === 'price' && <Price spisok={masterData}/>}
                    
                 </BlockList>
                )}
                
            </div>
            </div>

            
        </>
        
    )
}

export default Main;