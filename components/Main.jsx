import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                
                <h1 className='py-4 text-[#383636]'>Hi I'm Alex</h1>
                <p className='py-4 text-[#242222] max-w-[70%] m-auto '>
                    I don't think I can call myself a developer of any kind quite yet but I do enjoy creating software and websites. 
                    This website was made possible by YouTube and TheOdinProject since I had zero web development experience 
                    prior to making this. I have a passion for programming as I spend my days Leetcoding, learning new technologies
                    creating fun little projects like discord chat bots or building websites. My goal is to switch careers by getting an internship and 
                    progress my skills as a developer.
                </p>
                <div>
                    <h2>Reach out to me at my socials below or email me!</h2>
                    
                    <p className='uppercase font-bold'>Email: alexvillafana99@gmail.com</p>
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