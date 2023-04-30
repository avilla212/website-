import React from 'react'
import chatbot from '../public/assets/projects/chatbot.png'
import ProjectItem from '../components/ProjectItem'
import tictactoe from '../public/assets/projects/tictactoe.png'
import follower from '../public/assets/projects/follower.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#383636]'>Projects</p>
            <h2 className='py-2'>More on my github as well :D</h2>
            {/*
             q: How can have my photos display ina  grid like fashion
             a: use grid and grid-cols-2
            */}
            <div className='grid md:grid-cols-2 gap-8'>
              {/* ADD LINKS TO THE IMAGES  */}
                
                <ProjectItem title='Discord chatbot' 
                backgroundImg={chatbot} 
                desc='This is just a simple discord chatbot that uses OpenAIs GPT-2 AI to generate responses'
                />
                
                <ProjectItem title='Tic Tac Toe' 
                backgroundImg={tictactoe}  
                desc='This started as a school project but became something I added onto becuase 
                one of the kids I tutor loves playing tic tac toe with me'
                />
                
                <ProjectItem title='Instagram follower checker'
                backgroundImg={follower}
                desc='I saw someone on TikTok make this and I wanted to see if I could make it myself and optimize runtimes and memory usage. Plus,
                I know many people around my age would love to have this tool'
                />
                
                </div>
          </div>
    </div>
  )
}

export default Projects