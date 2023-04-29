import React from 'react'
import SkillsItem from '../components/SkillsItem'

const Skills = () => {
  return (
    <div id='skills' className=' w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase py-8'>Skills</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <SkillsItem image='/../public/assets/skills/html.png'
            title='HTML'/>
            
            <SkillsItem image='/../public/assets/skills/python.png'
            title='Python'
            />

            <SkillsItem image='/../public/assets/skills/java.png' 
            title='Java'
            />

            <SkillsItem image='/../public/assets/skills/nextjs.png' 
            title='Next.js'
            />

<SkillsItem image='/../public/assets/skills/react.png' 
            title='React'
            />

<SkillsItem image='/../public/assets/skills/tailwind.png' 
            title='Tailwind css'
            />

<SkillsItem image='/../public/assets/skills/github1.png' 
            title='Git'
            />

<SkillsItem image='/../public/assets/skills/c++.png' 
            title='C++'
            />

            </div>
        </div>
    </div>
  )
}

export default Skills