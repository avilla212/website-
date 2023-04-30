import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import computer from '../public/assets/computer.png'

const About = ({image}) => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h1 className='tracking-wide'>About me</h1>
                <p className='py-4 text-xl'>
                  I am a Uni student back at community college studying Computer Science after pursuing Psychology. My background is in ABA Psychology as I have worked 
                  with people diagnosed with Autism Spectrum Disorder for 3 years. 
                  
                  My passion for all things tech related began in my early teen years when I decided to take apart my Xbox 360 to mod video games 
                  which would then lead to me building my own PC later on. 
                  
                  Since then I've always had an interest in anything tech. In 2022, I decided to take my first steps towards pursuing a career in tech by diving into 
                  online resources such as 
                  <Link className='underline cursor-pointer' href='https://www.freecodecamp.org/'> FreeCodeCamp,</Link> 
                  <Link className='underline cursor-pointer' href='https://www.codecademy.com/'> Codecademy,</Link>
                  <Link className='underline cursor-pointer'  href='https://www.coursera.org/'> Coursera,</Link>
                  <Link className='underline cursor-pointer' href='https://www.theodinproject.com/'> The Odin Project </Link> and 
                  <Link className='underline cursor-pointer' href='https://leetcode.com/'> Leetcode.</Link>
                  It has been 8 months since I've started and I have loved every moment of it.
                  Programming aside, I enjoy working out, spending time with family, catching up with friends and catching up on the latest tech news.
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