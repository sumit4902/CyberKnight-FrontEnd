import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';
import axios from 'axios';
import ReadMore from './ReadMore';
import UpdateProfile from './UpdateProfile';


export default function Profile() {
  const [blogmodel, Setblogmodel] = useState(false);
  const { user, token, logout } = AuthUser();
  const userId = user;
  const usertoken = token;

  const [profiledata, setProfiledata] = useState(
    {
      userName: "",
      contact: "",
      email: "",
      address: "",
      apiKey: "",
      image: "",
      loading: true
    }
  )

  useEffect(() => {
    handleProfileApi();
    fetchAllblogsofUser();
  }, [])
  function handleProfileApi() {
    let url = `http://localhost:4202/api/v1/user/${userId}`
    axios.get(url, {
      headers: {
        "Authorization": `Bearer ` + usertoken
      }
    }).then((response) => {
      //  console.log(response);
      setProfiledata({ userName: response.data.userName, contact: response.data.contact, email: response.data.email, address: response.data.address, apiKey: response.data.apiKey, blogs: response.data.blogs, loading: false })
    }).catch((error) => {
      console.log(error);
      // logout();
      // window.location.reload();
    });
  }
  const [blogs, setBlogs] = useState([]);
  function fetchAllblogsofUser() {
    let url = `http://localhost:4202/api/v1/user/${userId}/blog/all`
    axios.get(url, {
      headers: {
        "Authorization": `Bearer ` + usertoken
      }
    }).then((response) => {
      // console.log(response);
      setBlogs(response.data);
    }
    ).catch((err) => {
      console.log(err);
    })
  }

  const [blogWriting, SetblogWriting] = useState({
    blogId: "",
    crimeType: "",
    title: "",
    commitPlace: "",
    description: "",

  })
  const [blogimage, setBlogImage] = useState("");
  const formData = new FormData();
  formData.append('image', blogimage);
  function handleUpdateBlog(blogId, crimeType, commitPlace, title, description) {
    SetblogWriting((prev) => ({ ...prev, blogId: blogId, crimeType: crimeType, commitPlace: commitPlace, title: title, description: description, }));
    //open Model for Updating //
    Setblogmodel(true);

  }

  function updateBlogApi(event) {
    event.preventDefault();
    //   console.log(blogWriting );
    let url = `http://localhost:4202/api/v1/blog/update/${blogWriting.blogId}`
    axios.put(url, {
      crimeType: blogWriting.crimeType.trim(),
      commitPlace: blogWriting.commitPlace.trim(),
      title: blogWriting.title.trim(),
      description: blogWriting.description.trim()
    }, {
      headers: {
        "Authorization": `Bearer ` + usertoken
      }
    }
    ).then((response) => {
      // console.log(response.data);
      if (blogimage !== "") {
        axios.put(`http://localhost:4202/api/v1/image/update/${response.data.image.imageId}`, formData);
      }
      Setblogmodel(false);
      window.location.reload();
    }).catch((error) => {
      // console.log(error);
    })

  }

  // Delete Blogs  //
  function DeleteBlog(id) {
    const deleteconfirmation = window.confirm("Sure You want Delete this Blog");

    if (deleteconfirmation) {
      let url = `http://localhost:4202/api/v1/blog/delete/${id}`
      axios.delete(url, {
        headers: {
          "Authorization": `Bearer ` + usertoken
        }
      })
        .then((response) => {
          // console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          //   console.log(error);
        })
    }
  }
  // ReadMore concept for Blog //
  const [isOpen, setIsOpen] = useState(false);
  function ReadMoreModel(value) {
    setIsOpen(value);
  }

  const [updateModel, setUpdateModel] = useState(false);
  function UpdateModel(value) {
    setUpdateModel(value);
  }
  return (
    <>
      <div className="w-[100%] bg-gradient-to-b from-[#0d0d2d] via-[#58325e] to-zinc-900 "  >
        <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]">

          <div className=" flex ipadmini:flex-row flex-col-reverse py-10  laptop:px-20 ipadmini:px-10">
            {/* Left Part */}
            <div className="  ipadmini:w-1/2 w-full  flex flex-col  p-3">
              <div className="relative text-white  flex flex-col rounded-lg  gap-y-2 p-5 bg-[#311d54]">
                <div className="text-3xl">{profiledata.userName}</div>
                <div className="">{profiledata.address}   </div>
                <div className="">{profiledata.email}</div>
                <span onClick={() => { UpdateModel(true) }} className="absolute text-white right-3 top-2  h-8 w-8 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </span>

              </div>
              <div className="text-white  rounded-lg p-2">I am professional Full Stack Web Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga dicta excepturi temporibus, magnam possimus ratione dolorem non optio quisquam?</div>

            </div>
            {/* Right Part  */}
            <div className="ipadmini:w-1/2 w-full flex justify-center ">

              <div className="border-4 border-violet-300 w-56 h-56 rounded-full   ">


                <img src={`http://localhost:4202/api/v1/image/user/${userId}`} alt="" className="h-full w-full rounded-full " />
              </div>
            </div>
          </div>


          {/* Blog Section */}
          <div className=" text-white text-2xl ipadmini:mx-20 mx-3">Your OverAll Blogs</div>
          <div className=" grid laptop:grid-cols-3 ipadmini:grid-cols-2 grid-cols-1 p-5 h-full min-h-[40rem] justify-items-center items-start  gap-y-7 laptop:px-20 ipadmini:px-10 ">
            {/* card -1 */}
            {
             blogs.map((blog) => {
                return ( 
                  <div className=" flex flex-col gap-y-2 border hover:rounded-lg hover:shadow-md hover:shadow-violet-100 transition-all duration-300  ipadmini:w-72 w-full  bg-[#34153185]">
                    <div className="border relative ">
                      <img src={`http://localhost:4202/api/v1/image/blog/${blog.blogId}`} alt="" className="w-full ipadmini:h-40 h-64  " />
                      <span className=" absolute left-0 bottom-0 px-2 bg-sky-600 text-white">November 20 2023</span>
                    </div>
                    <div className=" flex flex-row justify-start gap-x-2 px-5 items-center ">
                  <span className=" h-11 w-11 border-2 border-pink-200 rounded-full text-white ">
                     <img src={`http://localhost:4202/api/v1/image/user/${blog.user.userId}`}  alt="" className="w-full h-full rounded-full hover:scale-[4.05] transition-all" />
                  </span>
                  <span className="text-white font-medium text-lg">{blog.user.userName}</span>
                </div>
                    <div className=" px-3  font-medium text-slate-200">{blog.title}</div>
                    <div className=" px-3 text-[0.9rem] text-purple-200">{blog.description} </div>
                    <div className="  text-center  py-3 flex flex-row w-full justify-around">
                      <button onClick={() => { DeleteBlog(blog.blogId) }} className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold ">Delete</button>
                      <button onClick={() => { handleUpdateBlog(blog.blogId, blog.crimeType, blog.commitPlace, blog.title, blog.description) }} className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold ">Update</button>
                      <button onClick={() => { setIsOpen(true) }} className=" py-1 px-3 border rounded-lg active:scale-[1.07] bg-purple-300 font-semibold ">ReadMore</button>
                    </div>
                    {/* Readmore Section For Blog*/}
                    <ReadMore ReadmoreFunction={ReadMoreModel} isopen={isOpen} blogId={blog.blogId} title={blog.title} Address={blog.commitPlace} description={blog.description} />

                  </div>

                )
              })
            }



          </div>

          {/* UPDATE BLOG */}

          <div className={` ${blogmodel ? "" : "hidden"} absolute top-0 left-0 right-0 min-h-screen flex flex-col justify-start py-5 items-start backdrop-blur-2xl`}>
            <button className="w-full flex justify-end pe-10 text-white"><span className="" onClick={() => { Setblogmodel(false) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg></span>
            </button>
            <form onSubmit={updateBlogApi} className=" w-full ipadmini:px-28 px-2">

              <div className=" flex ipadmini:flex-row flex-col gap-y-3  justify-around items-center py-2">
                <input value={blogWriting.crimeType} onChange={(event) => (SetblogWriting((prev) => ({ ...prev, crimeType: event.target.value })))} type="text" className=" ipadmini:w-80 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='What Kind Of Attack' />
                <input value={blogWriting.title} onChange={(event) => (SetblogWriting((prev) => ({ ...prev, title: event.target.value })))} type="text" className=" ipadmini:w-80 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='Title of blog' />
                <input value={blogWriting.commitPlace} onChange={(event) => (SetblogWriting((prev) => ({ ...prev, commitPlace: event.target.value })))} type="text" className=" ipadmini:w-80 w-full p-2 bg-transparent border-2 text-white placeholder-white focus:outline-none rounded focus:shadow-md shadow-slate-300" placeholder='commit place' />

              </div>
              <textarea value={blogWriting.description} onChange={(event) => (SetblogWriting((prev) => ({ ...prev, description: event.target.value })))} name="" className='min-h-80  w-full p-5 focus:outline-none bg-transparent border-2 border-white text-white rounded-md placeholder-stone-200' placeholder='Write Your Incident , Advice Regarding CyberCrime'></textarea>
              <div className=" flex flex-row justify-around items-center  py-2">
                <span className="  text-center ">
                  <label htmlFor="102" className=''><span className=" py-2 px-5 border rounded text-white">{blogimage == "" ? "Upload Image" : "Uploaded"}</span></label>
                  <input type="file" className="hidden" id='102' placeholder='Select Image' onChange={(e) => { setBlogImage(e.target.files[0]) }} />
                </span>
                <button type='submit' className="border py-[0.45rem] px-8 rounded active:scale-[1.07] text-white">Send</button>
              </div>
            </form>
          </div>



        </div>
      </div>

      <UpdateProfile UpdateModel={UpdateModel} isOpen={updateModel} profileData={profiledata} usertoken={usertoken} userId={userId} />

    </>
  )
}
