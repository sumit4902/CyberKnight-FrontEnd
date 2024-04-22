import React, { useState } from "react"
import { Link } from "react-router-dom";
export default function Navbar()
{
       const[toggle,Settoggle]=useState(false);
return(
 <>
 <nav>  
  <div className="flex flex-row flex-wrap justify-between items-center py-2 px-10  bg-[#242472f0] text-white">
    <div className=" ipadmini:visible p-2 text-2xl text-semibold italic">CyberKnight</div>
    <div className="ipadmini:block hidden laptop:me-28 ">
        <Link to='/' className="p-1 mx-5">HOME</Link>
        <Link to='Encryptiontool' className="p-1 mx-5">ENCRYPTION TOOL</Link>
        <Link to='/Blog' className="p-1 mx-5">BLOGS</Link>
        <Link to='/' className="p-1 mx-5">SECURITY API</Link>
        <Link to='/' className="p-1 mx-5">ABOUT</Link>
    </div>
    <div className="ipadmini:hidden" onClick={()=>{Settoggle(true)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
       </svg>
    </div>
   
  </div>

  {/* mobile navbar */}
  <div className={`${toggle?"":"hidden"} fixed right-0 top-0 bottom-0 z-50 flex flex-col items-start  gap-y-3 w-72 py-4 px-4 bg-[#242472f0] `} >
        <div className=" flex w-full justify-between">
        <div className=" p-2 text-2xl text-white">CyberKnight</div>
            <span className="mt-2 mb-2 me-4 text-white " onClick={()=>{Settoggle(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span>
        </div>
       
        <Link to='/' className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-[#6e386ca4] text-white">HOME</Link>
        <Link to='/EncryptionTool' className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-[#6e386ca4] text-white">ENCRYPTION TOOL</Link>
        <Link to='/Blog' className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-[#6e386ca4] text-white">BLOGS</Link>
        <Link to='/' className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-[#6e386ca4] text-white">SECURITY APIS</Link>
        <Link to='/' className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-[#6e386ca4] text-white">ABOUT</Link>
       
    </div>
  </nav>
 </>
    )
}

