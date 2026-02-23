import React from 'react'
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="relative min-h-screen bg-gradient-to-b from-[#0a0f2c] via-[#0b133a] to-[#020617] 
      text-white flex items-center justify-center px-6 md:px-20"
    >
      <div
        className="w-full md:flex items-center md:flex-wrap md:justify-center 
        bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl"
      >
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">About</h2>

          <div className="md:flex flex-wrap items-center gap-10">
            <img className="md:h-80 mx-auto" src={AboutImg} alt="About img" />

            <ul>
              {/* Frontend */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={28} className="mt-1 text-[#465697]" />
                <span className="max-w-md">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    Frontend Developer
                  </h1>
                  <p className="text-sm md:text-md opacity-90">
                    I am an aspiring Frontend Developer with hands-on experience
                    in HTML, CSS, JavaScript, React, and Angular, focused on
                    clean, responsive, and user-friendly UI design.
                  </p>
                </span>
              </div>

              {/* Database */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={28} className="mt-1 text-[#465697]" />
                <span className="max-w-md">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    Database Developer
                  </h1>
                  <p className="text-sm md:text-md opacity-90">
                    I have practical experience with MySQL, database design,
                    CRUD operations, and structured data handling through
                    academic projects.
                  </p>
                </span>
              </div>

              {/* Backend */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={28} className="mt-1 text-[#465697]" />
                <span className="max-w-md">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    Backend Developer
                  </h1>
                  <p className="text-sm md:text-md opacity-90">
                    As a Java Full Stack learner, I work with Core Java,
                    JDBC, REST APIs, and OOP concepts to build scalable
                    backend systems.
                  </p>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;