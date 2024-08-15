import React, { useState } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

const Cards = () => {
  const cards = [
    {
      name: 'Arquite',
      description: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.'
    },
    { name: 'Cula', description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates." },
    { name: 'Layout Land', description: 'An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.' },
    { name: 'TTR', description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design." },
    { name: 'Maniv', description: 'A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.' },
    { name: 'Singularity', description: 'A new site for Singularity that supports their growth and showcases their true identity as industry innovators.' },
    { name: 'Like Magic', description: 'We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.' },
    { name: 'Silvr', description: 'We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.' },
    { name: 'Rainfall', description: 'We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.' },
    { name: 'Intenseye', description: 'A brand new website for Intenseye just before their $64M Series. ' },
    { name: 'Remind', description: 'Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.' },
    { name: 'Summon', description: 'We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.' },
    { name: 'Jungle', description: 'A complete redesign of a health-startup website, followed by cutting edge development.' },
    { name: 'CAndid Health', description: 'A complete redesign of a health-startup website, followed by cutting edge development.' },
    { name: 'Yahoo!', description: 'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.' },
    { name: 'YIR 2022', description: 'Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.' },
    { name: 'YIR 2021', description: 'We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.' },
    { name: 'Showcase', description: 'Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.' },
    { name: 'Weglot', description: 'We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.' },
    { name: 'RocketChat', description: 'We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.' },
  ]


  const [pos, setpos] = useState(0)
  const mover = (val) => (
    setpos(val * 26)
  )

  return (
    <>
      <div className='bg-black mt-16 relative '>
        {cards.map((elem, index) => {
          return <Card mover={mover} val={elem} index={index} />
        })}
        <div className='absolute top-0 pointer-events-none w-full h-full'>
          <motion.div
            initial={{ y: pos, x: '-50%' }}
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
            className='window w-[32rem] absolute left-[45%]  h-[26rem]  overflow-hidden '>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A)-p-1080.webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A)-p-1080.webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8b035ffab0e6b77c5f5_Maniv%20-%2016%209%20(A)-p-1080.webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d807a86b09f3bb06b74d_Singularity%20-%2016%209%20(A)-min-p-1080.webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d819c9bd39dfd6dfbaeb_Silvr%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d625b55cd38f78a00b3a_Rainfall%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d625b55cd38f78a00b3a_Rainfall%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5b25919f738bad2243f_Remind%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6dab55cd38f78a07f92_Summon%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d75a00b32c0a0803a25f_Jungle%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d89c35ffab0e6b77b837_Candid%20Health%20%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6a0ea9cf11c61fb84f1_Yahoo%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d845d2ededb4ef0bae51_YIR%202022%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d669e8dd55fff91862e4_Weglot%20Like%20Magic%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d73b2e926ce98aefc2e2_Starred%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full bg-sky-50'>
              <img  className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5e56f691d2c4122b2d6_Rocket%20Chat%20-%2016%209%20(A).webp" alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Cards