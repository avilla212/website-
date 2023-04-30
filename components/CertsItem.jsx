import React from 'react'
import Image from 'next/image'

const CertsItem = ({title1, backgroundImg1, desc1}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full py-4 group hover:bg-gradient-to-r from-[#BBC0CE] to-[#4b5563]'>
                  
                  <Image className=' group-hover:opacity-10' src={backgroundImg1} alt='/'/>
                 
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <h3 className='text-2xl text-white tracking-wider text-center'>{title1}</h3>
                      <p>{desc1}</p>
                    </div>
                </div>
  )
}

export default CertsItem