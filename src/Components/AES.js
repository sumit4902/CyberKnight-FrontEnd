import React from 'react'
import mark from './mark-removebg-preview.png'
import uparraow from './uarrow.png'
import darrow from './darrow.png'
import Accordian from './Accordian'
export default function AES() {
  return (
   <>
   <div className=" grid ipadmini:grid-cols-2 grid-cols-1 gap-x-10 gap-y-3 border px-28  py-3 place-items-center">
    
    <div className=" border  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7 "> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" "> Symmetric Encryption</span>
    </div>
    <div className=" border  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7"> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" ">Block Cipher</span>
    </div>
    <div className=" border  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7"> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" "> Multiple Rounds</span>
    </div>
    <div className=" border  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7"> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" ">Resistance to Attack</span>
    </div>
   </div>
     {/* Encryption / Decryption */}
   <div className=" flex ipadmini:flex-row flex-col gap-x-3 justify-between border ">
    <div className=" border ipadmini:w-1/2 w-full">
       <textarea name="" id=""className='w-full min-h-56 p-3' placeholder='Enter PlainText'></textarea>
       <input type="text" className="border focus:outline-none py-2 px-5 w-full  " placeholder='Enter Key' />
       <div className=" flex flex-row justify-evenly gap-y-4 py-3 border">
        <button className="border py-2 px-8 rounded-md active:scale-[1.07]">Encryption</button>
        <button className="border py-2 px-8 rounded-md active:scale-[1.07]">Decryption</button>
       </div>
    </div>
    <div className="border ipadmini:w-1/2 w-full">
        <div className='w-full min-h-56 border-2'></div>
    </div>
   </div>
   {/* stepSection */}
   <div className=" flex flex-row flex-wrap ipadmini:flex-nowrap justify-center gap-x-10 gap-y-2 ipadmini:gap-0  py-10 px-5">
   
      <div className=" py-3 min-w-28 rounded-2xl bg-violet-700 text-white shadow-xl shadow-violet-300">
        <div className=" text-5xl text-center">1</div>
        <div className=" mt-1 text-center">PlainText</div>
    </div>
      <div className="hidden ipadmini:flex items-end  text-white animate-bounce"><img src={darrow} alt="" className=" h-20 w-20 translate-y-[1.5rem] " /></div>
      <div className=" py-3 min-w-28   rounded-2xl  bg-violet-700 text-white shadow-xl shadow-violet-300">
        <div className=" text-5xl text-center">2</div>
        <div className=" mt-1 text-center">ShiftRound</div>
    </div>
      <div className="hidden ipadmini:flex items-start animate-bounce"><img src={uparraow} alt="" className="h-10 w-20 translate-y-[-1.5rem] " /></div>
      <div className=" py-3 min-w-28    rounded-2xl  bg-violet-700 text-white shadow-xl shadow-violet-300">
        <div className=" text-5xl text-center">3</div>
        <div className=" mt-1 text-center">Shifting</div>
    </div>
      <div className="hidden ipadmini:flex items-end animate-bounce"><img src={darrow} alt="" className="h-20 w-20 translate-y-[1.5rem] " /></div>
      <div className=" py-3 min-w-28   rounded-2xl  bg-violet-700 text-white shadow-xl shadow-violet-300">
        <div className=" text-5xl text-center">4</div>
        <div className=" mt-1 text-center">CipherText</div>
    </div>
    
   </div>

   {/* faq's Section */}
   <div className=" ipadmini:mx-28">
    <div className="text-center text-xl font-medium p-5">FAQ'S</div>
   <Accordian question="Why Should I Use DES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Why Should I Use DES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Why Should I Use DES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Why Should I Use DES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Why Should I Use DES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Why Should I Use DES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   </div>
   </>
  )
}
