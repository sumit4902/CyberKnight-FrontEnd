import React from 'react'
import Navbar from './Navbar'
import { Route, Routes} from 'react-router-dom'
import Login from './Login'
import Footer from './Footer'
import ForgotPassword from './ForgotPassword'


export default function Guest() {
   
  
  return (
    <>

      <Navbar isLogin={false}/>
     
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/ForgotPassword/:uniqueId' element={<ForgotPassword />} ></Route>
      </Routes>
      <Footer/>
    </>
  )
}









