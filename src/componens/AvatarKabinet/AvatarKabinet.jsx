import React, { useEffect, useState } from "react";
import "./AvatarKabinet.scss"
//import { Link } from "react-router-dom";
import axios from "axios";
import {jwtDecode as jwt_decode} from 'jwt-decode';
import photo from '../../Images/no photo.webp';
import Header from '../Header/Header.jsx'
//import MenuLink from "../MenuLink/MenuLink.jsx";
import { useLocation } from "react-router-dom";
import "../AvatarKabinet/Record.scss";


const AvatarKabinet = (props) => {
  const location = useLocation();

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  const [selectedService, setSelectedService] = useState([])

  useEffect(() => {
    if (location.state) {
      // Добавляем новую запись, только если она еще не существует в массиве
       setSelectedService(prevServices => {
        // Проверяем, существует ли уже такая запись (сравнивая по всем полям)
        const isDuplicate = prevServices.some(existingService =>
          JSON.stringify(existingService) === JSON.stringify(location.state)
        );
        if (!isDuplicate) {
          return [...prevServices, location.state];  // Добавляем новую запись
        }
        return prevServices; // Возвращаем текущий массив, если запись дубликат
      });
    }
  }, [location.state]);
   

    useEffect(()=>{
      
        try{
       const upload = async () =>{
        const token = localStorage.getItem('token');
        if (token) {
          const decoded = jwt_decode(token);
          const userId = decoded.userId;

          const response = await axios.get(`http://localhost:5000/imagePatch/img/${userId}`, { responseType: 'blob' });
          console.log(response.data)
          const imageUrl = URL.createObjectURL(response.data);
          setImageUrl(imageUrl);

        }
       };
       upload();
          
        }catch{
          console.error('Error fetching image:', error);
        }

    }, [])

    const handleImageChange = async (event) => {
      //setImageFile(event.target.files[0]);

      const file = event.target.files[0];
  if (file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Пожалуйста, выберите файл изображения (JPG, PNG, WEBP).');
      // Очищаем значение input'а, чтобы при повторном выборе того же невалидного файла
      // событие onChange не сработало.
      event.target.value = null;
      return; // Прерываем выполнение, если файл не изображение
    }
    setImageFile(file);
    // Создаем URL для предварительного просмотра
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  }
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!imageUrl){
        setError("Пожалуйста, выберите изображение");
      if(photo){
        setError(null)
      }
        return;
      }

      setError(null);

      try {
        //Проверяем наличие токена в localStorage
        const token = localStorage.getItem('token');
        if (!token){
          throw new Error('Токен не найден');
        }

        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await axios.post('http://localhost:5000/upload/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
       
        if (response.data) {
          const errorData = response.data;
          console.log(errorData.message);
        }else{
          throw new Error('Реакция сети была не в порядке')
        }
      
        const data = response.data;
        console.log(data.message);

      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        
      }
    };

    const triggerInputClick = () => {
      document.getElementById('fileInput').click();
    };


    return(
    <>
       {/* <h1 className="h1">Личный кабинет</h1> */}
       <Header />
        <div className="avatar">
            <div className="avatar__form"> 
            <form className="avatar__Img" onSubmit={handleSubmit}>
                <div className="avatar__winImg">
                    {setImageUrl && <img src={imageUrl || photo} alt="" />}
                    <input id="fileInput" type="file" onChange={handleImageChange} style={{display: 'none'}}/>
                    <button onClick={triggerInputClick}>Выберите изображение</button>
                    {error && <div style={{color: 'red'}}>{error}</div>}
                    <button type="submit">Подтвердить</button>
                </div>

                <div className="avatar__datauser">
                  <div className="avatar__fiowrapper">
                  <div className="avatar__fio">Фамилия</div>
                  <div className="avatar__fio">Имя</div>
                  <div className="avatar__fio">Отчество</div>
                </div>

                  <div className="avatar__contactwrapper">
                    <div className="avatar__contact">Тлефон:</div>
                    <div className="avatar__contact">Эл. адрес:</div>
                  </div>

                  <div className="avatar__change">
                    <li className="avatar__changeli">Редактировать профиль</li>
                    <li className="avatar__changeli">Изменить пароль</li>
                  </div>

                </div>
                

            </form>

            <div className="avatar__wrapperzapisi">
              <h1>Прошлые записи</h1>
              <table className="avatar__zapisicontent">
                <tr className="avatar__zapisiwrapper">
                  <th className="avatar__zapisi">Мстер</th> 
                  <th className="avatar__zapisi">Название услуги</th>
                  <th className="avatar__zapisi">Цена</th>
                  <th className="avatar__zapisi">Дата посещения</th>
                </tr>

                <tr className="avatar__zapisiwrapper">
                  <td className="avatar__zapisi">Имя</td>
                  <td className="avatar__zapisi">Название</td>
                  <td className="avatar__zapisi">200</td>
                  <td className="avatar__zapisi">Дата</td>
                </tr>
              </table>
            </div>

            </div>
            
            <div className="record">
              <table className="record__table">
                {/* <div className="record__current"> */}
                  <tr className="record__tr">
                    <th className="record__header">Изображение</th>
                    <th className="record__header">ФИО</th>
                    <th className="record__header">Название услуги</th>
                    <th className="record__header">Дата</th>
                    <th className="record__header">Время</th>
                  </tr>

                 

                    {selectedService.map((record, index) =>{
                        return (
                           <tr key={index} className="record__tr">
                        <td className="record__content">
                          <img src={record.img} alt="" />
                        </td>
                        <td className="record__content">{`${record.firstname} ${record.name} ${record.midle}`}</td>
                        <td className="record__content">{record.nameUslugi}</td>
                        <td className="record__content">{`${record.number}.${record.month}.${record.year}`}</td>
                        <td className="record__content">{record.time}</td>
                          </tr>
                        )
                    })}

                    {selectedService.length === 0 && (
                      <tr className="record__tr">
                        <td colSpan="5" className="record__content">Нет записей</td>
                      </tr>
                    )}
                    
                    
                 
              </table>
            </div>
        </div>
        </>
    );
}

export default AvatarKabinet;