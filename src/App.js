

import Auth from './Components/Auth';
import AuthUser from './Components/AuthUser';
import Guest from './Components/Guest'

function App() {
  
  const {getToken}=AuthUser();
  
  if(!getToken())
  {
    return <Guest/>
  }
  return (
    <>
        <Auth/>
    </>
  );
}

export default App;
