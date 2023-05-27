import React from 'react'
import chatbot from '../public/assets/projects/chatbot.png'
import ProjectItem from '../components/ProjectItem'
import tictactoe from '../public/assets/projects/tictactoe.png'
import library from '../public/assets/projects/library.png'
import pass from '../public/assets/projects/pass.png'

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
                
                <ProjectItem 
                
                title='Discord chatbot' 
                backgroundImg={chatbot} 
                desc='I developed a Discord chatbot utilizing OpenAI&#39;s GPT-2 model for generating responses. 
                The purpose of this bot was to foster interaction among users in my server, and it proved to be highly successful in achieving that goal'
                
                />
                
                <ProjectItem 
                
                title='Tic Tac Toe' 
                backgroundImg={tictactoe}  
                desc='Initially conceived as a school project, this endeavor grew beyond its initial scope as I discovered its potential to engage and entertain. 
                The motivation to expand the project stemmed from the enjoyment experienced by one of the children I tutor, who found great delight in playing tic-tac-toe with me'
                
                />

                <ProjectItem 

                title='Library Management System'
                backgroundImg={library}
                desc='I have developed a terminal program that enables users to create multiple library cards, which are stored in a hashmap. 
                Users can perform various actions such as adding books, checking out books, returning books, and more. 
                Currently, I am working on implementing a functionality to switch between different library cards while ensuring that the data is saved and accessible'     
                />

                <ProjectItem 
                
                title='Password Generator'
                backgroundImg={pass}
                desc='I created a password generator application using the secrets module for strong random number generation and Tkinter for the GUI. 
                The app generates secure passwords and provides the option to save them to a local file for easy storage'
                
                />

                
                
                </div>
          </div>
    </div>
  )
}

export default Projects