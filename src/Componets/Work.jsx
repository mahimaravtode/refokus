import React, { useState } from 'react'
import { useMotionValueEvent, useScroll,motion } from "framer-motion"

const Work = () => {
  const [images, setimages] = useState(
    [
      { img: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isactive: false },
      { img: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left: "44%", isactive: false },
      { img: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "56%", isactive: false },
      { img: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "60%", left: "53%", isactive: false },
      { img: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "43%", left: "40%", isactive: false },
      { img: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "65%", left: "55%", isactive: false },

    ]
  )
  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change", (data) => {
    function imageshow(arr) {
      setimages((prev) => (
        prev.map((item, index) => (
         arr.indexOf(index) === -1 ? (
            { ...item, isactive: false }) :
            ({ ...item, isactive: true })

        ))
      ))
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageshow([]);
        break;
      case 1:
        imageshow([0]);
        break;
      case 2:
        imageshow([0, 1]);
        break;
      case 3:
        imageshow([0, 1]);
        break;
      case 3.5:
        imageshow([0, 1, 2, 3]);
        break;
      case 4:
        imageshow([0, 1, 2, 3, 4]);
        break;
      case 4.5:
        imageshow([0, 1, 2, 3, 4, 5]);
        break;
    }
  }

  )

  return (
    <>
      <div className='w-full mt-10 '>
        <div className='max-w-screen-xl mx-auto text-center  relative'>
          <h1 className='text-[30vw] leading-none font-medium tracking-tight'>
            work
          </h1>
          <div className='w-full h-fulll top-0 '>
            {images.map((elem) => {
              return elem.isactive && (
                <img className='absolute w-60 -translate-x-[50%] -translate-y-[50%] rounded-lg' src={elem.img} alt="" style={{ top: elem.top, left: elem.left }} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Work