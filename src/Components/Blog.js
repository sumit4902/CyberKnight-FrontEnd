import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';
import ReadMore from './ReadMore';
import Loader from './Loader';
export default function Blog() {
   const{user,token}= AuthUser();
    const[filter,Setfilter]=useState(false);
    const[blogmodel,Setblogmodel]=useState(false);
      
      const[Blogdata,SetBlogdata] = useState({
         content:[],
         pageNo:0,
         pageSize:0,
         totalElements:'',
         totalPages:'',
         lastPage:false,
         loading:false
      })
     
      const[filterdata,Setfilterdata]=useState({
         crimeType:"",
         title:"",
         commitPlace:""
      })
      
      
      async function  handleBlogApi()
    {   
      let url =`http://localhost:4202/api/v1/blog/all?crimeType=${filterdata.crimeType}&title=${filterdata.title}&commitPlace=${filterdata.commitPlace}&pageNo=${Blogdata.pageNo}&pageSize&sortBy=&direc=`
      SetBlogdata((prev)=>({...prev,loading:true}));
      axios.get(url,{
         headers:{
            "Authorization":`Bearer `+token
         }
      }) 
      .then((response)=>{
          
         SetBlogdata(prevState => ({ 
            ...prevState,
            content: [...prevState.content, ...response.data.content],
            loading: false
        }));
      // SetBlogdata({content:response.data.content})
          console.log(response);
      })
      .catch((error)=>{
         console.log(error);
      })    
    }
    useEffect(()=>{
      handleBlogApi();
      // eslint-disable-next-line
    },[Blogdata.pageNo])
          
     const[blogWriting,SetblogWriting]=useState({
      crimeType:"",
      title:"",
      commitPlace:"",
      description:"",
      image:""
     })
     
       const formdata= new FormData();
       formdata.append('image',blogWriting.image);

    function handleblogWriting(event)
    {
      event.preventDefault();
       let url =`http://localhost:4202/api/v1/user/${user}/blog/create`
       axios.post(url,{
         crimeType:blogWriting.crimeType,
         title:blogWriting.title,
         commitPlace:blogWriting.commitPlace,
         description:blogWriting.description,
       },{
         headers:{
            "Authorization":`Bearer `+token
         }
      }
      ).then((response)=>{
         console.log(response);
         if(blogWriting.image!=="")
            {
         axios.post(`http://localhost:4202/api/v1/image/upload/blog/${response.data.blogId}`,formdata).then((res)=>{
            console.log(res);
         }).catch((err)=>{
            console.log(err);
         });}
       }).catch((error)=>{
         console.log(error);
       })
    }

    // ReadMore Blog //
    const[isOpen,setIsOpen]=useState(false);
    function ReadMoreModel(value)
    {
       setIsOpen(value);
    }

    // infinite Scrolling concept //
    const handleInfiniteSchrolling = async ()=>{
      if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight  && Blogdata.pageNo<Blogdata.pageSize)
      {
         SetBlogdata((prev)=>({...prev,pageNo:(Blogdata.pageNo+1)}));
      }
     
    }
   console.log(Blogdata.pageNo);
    useEffect(()=>{
         window.addEventListener("scroll",handleInfiniteSchrolling);
         return()=>window.removeEventListener("scroll",handleInfiniteSchrolling);
         // eslint-disable-next-line
    },[Blogdata.pageNo])



  return (
    <>
     <div className=" w-[100%] bg-gradient-to-b from-[#242472] via-[#81358c] to-zinc-900">
     <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]   ">
         
         {/* uppersection */}
          <div className="relative py-5 w-full">
          
            <div className="text-center  text-slate-200 text-2xl">Unlocking the Secrets to Stay Safe Online: Your Cyber Security Guide</div>
            <div className=" mt-2 flex ipadmini:flex-row flex-col gap-y-2  items-center  justify-center laptop:px-20 ipadmini:px-10 "><span className="text-center text-stone-200 text-lg">Discover Essential Tips and Tools for Safeguarding Your Digital World</span>
            <button className=" py-1 ipadmini:ms-10 px-5 border  font-medium border-white active:scale-[1.07] text-black rounded-md  bg-purple-300  animate-pulse  " onClick={()=>{Setblogmodel(true)}}>Write Blog</button></div>
            
          </div>
          <div className=" flex ipadmini:flex-row  flex-col  ">
             <div  className="ipadmini:hidden flex flex-row justify-between  py-2 px-10  ">
                <span className="text-white text-2xl">Filter</span>
                <span className="" onClick={()=>{Setfilter(!filter)}}>
                    {filter? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                    />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 text-white`}>
                    <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                   </svg>
                    } 
                   
                </span>
            </div>
           
            <div className={`${filter?"h-60":"h-0"} ipadmini:h-14  transition-all duration-300 ease-in-out   overflow-hidden grid ipadmini:grid-cols-4 grid-cols-1 w-full px-10   gap-x-3 laptop:gap-x-10 gap-y-5  place-items-center  border-t`}>
            <input onChange={(event)=>(Setfilterdata((prev)=>({...prev,crimeType:event.target.value})))} type="text" className="ipadmini:mt-0 mt-3 border-[1.7px] text-lg py-1 px-2 focus:outline-none rounded-md w-full shadow-md shadow-violet-800 bg-transparent text-white placeholder-white" placeholder='Type of Attack'/>
            <input onChange={(event)=>(Setfilterdata((prev)=>({...prev,title:event.target.value})))} type="text" className="border-[1.7px] text-lg py-1 px-2 focus:outline-none rounded-md w-full shadow-md shadow-violet-800 bg-transparent text-white placeholder-white"  placeholder='Tittle'/>
            <input onChange={(event)=>(Setfilterdata((prev)=>({...prev,commitPlace:event.target.value})))} type="text" className=" border-[1.7px] text-lg py-1 px-2 focus:outline-none rounded-md w-full shadow-md shadow-violet-800 bg-transparent text-white placeholder-white" placeholder='Address' />
            <button onClick={()=>{handleBlogApi()}} className="ipadmini:mb-0 mb-3 border py-2 px-10 rounded-md active:scale-[1.07] bg-purple-300 font-semibold " type='submit'>Apply</button>
            </div>
           
          </div>


             {/* blog grid */}
          <div className=" grid laptop:grid-cols-3 ipadmini:grid-cols-2 grid-cols-1 p-5 h-full justify-items-center items-start  gap-y-7 laptop:px-20 ipadmini:px-10 ">
              {/* card -1 */}
          
             {  Blogdata.content.map((key)=>{
               return(
                  <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-md hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full  bg-[#34153185]">
                  <div className="border relative ">
                   <img src={`http://localhost:4202/api/v1/image/blog/${key.blogId}`} alt="" className="w-full ipadmini:h-40 h-64  " />
                   <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                   </div> 
                   <div className=" flex flex-row justify-start gap-x-2 px-5 items-center ">
                  <span className=" h-11 w-11 border-2 border-pink-200 rounded-full text-white ">
                     <img src={`http://localhost:4202/api/v1/image/user/${key.user.userId}`} alt="" className="w-full h-full rounded-full hover:scale-[4.05] transition-all" />
                  </span>
                  <span className="text-white font-medium text-lg">{key.user.userName}</span>
                </div>
                  <div className=" px-3  font-medium text-slate-200">{key.title}</div>
                  <div className=" px-3 text-[0.9rem] text-purple-200">{key.description} </div>
                  <div className=" px-3 text-center p-2 py-3 ">
                   <button onClick={()=>{setIsOpen(true)}} className=" py-1 px-3 border  rounded-lg active:scale-[1.07] bg-purple-300 font-semibold ">ReadMore</button>
                  </div>
                    {/* Readmore Section For Blog*/}
               <ReadMore ReadmoreFunction={ReadMoreModel} isopen={isOpen} blogId={key.blogId} title={key.title} Address={key.commitPlace} description={key.description}/>
  
               </div>
               )
             })}
           
           
           
            {/* card-2 */}
            <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-md hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full  bg-[#34153185]">
               <div className="border relative ">
                <img src=" https://templates.envytheme.com/seqty/default/assets/img/about-img-5.jpg" alt="" className="w-full ipadmini:h-40 h-64  " />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
                <div className=" flex flex-row justify-start gap-x-2 px-5 items-center ">
                <span className=" h-11 w-11 border-2 border-pink-200 rounded-full text-white ">
                     <img src="" alt="" className="w-full h-full rounded-full hover:scale-[4.05] transition-all" />
                  </span>
                  <span className="text-white font-medium text-lg">Sumit patel</span>
                </div>
               <div className=" px-3  font-medium text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis.</div>
               <div className=" px-3 text-[0.9rem] text-purple-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi voluptas fugiat </div>
               <div className=" px-3 text-center p-2 py-3">
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold">ReadMore</button>
               </div>
            </div>

            <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-md hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full  bg-[#34153185]">
               <div className="border relative ">
                <img src=" https://news-cdn.moonbeam.co/media/HackaTRON-and-TRON-Builder-Tour_19v7hs6r.jpg" alt="" className="w-full ipadmini:h-40 h-64  " />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
                <div className=" flex flex-row justify-start gap-x-2 px-5 items-center ">
                  <span className=" h-11 w-11 border-2 border-pink-200 rounded-full text-white ">
                     <img src="" alt="" className="w-full h-full rounded-full hover:scale-[4.05] transition-all" />
                  </span>
                  <span className="text-white font-medium text-lg">Sumit patel</span>
                </div>
               <div className=" px-3  font-medium text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis.</div>
               <div className=" px-3 text-[0.9rem] text-purple-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi voluptas fugiat </div>
               <div className=" px-3 text-center p-2 py-3">
                <button className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold">ReadMore</button>
               </div>
            </div>

            

              <div className={`${Blogdata.loading?"":"hidden"} ipadmini:col-span-3`}>
               <Loader/>
             </div>
          </div>
          

            

          </div>
    </div>

     {/* write blog */}
     <div className={` ${blogmodel?"":"hidden"} absolute  left-0 right-0 top-0 min-h-screen flex flex-col justify-start py-5 items-start backdrop-blur-2xl`}>
     <button className="w-full flex justify-end pe-10 text-white"><span className="" onClick={()=>{Setblogmodel(false)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                             <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                              </svg></span>
      </button>
       <form onSubmit={handleblogWriting} className=" w-full laptop:px-28 ipadmini:px-20 px-2">    
        
         <div className=" flex ipadmini:flex-row flex-col gap-y-3  justify-around items-center py-2">
            <input onChange={(event)=>(SetblogWriting((prev)=>({...prev,crimeType:event.target.value})))} type="text" className=" ipadmini:w-72 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='What Kind Of Attack' />
            <input onChange={(event)=>(SetblogWriting((prev)=>({...prev,title:event.target.value})))} type="text" className=" ipadmini:w-72 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='Title of blog' />
            <input onChange={(event)=>(SetblogWriting((prev)=>({...prev,commitPlace:event.target.value})))} type="text" className=" ipadmini:w-72 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='commit place' />
           
         </div>
        <textarea onChange={(event)=>(SetblogWriting((prev)=>({...prev,description:event.target.value})))} name="" className='min-h-80  w-full p-5 focus:outline-none bg-transparent border-2 border-white text-white rounded-md placeholder-stone-200' placeholder='Write Your Incident , Advice Regarding CyberCrime'></textarea>
        <div className= " flex flex-row justify-around items-center  py-2">
         <span className="  text-center ">
            <label htmlFor="102" className=''><span className=" py-2 px-5 border rounded text-white">{blogWriting.image===""?"Upload Image":"Done"}</span></label>
            <input onChange={(event)=>(SetblogWriting((prev)=>({...prev,image:event.target.files[0]})))} type="file" className="hidden" id='102' placeholder='Select Image'/>
         </span>
         <button type='submit'  className="border py-[0.45rem] px-8 rounded active:scale-[1.07] text-white">Send</button>
        </div>
        </form>
     </div>
    </>
  )
}
