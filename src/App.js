
import AES from './Components/AES';

import DES from './Components/DES';
import EncryptionTool from'./Components/EncryptionTool'
import {Routes ,Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import AuthApi from './Components/AuthApi';
import Profile from './Components/Profile';

const Mainrouter = createBrowserRouter([
{path:'/',Component:Home},
{path:'Login',Component:Login},
{path:'Ecryptiontool',Component:EncryptionTool},
{path:'Blog',Component:Blog},

])
function App() {
  return (
    <>
    <Navbar/>
    {/* <RouterProvider router={Mainrouter}/> */}
    <Routes>
            <Route path='/' element={<Login/>}></Route>
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
  );
}

export default App;
