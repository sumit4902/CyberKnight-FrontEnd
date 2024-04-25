import axios from 'axios';
import React, { useState } from 'react'

export default function AuthApi() {
    const[nav,Setnav]=useState(false);
    var id=1;

    const[responseKey,SetresponseKey]=useState({
        key:""  /// props se ane bali spi key initialise krna hai //
    })
    // function to get api key //  function jab chalega jab key null ho //
    function getKey()
    { 
        let url=`http://localhost:4202/api/v1/user/${id}/apiKey`
        axios.post(url)
        .then((response)=>{
            console.log(response);
         //  SetresponseKey({key:response.data});
        })
        .catch((error)=>
    {
        console.log(error);
    })
    }
    
  return (
   <>
   <div className="w-[100%]  bg-gradient-to-b from-[#242472] via-[#81358c] to-zinc-900 ">
    <div className="mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]">

   
     <div className="">
        <div className=" flex justify-center  py-2 ">
             <nav className=" flex flex-row justify-between items-center border p-2 rounded-lg ipadmini:w-96 w-full mx-2 bg-neutral-100">
                <span onClick={()=>{Setnav(false)}} className=" border rounded-lg px-1 py-1 bg-sky-800 text-white active:scale-[1.07] cursor-pointer">Documentation</span>
                <span onClick={()=>{Setnav(true)}} className=" border rounded-lg px-5 py-1 bg-sky-800 text-white active:scale-[1.07] cursor-pointer">Api's</span>
             </nav>
        </div>
        <div className= {`${nav?"":"hidden"} grid grid-cols-1 gap-y-5 ipadmini:px-16 px-2 `}>
            <div className="bg-[#55281b85] text-white p-2">Note : You have to generate ApiKey to Use these following apis. If you lost the key then we will not responsible for that you may lost your data ,so please keep it carefully.</div>
            <div className="grid ipadmini:grid-cols-3  grid-cols-1 place-items-center  gap-2 p-2 bg-[#1c1b5585]">
                <div className=" border px-3 py-1 min-w-28 text-center bg-blue-300">ApiKey</div>
                <div className=" border px-3 py-1 min-w-80 h-8 bg-blue-300">{responseKey.key===''?'Generate Api key':responseKey.key}</div>
                <button onClick={()=>{getKey()}} className="border px-2 py-1 rounded active:scale-[1.07] bg-blue-300">IssueApi</button>
            </div>
            <div className="grid ipadmini:grid-cols-3  grid-cols-1 place-items-center  gap-2 p-2  bg-[#1c1b5585]">
                <div className=" border px-3 py-1 min-w-28 text-center bg-violet-300">SignUp</div>
                <div className=" border px-3 py-1  bg-violet-300">348093409348093ldksd980samdmla</div>
                <button className="border px-2 py-1 rounded active:scale-[1.07]  bg-violet-300">copy</button>
            </div>
            <div className="grid ipadmini:grid-cols-3  grid-cols-1 place-items-center  gap-2 p-2  bg-[#1c1b5585]">
                <div className=" border px-3 py-1 min-w-28 text-center  bg-violet-300">Verification</div>
                <div className=" border px-3 py-1  bg-violet-300">348093409348093ldksd980samdmla</div>
                <button className="border px-2 py-1 rounded  active:scale-[1.07]  bg-violet-300">copy</button>
            </div>
            <div className=" grid ipadmini:grid-cols-3  grid-cols-1 place-items-center  gap-2 p-2  bg-[#1c1b5585]">
                <div className=" border px-3 py-1 min-w-28 text-center  bg-violet-300">SignIn</div>
                <div className=" border px-3 py-1  bg-violet-300">348093409348093ldksd980samdmla</div>
                <button className="border px-2 py-1 rounded active:scale-[1.07]  bg-violet-300">copy</button>
            </div>
            <div className=" grid ipadmini:grid-cols-3  grid-cols-1 place-items-center  gap-2 p-2  bg-[#1c1b5585]">
                <div className=" border px-3 py-1 min-w-28 text-center  bg-violet-300">UpdateUser</div>
                <div className=" border px-3 py-1  bg-violet-300">348093409348093ldksd980samdmla</div>
                <button className="border px-2 py-1 rounded active:scale-[1.07]  bg-violet-300">copy</button>
            </div>
            <div className=" grid ipadmini:grid-cols-3  grid-cols-1 place-items-center  gap-2 p-2  bg-[#1c1b5585]">
                <div className=" border px-3 py-1 min-w-28 text-center  bg-violet-300">DeleteUser</div>
                <div className=" border px-3 py-1  bg-violet-300">348093409348093ldksd980samdmla</div>
                <button className="border px-2 py-1 rounded active:scale-[1.07]  bg-violet-300">copy</button>
            </div>
            <div className="grid ipadmini:grid-cols-3  grid-cols-1 place-items-center  gap-2 p-2  bg-[#1c1b5585]">
                <div className=" border px-3 py-1  min-w-28 text-center  bg-violet-300">Get All User</div>
                <div className=" border px-3 py-1  bg-violet-300">348093409348093ldksd980samdmla</div>
                <button className="border px-2 py-1 rounded active:scale-[1.07]  bg-violet-300">copy</button>
            </div>
        </div>

        {/* Docs */}
        <div className={`${nav?"hidden":""} laptop:mx-28 mx-2 bg-[#34153185] text-white bg-opacity-30 flex flex-col gap-y-3  p-3`}>
            <div className="text-center text-2xl font-semibold  ">Documentation</div>
              <div className=" text-2xl  ">Step 1: You have to signup on cyberKnight and Get key for Api Calling </div>
              
              <div className="text-2xl">Step 2: Here Signup api to create your user Account in our database</div>
              <img src="" alt="" className=" h-20 w-full border border-red-600" />
              <div className="text-2xl"> Step 3: email OTP verification api : Verify With email Address</div>
              <img src="" alt="" className="h-20 w-full border border-red-600" />
              <div className="text-2xl"><span className="">Step 4: LOGIN :</span>Login Api for user login</div>
              <img src="" alt="" className="h-20 w-full border border-red-600" />
              <div className="text-2xl">Step 5: You may Update Delete or Get All user from databases</div>
              <img src="" alt="" className="h-20 w-full border border-red-600" />
        </div>



     </div>


     </div>
   </div>
   </>
  )
}
