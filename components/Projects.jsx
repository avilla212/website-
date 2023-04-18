import React from 'react'
import chatbot from '../public/assets/projects/chatbot.png'
import Link from 'next/link'
import ProjectItem from '../components/ProjectItem'
import tictactoe from '../public/assets/projects/tictactoe.png'
import follower from '../public/assets/projects/follower.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#383636]'>Projects</p>
            <h2 className='py-4'>More on my github as well :D</h2>
            
            <div className='grid md:grid-cols-2 gap-8'>


                {/** q: why do we use relative in the classname
                 * a: because we want to position the absolute div inside the relative div
                 * 
                 * q: what does relative mean? 
                 * a: it means that the div will be positioned relative to its parent
                 */}
                <Link href='https://github.com/avilla212/resume-projects-'>
                <ProjectItem title='Discord chatbot' 
                backgroundImg={chatbot} 
                desc='This is just a simple discord chatbot that uses OpenAIs GPT-2 AI to generate responses. At the moment I am 
                trying to add an interactive numbers guessing game with the chatbot'
                />
                <ProjectItem title='Tic Tac Toe' 
                backgroundImg={tictactoe}  
                desc='This started as a school project but become something I added onto becuase 
                one of the kids I tutor loves playing tic tac toe with me'
                />
                <ProjectItem title='Instagram follower checker'
                backgroundImg={follower}
                desc='I saw someone on TikTok make this and I wanted to see if I could make it myself and optimize runtimes and memory useage. Plus,
                I know many people around my age would love to have this tool'
                />
                </Link>
                </div>
            </div>
    </div>
  )
}

export default Projects