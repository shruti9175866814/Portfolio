import React from "react";
import avatarImg from "../../assets/photo.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0f2c] via-[#0b133a] to-[#020617] text-white flex items-center overflow-hidden">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-20">

        {/* Left Content */}
        <div className="md:w-2/4 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Hi, I am <span className="text-[#465697]">Shruti</span>
          </h1>

          <p className="mt-4 text-lg md:text-2xl">
            Known as <TextChange /> 
          </p>

          <p className="mt-4 text-sm md:text-lg opacity-80">
            I am a passionate Web Developer who loves creating
            beautiful, responsive and user-friendly web applications.
          </p>

          <a href="#Footer"><button
            className="mt-6 bg-[#465697] px-6 py-2 md:px-8 md:py-3 rounded-3xl
            text-sm md:text-lg font-semibold hover:opacity-85 hover:scale-105
            transition duration-300"
          >
            Contact Me
          </button></a>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:w-2/4 flex justify-center">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-[#465697] overflow-hidden shadow-lg">
            <img
              src={avatarImg}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;