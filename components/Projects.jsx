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
                desc='This is just a simple discord chatbot that uses OpenAI&#39;s GPT-2 to generate responses. 
                I made this because in order to find a way to have everyone in my server interact and it worked wonderfully'
                
                />
                
                <ProjectItem 
                
                title='Tic Tac Toe' 
                backgroundImg={tictactoe}  
                desc='This started as a school project but became something I added onto becuase 
                one of the kids I tutor loved playing tic tac toe with me'
                
                />

                <ProjectItem 

                title='Library Management System'
                backgroundImg={library}
                desc='This terminal program allow&#39;s user&#39;s to create multiple libary card&#39;s
                that are stored into a hashmap. The user can then add books, checkout books, return books, etc....
                I want to create a way to switch between different library cards yet save the data'     
                />

                <ProjectItem 
                
                title='Password Generator'
                backgroundImg={pass}
                desc='This is a password generator that uses the secrets module which is used for generating cryptographically strong random numbers suitable for 
                managing data such as passwords, account authentication, security tokens, and related secrets.Tkinter was used for the GUI. Alongside with 
                generating the passwords, you are allowed to save your passwords to a file on your machine'
                
                />

                
                
                </div>
          </div>
    </div>
  )
}

export default Projects