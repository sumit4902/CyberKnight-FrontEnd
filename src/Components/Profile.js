import React, { useState } from 'react'

export default function Profile() {
    const[blogmodel,Setblogmodel]=useState(false);
    const[blogWriting,SetblogWriting]=useState({
        crimeType:"",
        title:"",
        commitPlace:"",
        description:"",
        image:""
       })
  return (
    <>
    <div className="w-[100%] bg-gradient-to-b from-[#0d0d2d] via-[#58325e] to-zinc-900 "  >
     <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]">
         
         <div className=" flex ipadmini:flex-row flex-col-reverse py-10  laptop:px-20 ipadmini:px-10">
          {/* Left Part */}
          <div className="  ipadmini:w-1/2 w-full  flex flex-col  p-3">
            <div className="relative text-white  flex flex-col rounded-lg  gap-y-2 p-5 bg-[#311d54]">
              <div className="text-3xl">Sumit Patel</div>
              <div className="">Bhopal Madhya Pradesh   </div>
              <div className="">sumitpatel28855@gmail.com lorem20</div>
              <span className="absolute text-white right-3 top-2  h-8 w-8 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                                                                            </svg>
</span>
              </div>
              <div className="text-white  rounded-lg p-2">I am professional Full Stack Web Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga dicta excepturi temporibus, magnam possimus ratione dolorem non optio quisquam?</div>

          </div>
             {/* Right Part  */}
          <div className="ipadmini:w-1/2 w-full flex justify-center ">
                                                                                                         
            <div className="border-4 border-violet-300 w-56 h-56 rounded-full relative  ">
            <span className="absolute text-white right-3 top-8  h-12 w-12 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-violet-200 text-black rounded-full  "><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                                                                            </svg>
            </span>
            <img src='https://img.freepik.com/premium-photo/butterfly-with-flower_980053-19.jpg' alt="" className="h-full w-full rounded-full " />
            </div>
          </div>
         </div>
         

         {/* Blog Section */}
           <div className=" text-white text-2xl ipadmini:mx-20 mx-3">Your OverAll Blogs</div>
           <div className=" grid laptop:grid-cols-3 ipadmini:grid-cols-2 grid-cols-1 p-5 h-full min-h-[40rem] justify-items-center items-start  gap-y-7 laptop:px-20 ipadmini:px-10 ">
            {/* card -1 */}
           <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-md hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full  bg-[#34153185]">
               <div className="border relative ">
                <img src=" https://templates.envytheme.com/seqty/default/assets/img/about-img-5.jpg" alt="" className="w-full ipadmini:h-40 h-64  " />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
               <div className=" px-3  font-medium text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis.</div>
               <div className=" px-3 text-[0.9rem] text-purple-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi voluptas fugiat </div>
               <div className=" px-3 text-center p-2 py-3">
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold">ReadMore</button>
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold ms-3">Update</button>
               </div>
            </div>

            <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-md hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full  bg-[#34153185]">
               <div className="border relative ">
                <img src=" https://templates.envytheme.com/seqty/default/assets/img/about-img-5.jpg" alt="" className="w-full ipadmini:h-40 h-64  " />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
               <div className=" px-3  font-medium text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis.</div>
               <div className=" px-3 text-[0.9rem] text-purple-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi voluptas fugiat </div>
               <div className=" px-3 text-center p-2 py-3">
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold">ReadMore</button>
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold ms-3">Update</button>
               </div>
            </div>
          </div>

          {/* UPDATE BLOG */}

          <div className={` ${blogmodel?"":"hidden"} absolute  inset-0 flex flex-col justify-start py-5 items-start backdrop-blur-2xl`}>
     <button className="w-full flex justify-end pe-10 text-white"><span className="" onClick={()=>{Setblogmodel(false)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                             <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                              </svg></span>
      </button>
       <form onSubmit={''} className=" w-full ipadmini:px-28 px-2">    
        
         <div className=" flex ipadmini:flex-row flex-col gap-y-3  justify-around items-center py-2">
            <input onChange={(event)=>(SetblogWriting((prev)=>({...prev,crimeType:event.target.value})))} type="text" className=" ipadmini:w-80 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='What Kind Of Attack' />
            <input onChange={(event)=>(SetblogWriting((prev)=>({...prev,title:event.target.value})))} type="text" className=" ipadmini:w-80 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='Title of blog' />
            <input onChange={(event)=>(SetblogWriting((prev)=>({...prev,commitPlace:event.target.value})))} type="text" className=" ipadmini:w-80 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='commit place' />
           
         </div>
        <textarea onChange={(event)=>(SetblogWriting((prev)=>({...prev,description:event.target.value})))} name="" className='min-h-80  w-full p-5 focus:outline-none bg-transparent border-2 border-white text-white rounded-md placeholder-stone-200' placeholder='Write Your Incident , Advice Regarding CyberCrime'></textarea>
        <div className= " flex flex-row justify-around items-center  py-2">
         <span className="  text-center ">
            <label htmlFor="102" className=''><span className=" py-2 px-5 border rounded text-white">Upload Image</span></label>
            <input type="file" className="hidden" id='102' placeholder='Select Image'/>
         </span>
         <button type='submit'  className="border py-[0.45rem] px-8 rounded active:scale-[1.07] text-white">Send</button>
        </div>
        </form>
     </div>

         </div>
    </div>
    </>
  )
}
