import React from "react";
import "./Login.scss";
import axios from "axios";
import { useSelector, useDispatch} from "react-redux";
import {loginSuccess, loginError, setFirstname, setEmail, setErrorMessage} from "../../redux/reducers/authReducers";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";

const Login = () => {
  const dispatch = useDispatch();
  //const auth = useSelector((state)=>state.auth)
  const {loading, 
    user, 
    error, 
    setModalActiveR, 
    modalActiveR, 
    firstname,
    email} = useSelector((state) => state.auth);
 
  const navigation = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      
        const response = await axios.post('http://localhost:5000/login/loginUser', {
            firstname,
            email
        });
       
        dispatch(loginSuccess(response.data));
        //Получаем токен из ответа
        const token = response.data.token
        //Сохраняем токен в localStorage
        localStorage.setItem('token', token)
        navigation('/');
    }catch (error){
      if (error.response && error.response.status === 400) {
        dispatch(setErrorMessage(error.response.data.message));
        //console.log(setErrorMessage);
      }else{
        if (error.response && error.response.status === 404){
          console.log('Ошибка при отправке данных:', error);
          dispatch(loginError(error.message || 'Произошла ошибка при входе'));
        }
      }
      
    }
  }

    return(
        <div className="wrapperLogin">
          {!loading && !user &&(
            <>           
            <form className="form" onSubmit={handleSubmit}>
      <div className="title">Добро пожаловать</div>
      <div className="subtitle">Войдите в вашу учетную запись!</div>
      <div className="input-container ic1">
       <input id="firstname" className="input"   
        value={firstname} 
        onChange={(e) => dispatch(setFirstname(e.target.value))} type="text" />
        <div className="cut">
        {error && error ? <label style={{color: 'red'}} className="placeholder">{error}</label> : <label  className="placeholder">Имя</label>}
        </div>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" 
        value={email} 
        onChange={(e) =>dispatch(setEmail(e.target.value))} type="text"/>
        <div className="cut">
        <label htmlFor="email" className="placeholder">Электронная почта</label>
        </div>
        
      </div>
      <button type="text" className="submit">Отправить</button>
    </form>
    
      {!loading && !user && modalActiveR && setModalActiveR &&(
          <Modal active={modalActiveR} setActive={setModalActiveR}>
          <Registration/>
        </Modal>
      )}
      </>
          )}
    {/*{!loading && !user && error && <p>Ошибка: {error}</p>}*/}
        </div>
    )
    
}

export default Login;