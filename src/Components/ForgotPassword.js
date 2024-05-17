import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function ForgotPassword() {
const[forgotData,setForgotData]=useState({
    email:"",
    password:"",
    confirmPassword:""
});
const navigate = useNavigate();
const {uniqueId} = useParams();

const forgotref = useRef();

function setPasswordApi(e)
{  
    e.preventDefault();

    const check = Validation();
    if(check==="")
        {

        
    let url='http://localhost:4202/api/v1/user/ForgotPassword';
axios.post(url,{
    email:forgotData.email,
    password:forgotData.password,
    uniqueId:uniqueId
}).then((response)=>
{
    console.log(response.data.message);
   
   navigate('/');
}).catch((err)=>{
    console.log(err);
    forgotref.current.innerHTML="GmailId doesn't exist";
})
        }
        else{

            forgotref.current.innerHTML=check;
        }


}

// Validation for form //
function Validation()
{
    if(!forgotData.email.includes("@") && forgotData.email==="")
        {
            return "Write Correct GmailId !";
        }
    else if( forgotData.password!==forgotData.confirmPassword   )
        {
            return "Password is not Matching here !"
        }
    else{
        return "";
    }    
}
  
  return (
    <>
        <div className=" w-[100%] bg-gradient-to-b from-[#242472] via-[#81358c] to-zinc-900">
     <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]   ">
      
        <form onSubmit={setPasswordApi} className=" flex flex-col gap-y-5 justify-center items-center  px-4 py-32 ">
            <div className="  text-white font-medium text-xl">Reset Password</div>
            <input onChange={(event)=>setForgotData((prev)=>({...prev,email:event.target.value}))} type="text" className=" border rounded focus:outline-none border-white ipadmini:min-w-80 min-w-full bg-transparent text-white p-2" placeholder='Enter Email' />
            <input onChange={(event)=>setForgotData((prev)=>({...prev,password:event.target.value}))} type="password" className=" border rounded focus:outline-none border-white ipadmini:min-w-80 min-w-full bg-transparent text-white p-2" placeholder='Enter Password' />
            <input onChange={(event)=>setForgotData((prev)=>({...prev,confirmPassword:event.target.value}))} type="password" className=" border rounded focus:outline-none border-white ipadmini:min-w-80 min-w-full bg-transparent text-white p-2" placeholder='Confirm Password'/>
             <div ref={forgotref} className="h-6   text-amber-600 font-medium"> </div>
             <button type='submit' className='border px-10 py-2 text-white active:scale-[1.05]'>Submit</button>
        </form>
       </div>
       </div>
    </>
  )
 
}
