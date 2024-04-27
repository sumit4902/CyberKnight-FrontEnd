import React, {  useRef, useState } from 'react'
import signImage from './loginImage.png'
import loginimage from './signupimge.png'
import userIcon from'./userIcon.png'
import axios from 'axios';
import AuthUser from './AuthUser'


export default function Login() {
    const[swipper,Setswipper]=useState(true);
    
   

    const[userDetails,setUserDetail]= useState({
        userName:"",
        contact:"",
        email:"",
        password:"",
        confirmPassword:"",
        address:""
    })

    const [logindetail,setlogindetail] = useState({
        username:"",
        password:""
    });
    const {setToken} = AuthUser();
  
   const userref  = useRef();
   const signupref = useRef();
   
    
   //Login Api calling 

    const handleLogin=(e)=>{
      e.preventDefault();
      let check=loginValidation();
      if(check==="")
      {
        let url ='http://localhost:4202/api/v1/auth/login'
        axios.post(url,
        logindetail
    ).then((response)=>{
       // console.log(response.data);
        if(response.data!=='Invalid Username or Password  !!')
        {
            setToken(response.data.id,response.data.jwtToken);
            window.location.reload();
        }
      else{
        userref.current.innerHTML="Invalid userName Or password";
          }
       

    })
    .catch(()=>{
       
        userref.current.innerHTML="Invalid userName Or password";
    })
  }
  else{
       userref.current.innerHTML=check;
  }
    }
 
  // SignUp Api calling  //
   const  handleSignUp =(e)=>{
   e.preventDefault();
   let check = signUpValidation();
       if(check==="")
   {
    let url = 'http://localhost:4202/api/v1/user/create'  
    axios.post(url,
     {
        userName:userDetails.userName.trim(),
        contact:userDetails.contact.trim(),
        address:userDetails.address.trim(),
        email:userDetails.email.trim(),
        password:userDetails.password.trim()
     }
    ).then((response)=>{
      console.log(response);
      Setswipper(true);   // image post api also call here //
          })
    .catch((error)=>{
      //console.log(error);
      signupref.current.innerHTML="Account is Already Exist Login Please !";
    }
    )}
        else{
            signupref.current.innerHTML=check;
        }
   }

   // Validation Functions //

   function signUpValidation()
   {
    if(userDetails.userName.length < 4 || userDetails.userName === "") {
        return "Please Write Correct username";
    }
    else if(userDetails.contact.length !==10 || userDetails.contact==="")
    {
        return "write correct PhoneNumber";
    }
    else if(!userDetails.email.includes('@') || userDetails.email==="")
    {
        return "write Correct email address";
    }
    else if(userDetails.address.length <=4 || userDetails.address==="")
    {
        return "write Correct Address";
    }
    else if(userDetails.password!==userDetails.confirmPassword)
    {
      return 'Password unmatched'
    }
    else{
        return"";
    }
   }

   function loginValidation()
   {
    if(logindetail.username.length <5 || logindetail.username==="" || logindetail.password.length<5 || logindetail.password==="")
    {
        return "Invalid username password";
    }
    else{
        return""
    }
   }

  return (
   <>
    <div className=" w-[100%] bg-gradient-to-b from-[#242472] via-[#81358c] to-zinc-900">
     <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]   ">
      
      
         <div className="relative flex ipadmini:flex-row flex-col  laptop:mx-14  ">
            {/* Swipper */}
            <div className={`absolute top-0 ${swipper?"ipadmini:translate-x-0 translate-y-0 ":"ipadmini:translate-x-[100%] ipadmini:translate-y-0 translate-y-[100%]"}  left-0  ipadmini:h-full h-[53%] ipadmini:w-1/2 w-full transition-all duration-700 ease-in-out   bg-gradient-to-b from-[#242472] via-[#81358c] to-zinc-900 `}>
                  <div className={`${swipper?'block':"hidden"} flex justify-center items-center h-full`}>
                    <img src={loginimage} alt="" className=" h-full w-full p-20 " />
                  </div>
                  <div className={`${swipper?'hidden':"block"} flex justify-center items-center h-full`}>
                    <img src={signImage} alt="" className=" h-full w-full p-20  " />
                    </div>  
                
            </div>
            {/* left */}
            <div className="ipadmini:w-1/2 w-full border py-8">
                    <form onSubmit={handleSignUp} action="" className=" grid grid-cols-2 px-8 gap-6 place-content-center">
                        <div className="col-span-2 flex flex-row items-center ipadmini:gap-x-28 gap-x-8 ">
                            <div className={`"relative ${swipper?"invisible":""} `}>
                               <label htmlFor="101"> <img src={userIcon} alt="" className="h-20 w-24 " />
                                <input type="file" className="hidden" id='101'/>
                                <span className="absolute  top-28 text-sky-100 font-semibold min-w-28">upload image</span>
                                </label>
                            </div>
                        <div className="text-center text-white text-lg font-medium">SignUp Now</div>
                        </div>
                        <div className=" flex flex-col gap-y-2 ">
                            <span className="text-white"> Your Name <span className="text-red-200 ps-2">*</span></span>
                            <input onChange={(e)=>{setUserDetail((prev)=>({...prev,userName:e.target.value}))}} type="text" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='Enter Name' />
                   
                        </div>
                        <div className=" flex flex-col gap-y-2 ">
                            <span className="text-white">PhoneNo <span className="text-red-200 ps-2">*</span></span>
                            <input onChange={(e)=>{setUserDetail((prev)=>({...prev,contact:e.target.value}))}} type="number" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='PhoneNo' />                   
                        </div>
                        <div className=" flex flex-col gap-y-2">
                            <span className="text-white">Email</span>
                            <input onChange={(e)=>{setUserDetail((prev)=>({...prev,email:e.target.value}))}} type="email" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='email' />                   
                        </div>
                        <div className=" flex flex-col gap-y-2 ">
                            <span className="text-white">Address <span className="text-red-200 ps-2">*</span></span>
                            <input onChange={(e)=>{setUserDetail((prev)=>({...prev,address:e.target.value}))}} type="text" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='address' />                   
                        </div>
                        <div className=" flex flex-col gap-y-2 ">
                            <span className="text-white">Password <span className="text-red-200 ps-2">*</span></span>
                            <input onChange={(e)=>{setUserDetail((prev)=>({...prev,password:e.target.value}))}} type="password" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='Password' />                   
                        </div>
                        <div className=" flex flex-col gap-y-2 ">
                            <span className="text-white">ConfirmPassword <span className="text-red-200 ps-2">*</span></span>
                            <input onChange={(e)=>{setUserDetail((prev)=>({...prev,confirmPassword:e.target.value}))}} type="password" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='Again Password' />                   
                        </div>
                         <span className="col-span-2 text-amber-600 font-semibold h-6 text-center" ref={signupref}></span>                    

                        <div className=" col-span-2  text-center">
                        <button className="border px-10 py-[8px] text-white font-medium rounded active:scale-[1.07]">SignUp</button>
                        </div>
                        <div className="col-span-2 text-white text-center w-full" onClick={()=>{Setswipper(true)}}>If you are Already Registered then login</div>
                    </form>
            </div>
            {/* Right */}
            <div className="ipadmini:w-1/2 w-full  flex flex-col justify-center items-center">
                <form onSubmit={handleLogin} action="" className=" flex flex-col justify-center items-center gap-y-5 border p-14">
                <div className="text-white text-center text-xl font-medium">Login Now</div>       
                    <div className="w-full"><span className="text-white">Enter Email or PhoneNo</span><span className="text-red-200 ps-2">*</span> </div>
                    <input onChange={(e)=>{setlogindetail((prev)=>({...prev,username:e.target.value}))}} type="text" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='Email or PhoneNo' />
                    <div className="w-full"><span className="text-white">Enter Password</span><span className="text-red-200 ps-2">*</span></div>
                    <input onChange={(e)=>{setlogindetail((prev)=>({...prev,password:e.target.value}))}} type="password" className="w-full focus:outline-none py-2 px-2 bg-transparent border-[1.5px] focus:shadow-md focus:shadow-violet-300 text-white placeholder-zinc-300 rounded-md" placeholder='Email Password' />
                    <span className="text-amber-600 font-semibold h-6" ref={userref}></span>          

                    <button className="border px-10 py-[8px] text-white font-medium rounded active:scale-[1.07]">SignIn</button>
                    <div className="text-white">If you have no Account 
                     <span  className='text-white underline ps-2' onClick={()=>{Setswipper(false)}}>Signup</span>
                    </div>
                   
                </form>
               
            </div>
         </div>
      </div>
      </div>
   </>
  )
}
