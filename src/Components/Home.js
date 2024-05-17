import React, { useEffect, useState } from 'react'
import shieldImage from './ShieldImage.png'
import ringImage from './ringImage.png'
import imagemen from './imagemen.png'
import AboutImage from './AboutImage.png'
import AuthImage from './HomeAuthImage.png'
import mark from './mark-removebg-preview.png'
import { Link } from 'react-router-dom'
import AuthUser from './AuthUser';
import axios from 'axios'
import image1 from '../Images/Screenshot__43_-removebg-preview.png'
import image2 from '../Images/Screenshot__44_-removebg-preview.png'
import image3 from '../Images/Screenshot__45_-removebg-preview.png'
import image4 from '../Images/Screenshot__46_-removebg-preview.png'
import image5 from '../Images/Screenshot__47_-removebg-preview.png'
import image6 from '../Images/Screenshot__48_-removebg-preview.png'
import workerImage from '../Images/CyberSecurityWorkers.png'

export default function Home() {
  const { user, token, logout } = AuthUser();
  const [blogs, setBlogs] = useState([]);

  function fetchAllblogsofUser() {
    let url = `http://localhost:4202/api/v1/blog/all?crimeType=&title=&commitPlace=&pageNo=0&pageSize=3&sortBy=blogId&direc=desc`
    axios.get(url, {
      headers: {
        "Authorization": `Bearer ` + token
      }
    }).then((response) => {
      // console.log(response);
      setBlogs(response.data.content);
    }
    ).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
   
    fetchAllblogsofUser();
  }, [])
  return (
    <>
     <div className=" w-[100%] bg-gradient-to-b from-[#242472] via-[#81358c] to-zinc-900">
     <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]   ">
      
              {/* HeroScection */}
             <div className=" flex ipadmini:flex-row flex-col-reverse ipadmini:px-14 px-2 ipadmini:py-20 pb-20">
               {/* leftsection */}
               <div className=" ipadmini:w-1/2 p-2 flex flex-col justify-center gap-y-5 text-white ">
                <div className=" text-5xl font-bold">Protecting Your Digital World</div>
                <div className="max-w-96 text-4xl font-bold">One Byte At a Time</div>
                <div className=" max-w-96">Your Secure Digital Haven. Explore advanced encryption, insightful cyber security blogs, and robust user management. Empowering your digital journey with educational resources on networking, cryptography, and cyber law. </div>
              
                <div className=" laptop:text-start text-center mt-6">
                <Link to='/EncryptionTool/AES' className=" border py-3 px-7  rounded-md active:scale-[1.05] font-semibold  ">Get Started</Link>
              
                </div>
               
               </div>
               {/* RightSection */}
                <div className=" ipadmini:w-1/2  flex flex-col justify-center items-center relative py-10  ">
                    <img src={shieldImage} alt="" className=" h-72 w-72 p-10 " />
                    <img src={ringImage} alt="" className=" absolute top-22 h-48 w-48 animate-ping" />
                </div>
             </div>
                

              {/* Services   */}
              <div className=" text-white">
                <div className=" font-semibold text-4xl text-center ">Our Services</div>
                <div className="text-lg text-center p-3">Cyber Security Solutions</div>
               
                <div className=" grid ipadmini:grid-cols-3 grid-cols-2 gap-3 gap-y-5 py-2 ipadmini:mx-14 mx-2 place-items-center  laptop:px-28 ">
                    
                    <div className="border rounded-md  flex flex-col gap-y-2 max-w-60 min-h-80 p-5  justify-center items-center shadow-md shadow-indigo-300   bg-[#34153185]">
                       <img src={image1} className="w-24 h-24  p-1"></img>
                       <span className="text-lg font-medium text-slate-200">EncryptionTool</span>
                       <div className="text-sm text-center text-purple-200">Effortless Encryption & Decryption for Everyone , Protect Your Information in a Few Clicks</div>
                       <Link to='/EncryptionTool/AES' className=" border py-1 px-10 bg-purple-300 rounded active:scale-[1.04] text-black font-medium">Go</Link>
                    </div>
                    <div className="border rounded-md  flex flex-col gap-y-2 max-w-60 min-h-80 p-5  justify-center items-center shadow-md shadow-indigo-300   bg-[#34153185]">
                    <img src={image6} className="w-24 h-24  p-1"></img>
                       <span className="text-lg font-medium text-slate-200">CyberSecurity Blogs</span>
                       <div className="text-sm text-center text-purple-200">Write and Publish Blogs on Cyber Security , Latest News and Incidents in Cyber Security</div>
                       <Link to='/Blogs' className=" border py-1 px-10 bg-purple-300 rounded active:scale-[1.04] text-black font-medium">Go</Link>
                    </div>
                    <div className="border rounded-md  flex flex-col gap-y-2 max-w-60 min-h-80 p-5  justify-center items-center shadow-md shadow-indigo-300   bg-[#34153185]">
                    <img src={image5} className="w-24 h-24  p-1"></img>
                       <span className="text-lg font-medium text-slate-200">Authentication Apis</span>
                       <div className="text-sm text-center text-purple-200">Manage Your Authentication Effortlessly</div>
                       <Link to='/Authapi' className=" border py-1 px-10 bg-purple-300 rounded active:scale-[1.04] text-black font-medium">Go</Link>
                    </div>
                    <div className="border rounded-md  flex flex-col gap-y-2 max-w-60  min-h-80 p-5  justify-center items-center shadow-md shadow-indigo-300   bg-[#34153185]">
                    <img src={image2} className="w-24 h-24  p-1"></img>
                       <span className="text-lg font-medium text-slate-200">Cryptography</span>
                       <div className="text-sm text-center text-purple-200">Learn the basic principles and techniques of cryptography.</div>
                       <Link to='/EncryptionTool/AES' className=" border py-1 px-10 bg-purple-300 rounded active:scale-[1.04] text-black font-medium">Go</Link>
                    </div>
                    <div className="border rounded-md  flex flex-col gap-y-2 max-w-60 min-h-80 p-5  justify-center items-center shadow-md shadow-indigo-300   bg-[#34153185]">
                    <img src={image3} className="w-24 h-24  p-1"></img>
                       <span className="text-lg font-medium text-slate-200">CyberLaw</span>
                       <div className="text-sm text-center text-purple-200">Gain a comprehensive understanding of the legal aspects of cyberspace.</div>
                       <Link to='/EncryptionTool/AES' className=" border py-1 px-10 bg-purple-300 rounded active:scale-[1.04] text-black font-medium">Go</Link>
                    </div>
                    <div className="border rounded-md  flex flex-col gap-y-2 max-w-60 min-h-80 p-5  justify-center items-center shadow-md shadow-indigo-300   bg-[#34153185]">
                    <img src={image4} className="w-24 h-24  p-1"></img>
                       <span className="text-lg font-medium text-slate-200">Networking</span>
                       <div className="text-sm text-center text-purple-200">Step-by-Step Networking Guides for Beginners and Experts</div>
                       <Link to='/EncryptionTool/AES' className=" border py-1 px-10 bg-purple-300 rounded active:scale-[1.04] text-black font-medium">Go</Link>
                    </div>
                </div>
              </div>

              {/* What We Do */}
              <div className=" flex ipadmini:flex-row flex-col ipadmini:mx-14  py-8 laptop:gap-x-10">
                {/* left part */}
                <div className=" ipadmini:w-1/2 flex justify-center items-center w-full  ">
                   <div className="rounded-full border-2    flex justify-center items-center h-72 w-72 ">
                    <img src={imagemen} alt="" className=" h-60 w-60 " />
                    </div>
                </div>
                {/* Right Part */}
                <div className="ipadmini:w-1/2  w-full flex flex-col gap-y-2 p-2 justify-center ">

                    <span className="text-[#fcd2fc] text-2xl font-semibold">What We Do</span>
                    <div className="text-3xl font-medium text-white">Guide Reliable Security Intellengence</div>
                    <div className="text-white"> Expand Your Knowledge with Educational Resources , Navigate the Legal Landscape of Cyberspace</div>
                      {/* grid */}
                    <div className="grid grid-cols-2 gap-5  p-2 place-items-center">
                        <div className=" flex flex-row gap-x-2 justify-around border rounded-md p-1">
                            <img src="https://elementorpress.com/templatekit-pro/layout87/wp-content/uploads/2023/04/how-we-are-home6.png " alt="" className=" w-20 h-14  " />
                            <span className=" text-white px-1 laptop:text-lg text-sm">Advanced Data Encryption</span>
                        </div>
                        <div className=" flex flex-row gap-x-2 justify-around border rounded-md p-1">
                            <img src="https://elementorpress.com/templatekit-pro/layout87/wp-content/uploads/2023/04/how-we-are-home6.png " alt="" className=" w-20 h-14  " />
                            <span className=" text-white px-1 laptop:text-lg text-sm">Cyber Security Blogs</span>
                        </div>
                        <div className=" flex flex-row gap-x-2 justify-around border rounded-md p-1">
                            <img src="https://elementorpress.com/templatekit-pro/layout87/wp-content/uploads/2023/04/how-we-are-home6.png " alt="" className=" w-20 h-14  " />
                            <span className=" text-white px-1 laptop:text-lg text-sm">Authentication Management</span>
                        </div>
                        <div className=" flex flex-row gap-x-2 justify-around border rounded-md p-1">
                            <img src="https://elementorpress.com/templatekit-pro/layout87/wp-content/uploads/2023/04/how-we-are-home6.png " alt="" className=" w-20 h-14  " />
                            <span className=" text-white px-1 laptop:text-lg text-sm">Educational Cyber Resources</span>
                        </div>
                    </div>
                </div>
              </div>
             

              <div className=" flex ipadmini:flex-row-reverse flex-col ipadmini:mx-14  py-8 laptop:gap-x-10">
                {/* left part */}
                <div className=" ipadmini:w-1/2 flex justify-center items-center w-full  ">
                   <div className="   flex justify-center items-center p-1 ">
                    <img src={workerImage} alt="" className=" rounded-ss-[100px] rounded-ee-[100px] " />
                    </div>
                </div>
                {/* Right Part */}
                <div className="ipadmini:w-1/2   w-full flex flex-col items-center gap-y-2 p-3  ">
                   <span className="text-2xl text-[#fcd2fc] font-semibold ">How Got Our Authentication API's</span>
                   <span className=" text-xl  text-white">we store your user in our secure database </span>
                   <div className=" flex flex-col gap-y-2 justify-center p-2">
                    <div className=" flex flex-row items-center border p-2 rounded-md max-w-80">
                        <img src={mark} alt="" className="h-10 w-10" />
                        <span className="text-white text-lg">Create Account on our website</span>
                    </div>
                    <div className=" flex flex-row items-center border p-2 rounded-md max-w-80 ">
                        <img src={mark} alt="" className="h-10 w-10" />
                        <span className="text-white text-lg">Get Authentication Api Key to Use Api in your Project</span>
                    </div>
                    <div className=" flex flex-row items-center border p-2 rounded-md max-w-80">
                        <img src={mark} alt="" className="h-10 w-10" />
                        <span className="text-white text-lg">Get Authentication Api</span>
                    </div>
                    <div className=" flex flex-row items-center border p-2 rounded-md max-w-80">
                        <img src={mark} alt="" className="h-10 w-10" />
                        <span className="text-white text-lg">Hit Api's in your project to store your user's crendential in our secure database</span>
                    </div>
                    <div className="text-center mt-2">
                        <Link to='/Authapi' className="border py-3 px-7  rounded-md active:scale-[1.05] font-semibold text-white">Know More</Link>
                    </div>
                   </div>
                </div>
             </div>
                      {/* Latest blog section  */}
                      <div className="">
                        <div className="text-center text-white text-4xl font-medium  m-7"> Our Latest Blog </div>
                        <div className="grid laptop:grid-cols-3 ipadmini:grid-cols-2 grid-cols-1 gap-4 p-5 ipadmini:mx-14  place-items-center">
                            {/* card-1 */}
                            {
                             blogs.map((blog)=>{
                              return(
                                <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-md hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full  bg-[#34153185]">
               <div className="border relative ">
                <img src={`http://localhost:4202/api/v1/image/blog/${blog.blogId}`} alt="" className="w-full ipadmini:h-40 h-64  " />
                <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                </div> 
                <div className=" flex flex-row justify-start gap-x-2 px-5 items-center ">
                  <span className=" h-11 w-11 border-2 border-pink-200 rounded-full text-white ">
                     <img src={`http://localhost:4202/api/v1/image/user/${blog.user.userId}`} alt="" className="w-full h-full rounded-full hover:scale-[4.05] transition-all" />
                  </span>
                  <span className="text-white font-medium text-lg">{blog.user.userName}</span>
                </div>
               <div className=" px-3  font-medium text-slate-200">{blog.title}</div>
               <div className=" px-3 text-[0.9rem] text-purple-200">{blog.description}</div>
               <div className=" px-3 text-center p-2 py-3">
                <Link to='/Blog' className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold">ReadMore</Link>
               </div>
            </div>
                              )
                             })
                            }
            
                        </div>
                      </div>

                      {/* AboutUs */}
                      <div className="text-white text-center text-4xl my-5">About Us</div>
                      <div className=" flex ipadmini:flex-row flex-col ipadmini:mx-14 p-2 gap-x-4 py-8">
                        {/* Leftpart */}
                        <div className=" ipadmini:w-1/2 w-full ">
                            <img src={AboutImage} alt="" className="h-96 " />
                        </div>
                        {/* Right */}
                        <div className=" ipadmini:w-1/2 w-full flex flex-col justify-center ipadmini:ps-10 gap-y-2  p-2">
                              <div className="text-white text-3xl">we strive to empower our users to navigate the cyber world confidently and safely.</div>
                              <span className="text-white">we are dedicated to providing top-tier cyber security encryption Algorithms Application and educational resources. Our mission is to empower individuals and organizations to protect their digital assets and stay informed about the latest developments in cyber security.</span>
                              <div className=" flex flex-row justify-around   text-white">
                                <span className="">Our Experiance</span>
                                <span className="">Why Us ?</span>
                                <span className="">Our Goal</span>
                              </div>
                              <div className="text-white">Our goal is to create a secure and informed digital community. We believe in the power of knowledge and technology to protect against cyber threats and enhance digital literacy. </div>
                              <div className="text-center">
                      
                              </div>
                        </div>
                      </div>
      </div>
      </div>
    </>
  )
}
