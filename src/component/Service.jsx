import React from 'react'
import {FaReact} from "react-icons/fa"
import {FaShuttleSpace, FaSpaceAwesome} from "react-icons/fa6";
const ServiceData=[
    {
        title:"HST",
        content:"300-1500 km",
        description: "used for space observation ,capturing stunning image of the galaxy",
        icon: <FaReact className="text-7xl"/>,
        aosdelay: "300",
    },
    {
        title:"ISS",
        content:"300-1500 km",
        description: "It's a habitable artificial satelite orbiting Earth and serves as a space envoirment research labrotory",
        icon: <FaShuttleSpace className="text-7xl"/>,
        aosdelay: "500",
    },
    {
        title:"GPS",
        content:"300-1500 km",
        description: "Part of the Global Positioning System (GPS) used for Navigation.",
        icon: <FaSpaceAwesome className="text-7xl"/>,
        aosdelay: "500",
    },
];

const Service = () => {
  return (
    <div className='bg-black text-white flex justify-center'>
      
      <div className="container">
        <div className='min-h-[400px]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                    {
                        ServiceData.map( (data,index) =>
                          (
                            <div className='min-h-[180px] flex flex-col items-center bg-sky-800 rounded-xl backdrop-blur-sm text-center gap-3 text-2xl w-full py-8 px-3 mx-auto lg:w-[300px] justify-center'>
                              {data.icon}
                              <h1>{data.title}</h1>
                              <p>{data.content}</p>
                              <p>{data.description}</p>
                            </div>
                            ) 
                        )
                    }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
