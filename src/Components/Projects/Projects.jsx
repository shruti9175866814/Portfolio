import React from 'react'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-nowrap gap-5 overflow-hidden'>

 
            <ProjectCards 
  title="Food Delivery Website" 
  main="This is a responsive food delivery website built using React and Tailwind CSS. It includes categories, menu filtering, and modern UI design."
/>

            
            
        </div>
      
    </div>
  )
}

export default Projects
