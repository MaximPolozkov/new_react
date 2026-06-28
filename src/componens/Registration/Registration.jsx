import React, { useState } from "react";
import "./Registration.scss";
import axios from "axios";
import { loginRequest, 
  loginSuccess, 
  loginError, 
  setFirstname,
  setLastname,
  setMidlename,
  setEmail } from "../../redux/reducers/authReducers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Registration = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { loading, 
    user, 
    error,
    firstname,
    lastname,
    midlename,
    email} = useSelector((state) => state.auth);

  //const [firstname, setFirstname] = useState(' ');
  //const [lastname, setLastname] = useState(' ');
  //const [midlename, setMidlename] = useState(' ');
  //const [email, setEmail] = useState(' ');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginRequest());
      const response = await axios.post('http://localhost:5000/reguser/registrationUsers', {
        firstname,
        lastname,
        midlename,
        email
      });
      dispatch(loginSuccess(response.data));
      navigation('/');
    }catch (error) {
      console.log('Ошибка при отправке данных:', error);
      dispatch(loginError(error.message || 'Произошла ошибка при регистрации'));
    }
  } 
    return(
        <div className="wrapperLogin">
            <form className="form" onSubmit={handleSubmit}>
      <div className="title">Добро пожаловать</div>
      <div className="subtitle">Давайте создадим вашу учетную запись!</div>
      
      <div className="input-container ic1">
        <input id="firstname" 
        className="input"  
        value={firstname} 
        onChange={(e) => dispatch(setFirstname(e.target.value))} 
        type="text"  />
        <div className="cut"></div>
        <label  className="placeholder">Имя</label>
      </div>
      
      
      <div className="input-container ic2">
        <input id="lastname" 
        className="input" 
        value={lastname} 
        onChange={(e) => dispatch(setLastname(e.target.value))}  
        type="text" 
        placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="lastname"  className="placeholder">Фамилия</label>
      </div>

      <div className="input-container ic2">
        <input id="midlename" 
        className="input"  
        value={midlename} 
        onChange={(e) => dispatch(setMidlename(e.target.value))} 
        type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="midlename" className="placeholder">Отчество</label>
      </div>

      <div className="input-container ic2">
        <input id="email" 
        className="input" 
        value={email} 
        onChange={(e) => dispatch(setEmail(e.target.value))} 
        type="text" 
        placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Электронная почта</label>
      </div>

      <button type="text" className="submit">Отправить</button>
    </form>

    {!loading && user && (
      <p>Вы успешно зарегестрировались! <a href="/">перейти на главную страницу</a></p>
    )}
    {!loading && !user & error && <p>Ошибка: {error}</p>}
        </div>
    )
    
}

export default Registration;