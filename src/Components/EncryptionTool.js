import React, { useState } from 'react'
//import AES from './AES'
import { Link, Outlet } from 'react-router-dom';
//import image from './background.jpg';
export default function EncryptionTool() { 

    const[slider,Setslider]=useState(false);
    //bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-200 via-amber-600 to-white
    //bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-orange-100 via-orange-100 to-orange-100
  return (
   <>
   
   <div className="w-[100%]  bg-gradient-to-b from-[#242472] via-[#81358c] to-zinc-900  "  >
     <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[868px] ipadair:max-w-[960px] laptop:max-w-[1240px]">
            
            <div className="relative flex ipadmini:flex-row   ">

            <div className={`${slider?"opacity-100 laptop:w-[25%] ipadmini:w-[35%] w-[70%] ":" opacity-0 w-[0%]  "} absolute z-50 laptop:relative overflow-hidden  border min-h-screen  transition-all duration-500 ease-out bg-[#242472] `}>
                <div className=" flex flex-row justify-between m-2">
                    <span className=" py-1 px-2 text-white font-semibold text-xl">CyberKnight</span>
                     <span className=" cursor-pointer" onClick={()=>{Setslider(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                                  />
                    </svg>
                    </span>
                </div>
                <div className=" p-2 border-t  flex flex-row justify-around items-center text-white font-medium">
                    <Link to = '/EncryptionTool/AES' onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-20 text-center">AES</Link>
                    <Link to ='/EncryptionTool/DES'  onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-20 text-center">DES</Link>
                </div>
                <div className=" p-2  flex flex-row justify-around items-center text-white font-medium">
                    <Link to='/EncryptionTool/MAC'  onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-20 text-center">MAC</Link>
                    <Link to='/EncryptionTool/HASH' onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-20 text-center">Hash</Link>
                </div>
                <div className=" p-2  flex flex-row flex-wrap gap-3 justify-around items-center text-white font-medium">
                    <Link to='/EncryptionTool/Monoalphabetic'  onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-36 text-center ">MonoAlphabetic</Link>
                    <Link to='/EncryptionTool/Polyalphabetic'  onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-36 text-center">Polyalphabetic</Link>
                </div>
                <div className=" p-2  flex flex-row flex-wrap justify-around gap-3  items-center text-white font-medium">
                    <Link to='/EncryptionTool/DigitalSignature'  onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-36 text-center">Digital Signature</Link>
                    <Link to='/EncryptionTool/ShiftCipher'  onClick={()=>{Setslider(false)}} className="border-2  py-2 rounded-md min-w-36 text-center">Shift Cipher</Link>             </div>
                
            </div>
            <div className={` ${slider?"relative laptop:w-[85%] ipadmini:w-[100%]":"relative laptop:w-[100%] ipadmini:w-[100%]"}  w-full  min-h-screen  ${slider?"px-2":"laptop:px-20 px-2"}    `} >
               <div className={` absolute top-3 left-1 px-2 py-2 cursor-pointer ${slider?"invisible":"visible"}`}  onClick={()=>{Setslider(true)}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 text-white`}>
                                  <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" 
                                  />
                                </svg>
                                 </div>
                     {/* <AES/> */}
                     <Outlet/>  
                </div>    
            </div> 
             
 </div>
 </div>
   </>
  )
}
