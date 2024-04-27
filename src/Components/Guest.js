import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Footer from './Footer'


export default function Guest() {
  return (
    <>

      <Navbar isLogin={false}/>
     
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
      </Routes>
      <Footer/>
    </>
  )
}









