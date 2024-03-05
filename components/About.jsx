import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import computer from '../public/assets/computer.png'

const About = () => {
  return (
    <div id='about' className='w-full p-2 flex items-center py-8'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h1 className='tracking-wide'>About me</h1>
                <p className='py-4 text-xl'>
                I am currently a university student enrolled in a Computer Science program at a community college, following my previous pursuit of Psychology. 
                My professional background lies in Applied Behavior Analysis (ABA) Psychology, where I dedicated three years to working with individuals diagnosed with Autism Spectrum Disorder.

                My passion for technology emerged during my early teenage years when I began disassembling my Xbox 360 to modify video games. 
                This initial experience eventually led me to build my own personal computer.

                Ever since then, my interest in all things tech has continued to grow. 
                In 2022, I took a significant step towards pursuing my passion by embarking on the journey of learning programming.
                I utilized various resources, such as 
                  <Link className='underline cursor-pointer' href='https://www.freecodecamp.org/'> FreeCodeCamp,</Link> 
                  <Link className='underline cursor-pointer' href='https://www.codecademy.com/'> Codecademy,</Link>
                  <Link className='underline cursor-pointer'  href='https://www.coursera.org/'> Coursera,</Link>
                  <Link className='underline cursor-pointer' href='https://www.theodinproject.com/'> The Odin Project </Link> and 
                  <Link className='underline cursor-pointer' href='https://leetcode.com/'> Leetcode.</Link>
                  It has been 8 months since I've started and I've loved every moment of it.
                  Programming aside, I enjoy working out, spending time with family, catching up with friends and staying up to date with the latest tech news.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 ease-in duration 300'>
                <Image className='rounded-xl' src={computer} width={500} height={500} />
            </div>
        </div>
    </div>
  )
}

export default About