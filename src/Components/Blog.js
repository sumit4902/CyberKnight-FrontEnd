import React, { useState } from 'react'

export default function Blog() {

    const[filter,Setfilter]=useState(false);

  return (
    <>
     <div className=" w-[100%] ">
     <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]  ">
         
         {/* uppersection */}
          <div className=" bg-violet-300 h-28 w-full">
            <img src="" alt="" className="" />
          </div>
          <div className=" flex ipadmini:flex-row  flex-col  border ">
             <div  className="ipadmini:hidden flex flex-row justify-between  py-2 px-10  ">
                <span className="">Filter</span>
                <span className="" onClick={()=>{Setfilter(!filter)}}>
                    {filter? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                    />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6`}>
                    <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                   </svg>
                    } 
                   
                </span>
            </div>
           
            <form action="" className={`${filter?"h-60":"h-0"} ipadmini:h-14  transition-all duration-300 ease-in-out   overflow-hidden grid ipadmini:grid-cols-4 grid-cols-1 w-full px-10   gap-x-3 laptop:gap-x-10 gap-y-5  place-items-center  border`}>
            <input type="text" className="ipadmini:mt-0 mt-3 border text-lg py-1 px-2 focus:outline-none rounded-md w-full shadow-md shadow-violet-800" placeholder='Type of Attack'/>
            <input type="text" className="border text-lg py-1 px-2 focus:outline-none rounded-md w-full shadow-md shadow-violet-800" placeholder='Tittle'/>
            <input type="text" className=" border text-lg py-1 px-2 focus:outline-none rounded-md w-full shadow-md shadow-violet-800" placeholder='Address' />
            <button className="ipadmini:mb-0 mb-3 border py-2 px-10 rounded-md active:scale-[1.07] bg-violet-600 text-white " type='submit'>Apply</button>
            </form>
           
          </div>


             {/* blog grid */}
          <div className=" grid laptop:grid-cols-3 ipadmini:grid-cols-2 grid-cols-1 p-2 h-full justify-items-center items-start  gap-y-7 laptop:px-20 ipadmini:px-10 border">
              {/* card -1 */}
            <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-lg hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full ">
               <div className="border relative ">
                <img src="" alt="" className="w-full h-40  " />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
               <div className=" px-3  font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis.</div>
               <div className=" px-3 text-[0.9rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi voluptas fugiat </div>
               <div className=" px-3 text-center p-2 py-3">
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] ">ReadMore</button>
               </div>
            </div>

            {/* card-2 */}
            <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-lg hover:shadow-violet-100 ipadmini:w-72 w-full">
               <div className="border relative ">
                <img src="" alt="" className="w-full h-40" />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
               <div className=" px-3  font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis.</div>
               <div className=" px-3 text-[0.9rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi voluptas fugiat </div>
               <div className=" px-3 text-center p-2 py-3">
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] ">ReadMore</button>
               </div>
            </div>

            <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-lg hover:shadow-violet-100 ipadmini:w-72 w-full">
               <div className="border relative ">
                <img src="" alt="" className="w-full h-40" />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
               <div className=" px-3  font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis.</div>
               <div className=" px-3 text-[0.9rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi voluptas fugiat </div>
               <div className=" px-3 text-center p-2 py-3">
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] ">ReadMore</button>
               </div>
            </div>

            


          </div>
          
          </div>
    </div>
    </>
  )
}
