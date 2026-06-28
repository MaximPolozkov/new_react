import React from 'react';
//import Header from './componens/Header/Header';
import './App.scss'
//import Footer from './componens/Footer/Footer';
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import Mastera from './componens/Mastera/Mastera';
import Main2 from './componens/Main/Main';
//import Calendar from './componens/Calendar/Calendar';
import Uslugi from './componens/Uslugi/Uslugi';
import AvatarKabinet from './componens/AvatarKabinet/AvatarKabinet';
import Modal from './componens/Modal/Modal';
import Login from './componens/Login/Login';
import Registration from './componens/Registration/Registration';
import { useSelector } from 'react-redux';
import Admin from './componens/Admin/Admin';
import AdminKabinet from './componens/Admin/AdminKabinet/AdminKabinet';
import Main from './componens/Main/Main';



const App = ({spisok}) => {
  const {modalActive, setModalActive}= useSelector((state) => state.auth)
  
  return (
    <>
    <BrowserRouter>
    {/* <div className='wrapper'> */}
      <div className='container'>
        <div className='App'>
        
          {/*<Header spisok={spisok.Avatar} setModalActive={setModalActive}/>*/}
          <Routes>
            <Route path="/" element={<AvatarKabinet/>}></Route>
            <Route path="/Mastera" element={<Mastera spisok={spisok}/>}></Route>
            <Route path="/Main" element={<Main spisok={spisok}/>}></Route>
            <Route path='/Uslugi' element={<Uslugi spisok={spisok.Master2}/>}></Route>
            <Route path='/AvatarKabinet' element={<AvatarKabinet/>}></Route>
            <Route path='/Mastera' element={<Mastera/>}></Route>
            <Route path='/Registration' element={<Registration/>}></Route>
            <Route path='/Admin' element={<Admin/>}></Route>
            <Route path='/AdminKabinet' element={<AdminKabinet/>}/>
          </Routes>
          {/*<Footer />*/}
          {/*{modalActive && setModalActive &&(
            <Modal active={modalActive} setActive={setModalActive}>
            <Login />
          </Modal>
          )}*/}
        </div>
        
      </div>
    {/* </div> */}
    
    
      
   
    </BrowserRouter>
    </>

  )
}

export default App;
