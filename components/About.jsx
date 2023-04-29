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
                  I am a Uni student back at community college studying Computer Science after pursuing Psychology. My passion for all things tech related
                  began in my early teen years. It began with taking apart my Xbox 360 so I can mod video games and eventually led to me building my own PC. Since then I have been
                  I have alwyas had an interest in anything tech. In 2022, I decided to take the leap and pursue a career in tech. 
                  I have been programming for 6 months on my own and have been learning from various online resources such as
                  <Link className='underline cursor-pointer' href='https://www.freecodecamp.org/'> FreeCodeCamp,</Link> 
                  <Link className='underline cursor-pointer' href='https://www.codecademy.com/'> Codecademy,</Link>
                  <Link className='underline cursor-pointer'  href='https://www.coursera.org/'> Coursera,</Link>
                  <Link className='underline cursor-pointer' href='https://www.theodinproject.com/'> The Odin Project. </Link> and 
                  <Link className='underline cursor-pointer' href='https://leetcode.com/'> Leetcode.</Link>
                   Programming aside, I enjoy working out, spending time with my family and catching up on the latest tech news.
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