import React, { useState } from "react";
import './AdminKabinet.scss'
import { Link } from "react-router-dom";
import AdminGlav from "../AdminGlav/AdminGlav";
import AdminUslugi from "../AdminUslugi/AdminUslugi";

const AdminKabinet = () => {
        const [showChild, setShowChild] = useState(false);
        const [showChildUslugi, setShowChildUslugi] = useState(false);

        const handleClick = () =>{
            setShowChild(true)
            setShowChildUslugi(false)
        }

        const handleClickUslugi = () =>{
            setShowChildUslugi(true)
            setShowChild(false)
        }
    return(
        <div className="wrapperAdmin">
           <div className="spisokUl">
            <h1>Панель управления</h1>
            
           <div className="menuAd"><a onClick={handleClick} className="sAd">Изменить профиль</a></div>
           <div className="menuAd"><a className="sAd">Список пользователей</a></div>
           <div className="menuAd"><a onClick={handleClickUslugi} className="sAd">Мои Услуги</a></div>
           <div className="menuAd"><a  className="sAd">Список заказов</a></div>
           <div className="menuAd"><a  className="sAd">Моя галерея работ</a></div>
           <div className="menuAd"><a  className="sAd">Акции</a></div>
           </div>

           <div className="spisokRight">
           {showChild && <AdminGlav/>}
           {showChildUslugi && <AdminUslugi/>}
           </div>
           
        </div>
    )
}

export default AdminKabinet;