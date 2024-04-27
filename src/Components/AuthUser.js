import  { useState } from 'react'

export default function AuthUser() {

  const getToken=()=>{
    const tokenString = sessionStorage.getItem('token');
    const usertoken = JSON.parse(tokenString);
    return usertoken;
  }

  const getUser =()=>{
    const userString = sessionStorage.getItem('user');
    const userDetail = JSON.parse(userString);
    return userDetail;
  }
 
   // Both states are use to call api in different components //
   const[user,setUser]=useState(getUser());   // if user is already login then they should not be empty so initialize with session storage token //
   const[token,setToken]=useState(getToken());

   // funstion to set token and user into localstorage while user login //
   const saveToken =(user,token)=>{
       
    sessionStorage.setItem('token',JSON.stringify(token));
    sessionStorage.setItem('user',JSON.stringify(user));

    setToken(token);
    setUser(user);
    //you may navigate also //
   }

   // on logout 
   const logout=()=>{
    sessionStorage.clear();
    // you may navigate to login 
   }


    return{
   setToken:saveToken,
   logout,
   user,
   token,
   getToken
     }
}
