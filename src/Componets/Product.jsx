import { motion } from 'framer-motion'
import React from 'react'

const Product = ({val}) => {

  

  return (
    <>
        <div className='py-6 border-t-[1px] border-r-[1px] border-b-[1px]  border-zinc-600 px-10 justify-between w-[16.6%] flex items-center' >
            <img src={val.img} alt="" />
            <h3 className='text-xl font-semibold'>{val.number}</h3>
        </div>
    </>
  )
}

export default Product