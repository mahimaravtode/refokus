import React from 'react'
import Navbar from './Componets/Navbar'
import Work from './Componets/Work'
import Products from './Componets/Products'
import Cards from './Componets/Cards'
import Marquees from './Componets/Marquees'
import Cards2 from './Componets/Cards2'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Componets/Footer'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className='h-screen w-full bg-black text-white'>
        <Navbar />
        <Work />
        <Products />
        <Cards />
        <Marquees />
        <Cards2 />
        <Footer />
      </div>
    </>
  )
}

export default App