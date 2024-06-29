import { useState } from 'react'
import bgVideo from './assets/earth.mp4'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import Banner from './component/Banner'
import Banner2 from './component/Banner2'
import Footer from './component/footer'
import AOS from "aos"
import "aos/dist/aos.css"

const App = ()=> {
    React.useEffect(()=> {
          AOS.init({
            duratio
          })

    })

  return (
    <div   >
      <div className='h-[700px] relative'>
        <video muted loop autoPlay className='fixed right-0 top-0 w-full z[-1] h-[700[px] object-cover z[-1]' >
          <source src={bgVideo} type='video/mp4'/>
        </video>
        
        <Navbar/>
        <Hero/>

      </div>

      <Service/>
      <Banner />
      <Banner2 />
      <Footer />
      
      
      
    </div>
    
  );
};

export default App
