import React, { useState } from 'react'
import mark from './mark-removebg-preview.png'
import uparraow from './uarrow.png'
import darrow from './darrow.png'
import Accordian from './Accordian'
import axios from 'axios'
import AuthUser from './AuthUser'

export default function DES() {
  // this is use for the Token 
  const{token}= AuthUser();
        

    const[message,Setmessage]=useState();
    const[key,setKey]=useState();
    const[output,Setoutput]= useState();
  
  

   function handleencryption()
   {
    let url=`http://localhost:4202/api/v1/encrypt/Message?key=${key}&algoType=DES`
    axios.post(url,
    {
      plainText:message
    }, 
    {
      headers:{
         "Authorization":`Bearer `+token
      }
   }
  
  ).then((response)=>{
      // console.log(response.data);
      Setoutput(response.data.cipherText);
    }).catch((error)=>{
      console.log(error);
    }
  )

   }

   function decryptionMessage()
   {  let url=`http://localhost:4202/api/v1/decrypt/Message?key=${key}&algoType=DES`
      axios.post(url,
      {
        cipherText:message
      },
      {
        headers:{
           "Authorization":`Bearer `+token
        }
     }
    ).then((response)=>
      {
       
        Setoutput(response.data.plainText);
        if(output==="")
        {
          Setoutput("Your CipherText or Key is Something Wrong");
        }
       console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    }
    ) 
   }
  return (
   <>
   <div className=" text-white">DES</div>
   <div className=" grid ipadmini:grid-cols-2 grid-cols-1 gap-x-10 gap-y-3  px-28  py-3 place-items-center">
    
    <div className=" border-2  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7 text-md font-semibold text-white "> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" "> Symmetric Encryption</span>
    </div>
    <div className=" border-2  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7 text-md font-semibold text-white"> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" ">Block Cipher</span>
    </div>
    <div className=" border-2  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7 text-md font-semibold text-white"> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" "> Multiple Rounds</span>
    </div>
    <div className=" border-2  py-2 gap-x-3 w-64 rounded-md flex flex-row items-center ps-7 text-md font-semibold text-white"> 
    <img src={mark} alt="" className=" h-10 w-10" />
    <span className=" ">Resistance to Attack</span>
    </div>
   </div>
     {/* Encryption / Decryption */}
   <div className=" flex ipadmini:flex-row flex-col gap-x-5 justify-between  ">
    <div className="  ipadmini:w-1/2 w-full">
       <textarea value={message} onChange={(event)=>{Setmessage(event.target.value)}} name="" id=""className=' w-full min-h-56 p-3 border-4  border-white placeholder-white font-semibold bg-transparent text-white rounded-lg focus:outline-none ' placeholder='Enter PlainText'></textarea>
    
       <input onChange={(event)=>{setKey(event.target.value)}} type="text" className=" border-2 border-white py-2 px-5 w-full placeholder-white font-semibold bg-transparent text-white rounded-lg focus:outline-none  " placeholder='Enter Key' />
       <div className=" flex flex-row justify-evenly gap-y-4 py-3 ">
        <button onClick={()=>{handleencryption()}} className="border-2 py-2 px-8 rounded-md active:scale-[1.07]  text-white font-semibold  ">Encryption</button>
        <button onClick={()=>{decryptionMessage()}} className="border-2 py-2 px-8 rounded-md active:scale-[1.07] text-white font-semibold">Decryption</button>
       </div>
    </div>
    <div className=" ipadmini:w-1/2 w-full border-white ">
        <div className='w-full min-h-56 border-4 border-white rounded-md p-2 text-white'>{output}</div>
    </div>
   </div>
   {/* stepSection */}
   <div className=" flex flex-row flex-wrap ipadmini:flex-nowrap justify-center gap-x-10 gap-y-4 ipadmini:gap-0  py-10 px-5">
   
      <div className=" py-3 min-w-28 rounded-2xl bg-violet-900 text-white shadow-md shadow-violet-200">
        <div className=" text-5xl text-center">1</div>
        <div className=" mt-1 text-center">PlainText</div>
    </div>
      <div className="hidden ipadmini:flex items-end  text-white animate-bounce"><img src={darrow} alt="" className=" h-20 w-20 translate-y-[1.5rem] " /></div>
      <div className=" py-3 min-w-28   rounded-2xl  bg-violet-900 text-white shadow-md shadow-violet-200">
        <div className=" text-5xl text-center">2</div>
        <div className=" mt-1 text-center">ShiftRound</div>
    </div>
      <div className="hidden ipadmini:flex items-start animate-bounce"><img src={uparraow} alt="" className="h-10 w-20 translate-y-[-1.5rem] " /></div>
      <div className=" py-3 min-w-28    rounded-2xl  bg-violet-900 text-white shadow-md shadow-violet-200">
        <div className=" text-5xl text-center">3</div>
        <div className=" mt-1 text-center">Shifting</div>
    </div>
      <div className="hidden ipadmini:flex items-end animate-bounce"><img src={darrow} alt="" className="h-20 w-20 translate-y-[1.5rem] " /></div>
      <div className=" py-3 min-w-28   rounded-2xl  bg-violet-900 text-white shadow-md shadow-violet-200">
        <div className=" text-5xl text-center">4</div>
        <div className=" mt-1 text-center">CipherText</div>
    </div>
    
   </div>


   {/* faq's Section */}
   <div className=" ipadmini:mx-28">
    <div className="text-center text-3xl  p-5 text-white font-semibold">FAQ'S</div>
   <Accordian question="What is AES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Why Should we use AES ?"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Advantage of AES"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="Disadvantage of AES"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="which Algorithm is use in AES"  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   <Accordian question="AES in Industry Production Application "  answer="Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quod!"/>
   </div>
   </>
  )
}
