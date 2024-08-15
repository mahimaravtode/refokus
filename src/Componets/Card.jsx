import React from 'react'
import { Button } from './Button'

const Card = ({val,title,mover,index}) => {
  return (
    <>
        <div className='w-full h-[26rem] '>
            <div onMouseEnter={()=>{mover(index)}} className='max-w-screen-xl py-20  mx-auto flex justify-between items-center '>
                <h1 className='text-5xl'>{val.name}</h1>
                 <div className='w-[26%]'>
                 <p className='mb-5 text-[18px]'>{val.description}</p>
                 <Button />
                 </div>
                
            </div>
        </div>
    </>
  )
}

export default Card