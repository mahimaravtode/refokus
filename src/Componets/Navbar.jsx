import React from 'react'
import { Button } from './Button'

const Navbar = () => {
  return (
    <>
      <div className='max-w-screen-xl py-4 border-b-1  mx-auto flex justify-between items-center gap-20'>
        <div className='right flex gap-20'>
          <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          <div className='links flex gap-14 '>
            {["Home", "Work", "About", "News", "Careers"].map((elem) => (
              <a href="#" className='text-sm' >{elem}</a>
            ))}
          </div>
        </div>
        <div className='left'>
          <Button />
        </div>
      </div>
    </>
  )
}

export default Navbar