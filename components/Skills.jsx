import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className=' w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase'>Skills</p>
            <h2 className='py-4'>Skills I am progressing with </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/html.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
              
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/python.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Python</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/java.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Java</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/nextjs.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Next.js</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/react.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/tailwind.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind css</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/github1.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className='rounded-xl' src='/../public/assets/skills/c++.png' width={100} height={100} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>C++</h3>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Skills