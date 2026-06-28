import React, { useEffect, useState } from "react";
import "./LoginAdmin.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginError, loginSuccess, setEmail, setErrorMessage, setFirstname, setLastname, setMidlename, setPassword } from "../../../redux/reducers/authReducers";
import {jwtDecode as jwt_decode} from 'jwt-decode';

const LoginAdmin = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

	const dispatch = useDispatch();
	const {loading,
		user,
		error,
		firstname,
		lastname,
		midlename,
		email,
		password} = useSelector((state) => state.auth);

	useEffect(() => {
		if (error) {
		  setIsSignUpActive(true); 
		} 
	  }, [error]); 

	const navigation = useNavigate()

	const handleSubmitRegistration = async (e) => {
		e.preventDefault();
		try{

			const response = await axios.post('http://localhost:5000/admin/registrationadmin', {
				firstname,
				lastname,
				midlename,
				email,
				password
			});
			
			dispatch(loginSuccess(response.data));
			navigation('/AdminKabinet');

		}catch(error){
			if(error.response && error.response.status === 400){
				dispatch(setErrorMessage(error.response.data.message));
			}else{
				if(error.response && error.response.status === 404){
					console.log('Ошибка при отправке данных:', error);
					dispatch(loginError(error.message || 'Произошла ошибка привходе'));
				}
			}
		}
	}


	const handleSubmitLogin = async (e) => {
		e.preventDefault();

		try{
			const response = await axios.post('http://localhost:5000/loginadmin/loginadmin', {
				email,
				password
			});
			console.log(response)
			dispatch(loginSuccess(response.data));
			//Получаем токен из ответа
			const token = response.data.token
			//Сохраняем токен в localStorage
			localStorage.setItem('token', token)
				navigation('/AdminKabinet')
			
		}catch(error){
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
        <div className="windowAdmin">
<div className="containerAdmin" id="containerAdmin">
{!loading && !user && error &&(
		
	<div className={isSignUpActive ? "form-containerAdmin" : "sign-containerAdmin"}>
	
		<form className="formAdmin" onSubmit={handleSubmitRegistration}>
			<h1>Регистрация</h1>
			<span>Заполните все поля, для создания личного кабинета!</span>
			<input type="text" 
			placeholder="Имя"
			value={firstname}
			onChange={(e) => dispatch(setFirstname(e.target.value))}
			 />

            <input type="text" 
			placeholder="Фамилия"
			value={lastname}
			onChange={(e) =>dispatch(setLastname(e.target.value))} 
			/>
            <input type="text" 
			placeholder="Отчество"
			value={midlename}
			onChange={(e) => dispatch(setMidlename(e.target.value))} 
			/>
			<input type="text" 
			placeholder="Электронная почта"
			value={email}
			onChange={(e) => dispatch(setEmail(e.target.value))} 
			/>
			<input type="text" 
			placeholder="Пароль"
			value={password}
			onChange={(e) => dispatch(setPassword(e.target.value))} 
			/>
            {/*<input type="text" placeholder="Повторите пароль" />*/}
			<button>Регистрация</button>
		</form>
	</div>
		)}
	
	{!loading && !user && !error &&(
		
	<div className={isSignUpActive ? "sign-containerAdmin" : "form-containerAdmin"}>
	
		<form className="formAdmin" onSubmit={handleSubmitLogin}>
			<h1>Войти</h1>
			<span>Введите свои данные!</span>
			<input type="text" 
			placeholder="Электронная почта" 
			value={email}
			onChange={(e) => dispatch(setEmail(e.target.value))}
			/>

			<input type="text" 
			placeholder="Пароль"
			value={password}
			onChange={(e) => dispatch(setPassword(e.target.value))} 
			/>

			<a href="#">Forgot your password?</a>
			<button>Вход</button>
		</form>
	</div>
		)}
	<div className="overlay-containerAdmin">
		<div className="overlayAdmin">
		{!loading && !user && error &&(
			<div className= {isSignUpActive ? "overlay-panelAdmin" : "overlay-rightAdmin"}>
				<h1>Добро пожаловать!</h1>
				<p>Чтобы войти в систему нужно зарегестрироваться, пожалуйста, введите свои личные данные</p>
			</div>
		)}

			{!loading && !user && !error &&(
			<div className={isSignUpActive ? "overlay-rightAdmin" : "overlay-panelAdmin"}>
				<h1>Привет!</h1>
				<p>Введите свои личные данные и начните путешествие с нами</p>
			</div>
			)}
		</div>
	</div>
</div>

        </div>
        
    )
}

export default LoginAdmin;