import React, { useState } from "react";
import no_photo from '../../../Images/no photo.webp'; 
import '../AdminKabinet/AdminKabinet.scss'

const AdminGlav = () =>{
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  }
    return(
        <div className="glawWrapper">

            <form className="glawContent">
                <div className="glawCenter">
                <div className="glawImg">
                { selectedFile ? ((<img src={URL.createObjectURL(selectedFile)} alt="" />)) : ( <img src={no_photo} alt=""/>)}
                <input type="file" id="file-upload" onChange={handleFileChange}/>
                <button type="button" onClick={() => document.getElementById('file-upload').click()}>Выберите фаил</button>
                </div>
                <div className="glawFio">
                    <input type="text" placeholder="Имя"/>
                    <input type="text" placeholder="Фамилия"/>
                    <input type="text"  placeholder="Отчество"/>
                    <input type="text" placeholder="Электронный адрес"/>
                    <input type="text" placeholder="Изменить пароль" />
                </div>
                </div>
                
                <button type="submit">Изменить</button>
            </form>
        </div>
    )
}

export default AdminGlav;