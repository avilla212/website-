import React from 'react'
import Image from 'next/image'

const SkillsItem = ({image,title}) => {
  return (
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src={image} width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
    )
}

export default SkillsItem