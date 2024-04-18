import React from 'react'

export default function Footer() {
  return (
   <>
     <div className=" grid ipadmini:grid-cols-4 grid-cols-2 pt-5 text-white bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-indigo-900 to-sky-900">

           <div className="flex flex-col ">
           <span className="text-center w-full  p-4 text-xl">CyberKnight</span>
        <div className=" flex flex-col justify-center items-center   gap-y-2 p-2 px-5  text-stone-300">
           
            <span className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, earum.</span>
            <div className=" flex flex-row justify-around w-full">
                <span className="">f</span>
                <span className="">G</span>
                <span className="">insta</span>
            </div>
        </div>
        </div>
        <div className=" flex flex-col">
            <span className="  w-full p-4 text-xl border-l">Cryptography</span>
            <div className=" flex flex-col ps-5 gap-y-3 p-2  text-stone-300">
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">AES</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">DES</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">SHIFTCIPHER</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">MONOALPHBETIC</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">POLYALPHBETIC</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">DIGITALSIGNATURE</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">HASHFUNCTION</span></div>
        </div>
        <div className="flex flex-col">
            <span className="  w-full p-4 text-xl border-l">Blogs</span>
            <div className=" flex flex-col ps-5 gap-y-3 p-2 text-stone-300">
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">SOCIAL ENGINEERING</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">PHISHNG ATTACK</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">RANSOMEWARE ATTACK</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">DOS & DDOS ATTACK</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">WEB JACKING</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">SQL INJECTION</span>
            <span className="ps-0 hover:ps-4 transition-all hover:text-amber-500">MAN IN THE MIDDLE ATTACK</span>
            </div>

        </div>
        <div className=" flex flex-col">
            <span className="  w-full p-4 text-xl border-l">ABOUT</span>
            <div className=" flex flex-col justify-center items-center gap-y-3  text-stone-300">
            <span className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iusto.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, hic!
            </span>
           </div>
        </div>
     </div>
     
     <div className=" border-t flex flex-row flex-wrap justify-between items-center text-white p-5 px-20 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-indigo-800 to-sky-800">
        <span className="">PrivacyPolicy</span>
        <span className="">@2024 AllRight Reserved</span>
        <span className=" italic ">Developed by <span className="text-amber-400">Sumit Patel</span></span>
     </div>
   </>
  )
}
