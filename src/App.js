
import AES from './Components/AES';

import DES from './Components/DES';
import EncryptionTool from'./Components/EncryptionTool'
import {Routes ,Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

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
            <Route path='/' element={<Home/>}></Route>
            <Route path='/EncryptionTool' element={<EncryptionTool/>}/>
            <Route path='/Blog' element={<Blog/>}/>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
