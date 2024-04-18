
import AES from './Components/AES';
import Blog from './Components/Blog';
import DES from './Components/DES';
//import EncryptionTool from'./Components/EncryptionTool'
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    
    <Routes>
    {/* <EncryptionTool/> */}
       <Route path='/' element={<Blog/>}>
            <Route path='/AES' element={<AES/>}></Route>
            <Route path='/DES' element={<DES/>}></Route>
       </Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
