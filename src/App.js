

import Auth from './Components/Auth';
import AuthUser from './Components/AuthUser';
import Guest from './Components/Guest'
//import Guest from './Components/Guest'
// const Mainrouter = createBrowserRouter([
// {path:'/',Component:Home},
// {path:'Login',Component:Login},
// {path:'Ecryptiontool',Component:EncryptionTool},
// {path:'Blog',Component:Blog},

// ])
function App() {
  
  const {getToken}=AuthUser();
  
  if(!getToken())
  {
    return <Guest/>
  

  }
  
   
  
  return (
    <>
        <Auth/>

   {/* <RouterProvider router={Mainrouter}/> */}
    {/* <Navbar/>
    
    <Routes>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            
            <Route path='/EncryptionTool/' element={<EncryptionTool/>}>
               <Route path='AES' element={<AES/>}></Route>
               <Route path='DES' element={<DES/>}></Route>
            </Route>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Authapi' element={<AuthApi/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            


    </Routes>
    <Footer/>   */}
    </>
  );
}

export default App;
