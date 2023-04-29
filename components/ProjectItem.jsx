import React from 'react'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, desc}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl py-4 group hover:bg-gradient-to-r from-[#BBC0CE] to-[#4b5563]'>
                  
                  <Image className=' group-hover:opacity-10' src={backgroundImg} alt='/'/>
                 
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                      <p>{desc}.</p>
                    </div>
                </div>
  )
}

export default ProjectItem