import React from 'react'
import AES from './AES';

import DES from './DES';
import EncryptionTool from'./EncryptionTool'
import {Routes ,Route } from 'react-router-dom';
import Footer from './Footer';
import Blog from './Blog';
import Home from './Home';
import Navbar from './Navbar';
import AuthApi from './AuthApi';
import Profile from './Profile';

export default function Auth() {
  return (
   <>
       <Navbar isLogin={true}/> 
      
    {/* <RouterProvider router={Mainrouter}/> */}
    <Routes>
           
            <Route path='/' element={<Home/>}></Route>
            
            <Route path='/EncryptionTool/' element={<EncryptionTool/>}>
               <Route path='AES' element={<AES/>}></Route>
               <Route path='DES' element={<DES/>}></Route>
            </Route>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Authapi' element={<AuthApi/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            


    </Routes>
    <Footer/>  
   </>
  )
}
