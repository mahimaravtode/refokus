import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({imagesurl,direaction}) => {
  
  return (
    <>
       <div className='flex w-full overflow-hidden'>
        <motion.div initial={{x:direaction==='left'? "0":"-100%"}} animate={{x:direaction==='left'? "-100%":"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-14'>
          {imagesurl.map((url,index)=>(
            <img src={url} alt="" />
          ))}
        </motion.div>
        <motion.div initial={{x:direaction==='left'? "0":"-100%"}} animate={{x:direaction==='left'? "-100%":"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-14'>
          {imagesurl.map((url,index)=>(
            <img src={url} alt="" />
          ))}
        </motion.div>
     
       </div>
      
    </>
  )
}

export default Marquee