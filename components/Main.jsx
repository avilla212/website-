import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-auto text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                
                <h1 className='py-4 text-[#383636]'>Hi I'm Alex</h1>
                <p className='py-4 text-[#242222] max-w-[70%] m-auto '>
                While I may not yet consider myself a professional developer, I have a genuine passion for programming and web development. 
                It took several months to create this portfolio because I wanted to establish a strong foundation in web development fundamentals beforehand. 
                I am grateful to resources such as YouTube and TheOdinProject for guiding me in this endeavor. Currently, my focus is on expanding my knowledge in backend development, web development, and machine learning. 
                Simultaneously, I aspire to transition from the field of Psychology to a career in the dynamic world of technology. 
                </p>
                <div>
                    <h2 className='py-4'>Reach out to me at my socials below or email me!</h2>
                    
                    <p className='uppercase font-bold'>Email: alexandervillafana995@gmail.com</p>
                </div>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='https://www.linkedin.com/in/alex-villafana-9a0233179/'> 
                        <FaLinkedinIn />
                        </Link>
                        
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='https://github.com/avilla212'>
                        <FaGithub />
                        </Link>
                    </div>
    
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <Link href='https://www.instagram.com/alexvillaloaf/'>
                        <FaInstagram />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main