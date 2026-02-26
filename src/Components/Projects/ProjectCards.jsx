import React from 'react'
import bannerImg from "../../assets/food.png";

const ProjectCards = ({title,main}) => {
  return (
  <div className="bg-[#0c0e19] p-6 rounded-2xl shadow-xl w-80 mx-auto">
      
  <img
    className="w-full h-40 object-cover "
    src={bannerImg}
    alt="project"
  />

      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
        <a 
          href="https://shruti-food-delivery-website.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
          duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
        >
  Demo
</a>

        <a 
          href="https://github.com/shruti9175866814/Food_delivery_website"
          target="_blank"
          rel="noopener noreferrer"
          className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
          duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
        >
  Source Code
</a>
      </div>
    </div>
  )
}

export default ProjectCards
