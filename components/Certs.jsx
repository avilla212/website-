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
                desc1='I completed a web development course eight months ago, which served as my first step into programming. 
                I was fascinated by working with functions, objects, arrays, data types, and more, discovering the core concepts of programming and fueling my passion for the field..
                '
            />

            <CertsItem
                title1='Meta&apos;s Version Control course'
                backgroundImg1={version}
                desc1='During this course, I gained valuable insights into various version control systems, enabling me to understand the importance of creating an efficient software development workflow. 
                Additionally, I was introduced to Linux commands and received instruction on how to effectively utilize Git for version control purposes..
                '
            />

            <CertsItem
                title1='Meta&apos;s Introduction to Frontend Development course'
                backgroundImg1={frontend}
                desc1='During this experience, I gained insights into the daily responsibilities of a frontend developer and deepened my understanding of the core technologies that power the web. I created and styled webpages using HTML and CSS, while also exploring UI frameworks like Bootstrap and Tailwind CSS.
                '
            />
        </div>
    </div>

  )
}

export default Certs