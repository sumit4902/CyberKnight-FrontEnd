import React, { useState } from 'react'

export default function Accordian(props) {

    const[accordian,Setaccordian]=useState(false);
  return (
    <>
        <div className=" bg-violet-300 mx-3 mb-5">
            <button className="  flex flex-row w-full justify-between items-center " onClick={()=>{Setaccordian(!accordian)}}>
            <div className=" py-2 px-5 ">
               {props.question}
            </div>
            <div className="   font-semibond text-4xl px-5 rounded-full">{`${accordian?"-":"+"}`}</div>
            </button>
            <div className={` grid overflow-hidden transition-all duration-500 ease-in-out ${accordian?'grid-rows-[1fr] opacity-100 my-2':'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden bg-violet-100 px-6">
                    {props.answer}
                </div>
            </div>
        </div>
    </>
  )
}
