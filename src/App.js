
import AES from './Components/AES';

import DES from './Components/DES';
//import EncryptionTool from'./Components/EncryptionTool'
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
//import Blog from './Components/Blog';
import Home from './Components/Home';
function App() {
  return (
    <>
    
    <Routes>
    
       <Route path='/' element={<Home/> }>
            <Route path='/AES' element={<AES/>}></Route>
            <Route path='/DES' element={<DES/>}></Route>
       </Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
