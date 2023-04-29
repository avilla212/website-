import React from 'react'
import SkillsItem from '../components/SkillsItem'

import C from '../public/assets/skills/c++.png'
import git from '../public/assets/skills/github1.png'
import html from '../public/assets/skills/html.png'
import java from '../public/assets/skills/java.png'
import next from '../public/assets/skills/nextjs.png'
import python from '../public/assets/skills/python.png'
import react from '../public/assets/skills/react.png'
import tailwind from '../public/assets/skills/tailwind.png'

const Skills = () => {
  return (
    <div id='skills' className=' w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase py-4'>Skills</p>
            <h2 className='py-2'>These are skills im always progressing with </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <SkillsItem image={html}
            title='HTML'/>
            
            <SkillsItem image={python}
            title='Python'
            />

            <SkillsItem image={java} 
            title='Java'
            />

            <SkillsItem image={next}
            title='Next.js'
            />

<SkillsItem image={react}
            title='React'
            />

<SkillsItem image={tailwind}
            title='Tailwind css'
            />

<SkillsItem image={git}
            title='Git'
            />

<SkillsItem image={C}
            title='C++'
            />

            </div>
        </div>
    </div>
  )
}

export default Skills