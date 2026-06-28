import axios from "axios";
import React, { useEffect, useState } from "react";
import '../AdminKabinet/AdminKabinet.scss';

const SpisokUslug = () =>{
    const [myArry, setMyArry] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    useEffect(()=>{

        try{
            const load = async () =>{
                const response = await axios.get('http://localhost:5000/get/getUslugi');
                setMyArry(response.data)   
    
            };
            load();
           
        }catch(error){
            console.log('Ошибка при запросе услуг', error);
        }

    }, [myArry])

    const handleEditClick = (item) => {
        setEditingItem(item);
      };
    
      const handleSaveClick = async (item) => {
        try{
            const updateItem = {
                 // Собираем данные из инпутов
        id: item.id,
        nameUslugi: document.getElementById('nameUslugi-' + item.id).value,
        price: document.getElementById('price-' + item.id).value,
        diskript: document.getElementById('diskript-' + item.id).value,
        times: document.getElementById('times-' + item.id).value,
            }

            //Отправка запроса PUT для оновления в бд 
            const response = await axios.put(`http://localhost:5000/update/updateUslugi/${item.id}`, updateItem);
            
            //Обновление массива в состояние (optional)
            const updateArry = myArry.map(el => {
                if(el.id === item.id) {
                    return updateItem; 
                } else{
                    return el;
                }
            });
            setMyArry(updateArry);
            // После обновления записей, сбросьте состояние editingItem
            setEditingItem(null);

        }catch(error){
            console.error('Ошибка при обновлении услуги:', error);
        }
       
      };

      const handleDeleteClick = async (item) => {
        try {
          // Отправка DELETE запроса на сервер
          const response = await axios.delete(`http://localhost:5000/deleteUslugi/delete/${item.id}`);
    
          // Обновление массива в состоянии
          const updatedArry = myArry.filter(el => el.id !== item.id); 
          setMyArry(updatedArry);
    
        } catch (error) {
          console.error('Ошибка при удалении услуги:', error);
        }
      };
    
      const renderItem = (item) => {
        if (editingItem && editingItem.id === item.id) {
          return (
            <div key={item.id} className='spisokUslug'>
              <div className="spisokTable">Название
                <input type="text"
                id={`nameUslugi-${item.id}`} 
                defaultValue={item.nameUslugi} />
              </div>
              <div className="spisokTable"> Цена
                <input type="text"
                id={`price-${item.id}`} 
                defaultValue={item.price} />
              </div>
              <div className="spisokTable"> Описание
                <textarea defaultValue={item.diskript} 
                id={`diskript-${item.id}`}
                />
              </div>
              <div className="spisokTable"> Время выделенное на услугу в минутах
                <input type="text" 
                id={`times-${item.id}`}
                defaultValue={item.times} />
              </div>
              <button onClick={() => handleSaveClick(item)}>Сохранить</button>
              <button onClick={() => setEditingItem(null)}>Отмена</button>
            </div>
          );
        } else {
          return (
            <div key={item.id} className='spisokUslug'>
              <div className="spisokTable">Название
                <div>{item.nameUslugi}</div>
              </div>
              <div className="spisokTable"> Цена
                <div>{item.price}</div>
              </div>
              <div className="spisokTable"> Описание
                <div>{item.diskript}</div>
              </div>
              <div className="spisokTable"> Время выделенное на услугу в минутах
                <div>{item.times}</div>
              </div>
              <button onClick={() => handleEditClick(item)}>Изменить</button>
              <button onClick={() => handleDeleteClick(item)}>Удалить</button>
            </div>
          );
        }
      };
    
      return (
        <div className='uslugi'>
          {myArry.map((item) => renderItem(item))}
        </div>
      );
    };
    


export default SpisokUslug;