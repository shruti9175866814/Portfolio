import React from 'react'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-nowrap gap-5 overflow-hidden'>

 
            <ProjectCards 
            title="Blogging Website" 
            main="This is the blogging website craeted in next js and used some component library"/>

            <ProjectCards 
            title="youTube Clone" 
            main="This is the blogging website craeted in next js and used some component library"/>

            <ProjectCards 
            title="Netflix Clone" 
            main="This is the blogging website craeted in next js and used some component library"/>
            
        </div>
      
    </div>
  )
}

export default Projects
