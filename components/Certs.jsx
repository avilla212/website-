import React from 'react'
import CertsItem from '../components/CertsItem'
import meta from '../public/certs/meta.png'
import version from '../public/certs/version_control.png'
import frontend from '../public/certs/front_end.png'

const Certs = () => {
  return (
    <div id='certificates' className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#383636] '>Certifications</p>
        <div className='grid md:grid-cols-2 gap-8'>
            {/* Insert cert's item here */}
            <CertsItem
                title1='Meta&apos;s Programming with Javascript course'
                backgroundImg1={meta}
                desc1='This course taught me the basic concepts of web development
                This was the first step I took towards learning programming 8 months ago and I was in awe
                when I got work with functions, objects, arrays, data types and much more.
                '
            />

            <CertsItem
                title1='Meta&apos;s Version Control course'
                backgroundImg1={version}
                desc1='This course gave me insight on different version control systems
                and how to create an effective software development workflow.
                Alongside that, I was introduced to Linux commands and 
                how to use Git.
                '
            />

            <CertsItem
                title1='Meta&apos;s Introduction to Frontend Development course'
                backgroundImg1={frontend}
                desc1='Here I got to learn about the day to day responsibilities of a frontend developer
                and get a better understanding of the core and underlying technologies that power the web.
                Furthermore, I got to create and style a webpage with HTML and CSS and I learned more 
                about working with UI frameworks like Bootstrap and Tailwind CSS.
                '
            />
        </div>
    </div>

  )
}

export default Certs