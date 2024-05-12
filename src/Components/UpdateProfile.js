import React, { useEffect, useRef, useState } from 'react'
import userIcon from'./userIcon.png'
import axios from 'axios';
export default function UpdateProfile(props) {
    
     var [updateData,setUpdateData]=useState({
        userName:"",
        contact:"",
        email:"",
        address:"",
       
     });
     const[image,Setimage]=useState("");
      const formdata= new FormData();
         formdata.append('image',image);



     useEffect(()=>{
       // Api Call Hone ke  2min bad data aa raha tha then i have take this action //
     setUpdateData({userName:props.profileData.userName,contact:props.profileData.contact,email:props.profileData.email,address:props.profileData.address});
     },[props.profileData])
    
      const userref = useRef(null);

     //Update Api for User profile //
     function handleUpdate(event)
      {   
         event.preventDefault();
         let check = validationProfile();
         if(check==="")
         {

         
           let url =`http://localhost:4202/api/v1/user/update/${props.userId}`
           axios.put(url,{
            userName:updateData.userName,
            contact:updateData.contact,
            email:updateData.email,
            address:updateData.address
           },
           {
            headers: {
                "Authorization":`Bearer `+props.usertoken
            }
           }
        ).then((response)=>{
           // console.log(response);   // Image is Not Empty Then Update Image Also //
           if(image!=="")
            {
                axios.put(`http://localhost:4202/api/v1/image/update/${response.data.image.imageId}`,formdata)
                .catch((err)=>{
                    console.log("error in image updation please select other image");
                })
            }
            window.location.reload();
        })
        .catch((error)=>{
        //    console.log(error);
        userref.current.innerHTML="Invalid Data Try Again !"
        })
    }
    else{
         userref.current.innerHTML=check;
    }
      }

      function validationProfile()
      {
        if(updateData.userName.length<4 || updateData.userName ==="")
        {
            return "Write Correct UserName"
        }
        else if(updateData.contact.length!==10 ||updateData.contact==="")
        {
            return "Write Correct Phone Number"
        }
        else if(!updateData.email.includes("@") || updateData.email==="")
        {
            return "write Correct Email"
        }
        else if(updateData.address.length<4 ||updateData.address==="")
        {
            return "wrtie Correct Address"
        }
        else{
            return "";
        }
      }
  return (
   <>
     

    <div className={`${props.isOpen?"":"hidden"} absolute top-0 left-0 right-0 flex flex-col  py-5  justify-center backdrop-blur-2xl min-h-screen `}>
            <form onSubmit={handleUpdate}>
           <div className="border ipadmini:p-10   p-2 bg-[#3718298a] flex flex-col laptop:mx-64 ipadmini:mx-20 mx-2 justify-center items-center gap-y-5">  

            <div className="flex flex-row w-full justify-end">
                <span onClick={()=>{props.UpdateModel(false)}} className=" text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                 <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                </span>
            </div>

            <div className="">
                <label htmlFor="103" className=' flex flex-col justify-center items-center'>
                    <span className="">
                        <img src={userIcon} alt="" className="h-32 w-36 rounded-full " />
                    </span>
                <input type="file" className="hidden" id='103' onChange={(event)=>{Setimage(event.target.files[0])}} />
                <span className="text-neutral-200">{image!==""?"Done":"Update Image"}</span>
                </label>
                
            </div>

              {/* grid */}
              <div className=" grid ipadmini:grid-cols-2 grid-cols-1 gap-5 ipadmini: w-full">
                <div className=" flex flex-col gap-y-2 ">
                    <span className="text-white">Name</span>
                    <input value={updateData.userName} onChange={(e)=>{setUpdateData((prev)=>({...prev,userName:e.target.value}))}} type="text" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded" placeholder='Name' required/>
                </div>
                <div className=" flex flex-col gap-y-2">
                    <span className="text-white">PhoneNo.</span>
                    <input value={updateData.contact} onChange={(e)=>{setUpdateData((prev)=>({...prev,contact:e.target.value}))}} type="text" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded" placeholder='PhoneNo' required/>
                </div>
                <div className=" flex flex-col gap-y-2">
                    <span className="text-white">Email</span>
                    <input value={updateData.email} onChange={(e)=>{setUpdateData((prev)=>({...prev,email:e.target.value}))}} type="text" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded" placeholder='Email' required/>
                </div>
                <div className=" flex flex-col gap-y-2">
                    <span className="text-white">Address</span>
                    <input value={updateData.address} onChange={(e)=>{setUpdateData((prev)=>({...prev,address:e.target.value}))}} type="text" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded" placeholder='Address' required/>
                </div>
              </div>
              <div className="text-center">
                <button className=" py-1 px-14 mt-4 border text-white rounded active:scale-[1.04]">Update</button>
              </div>
                <span ref={userref} className="text-amber-600 font-medium h-6 ">  </span>
           </div>

           </form>
    </div>

  

    
   </>
  )
}
