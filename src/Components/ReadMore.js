import React from 'react'

export default function ReadMore(props) {
  return (
    <>
    <div className={` ${props.isopen?"":"hidden"} absolute  top-0 left-0 right-0 z-50 flex flex-col justify-start py-5 items-start backdrop-blur-2xl min-h-screen `}>
                    <div className=" flex flex-row justify-end items-center w-full ">
                         <span onClick={()=>{props.ReadmoreFunction(false)}} className=" py-4 ipadmini:me-20 me-10 text-white">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg></span>
                    </div>
              <div className=" flex ipadmini:flex-row flex-col gap-5  w-full laptop:px-20 ipadmini:px-10 px-2">
               
               <div className="ipadmini:w-[30%] w-full latptop:h-80 ipadmini:h-64 h-80 rounded-md ">
              <img src={`http://localhost:4202/api/v1/image/blog/${props.blogId}`} alt="" className=" border h-full w-full rounded-md" />
              </div>
                <div className=" flex flex-col gap-3 p-2 ipadmini:w-[70%] w-full">
                  <div className=" border p-2 text-neutral-200">Title : {props.title}</div>
                  <div className=" border p-2 text-neutral-200">Address :  {props.Address}</div>
                  <div className=" p-2   text-neutral-200">
                     {props.description}
                     </div>

                </div>
              </div>
       </div>


    
    </>
  )
}
