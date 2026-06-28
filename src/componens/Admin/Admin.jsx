import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import LoginAdmin from './LoginAdmin/LoginAdmin';
import Modal from '../Modal/Modal';


const Admin = () =>{
    const {modalActive, setModalActive}= useSelector((state) => state.auth)

  const navigate = useNavigate();

  useEffect(() => {
      navigate('/Admin');
  }, [navigate]);

    return(
        <div>
            {modalActive && setModalActive &&(
                <Modal active={modalActive} setActive={setModalActive}>
                    <LoginAdmin />
                </Modal>
            )}
        </div>
    );
}

export default Admin;