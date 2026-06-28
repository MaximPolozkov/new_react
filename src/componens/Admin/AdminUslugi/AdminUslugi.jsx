import React from 'react';
import '../../AvatarKabinet/AvatarKabinet.scss'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, setdiskript, setnameUslugi, setprice, settimes } from '../../../redux/reducers/authReducers';
import axios from 'axios';
import SpisokUslug from './SpisokUslug';
import {jwtDecode as jwt_decode} from 'jwt-decode'

const AdminUslugi = () => {
    const dispatch = useDispatch();
    const {
        nameUslugi,
        price,
        diskript,
        times,
        admin_id
    } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
        if (token) {
          const decoded = jwt_decode(token);
          const userId = decoded.userId.toString();
        
            dispatch(loginRequest());
            const response = await axios.post('http://localhost:5000/uploadUslugi/loadUslugi',{
                nameUslugi,
                price,
                diskript,
                times,
                admin_id: userId
            });
            console.log(response.data);
        }
           
        }catch(error){
            console.log('Ошибка при отправке данных:', error)
        }
    }
    return(
        <div className='adminUslugi'>
            <h1>Услуги предостовляемые мной</h1>
            <div className='uslugiLoad'>
                
                <form className='adminLoadUslugi' onSubmit={handleSubmit}>
                <h1>Добавить услуги</h1>
                    <input 
                    type="text" 
                    placeholder='Название услуги'
                    value={nameUslugi}
                    onChange={(e) => dispatch(setnameUslugi(e.target.value))}
                    />

                    <input type="file" />

                    <input type="text" 
                    placeholder='Цена'
                    value={price}
                    onChange={(e) => dispatch(setprice(e.target.value))}
                    />

                    <input type="text" 
                    placeholder='Описание'
                    value={diskript}
                    onChange={(e) => dispatch(setdiskript(e.target.value))}
                    />

                    <input type="text" 
                    placeholder='Время за которое выыполнится услуга'
                    value={times}
                    onChange={(e) => dispatch(settimes(e.target.value))}
                    />

                    <button type='submit'>Добавить</button>
                </form>

           <SpisokUslug/>
            </div>
        </div>
    )
}

export default AdminUslugi;