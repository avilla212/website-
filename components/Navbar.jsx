import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineMenu,AiOutlineCloseCircle, } from 'react-icons/ai'
import { FaGithub,FaLinkedinIn,FaInstagram, FaBars,FaDownload } from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])
    
 
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
    
            <div>
                <ul className='hidden md:flex'>
                    
                    <Link href='/'>
                        <li className='font-bold ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='font-bold ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='font-bold ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='font-bold ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#certificates'>
                        <li className='font-bold ml-10 text-sm uppercase hover:border-b'>Certificates</li>
                    </Link>
                   
                
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}/>
                </div>
                
            </div>

                    <a
                        className=' hidden md:flex' // Use 'ml-auto' to move the button to the right
                        href='/assets/resume.docx'
                        download='resume'>
                        <button className=" hover:scale-105 ml-2 px-3 py-2 rounded-lg bg-blue-500 text-sm text-white cursor-pointer   hover:bg-blue-600">
                            <p className= ' font-bold flex justify-center md:grid-cols-2 gap-2'>Download resume
                            <FaDownload className='' size={20}
                            />
                            </p>
                        </button>
                    </a>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''}>
            <div className={nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        
                        <div onClick={handleNav} className=' shadow-gray-400 cursor-pointer'>
                            <AiOutlineCloseCircle size={25}/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Feel free to reach out!</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/#home'>
                        <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/#about'>
                        <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/#skills'>
                        <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                        <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/#certificates'>
                        <li className='py-4 text-sm'>Certificates</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#3D3D3D]'>Reach me here!</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <Link href='https://www.linkedin.com/in/alex-villafana-9a0233179/'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            </Link>
                            <Link href='https://github.com/avilla212'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                            </div>
                            </Link>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='https://www.instagram.com/alexvillaloaf/'>
                            <FaInstagram />
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar