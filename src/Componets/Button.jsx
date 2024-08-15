import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs"

export const Button = () => {
  return (
    <button  className='text-black flex justify-between items-center gap-4 bg-white px-5 py-[8px] font-semibold rounded-full '>
      Start a Projecrt
      <div className='flex mt-2 justify-center w-3'>
      <BsArrowReturnRight  />
      </div>
    </button>
  )
}
