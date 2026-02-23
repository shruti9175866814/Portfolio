import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="min-h-screen bg-gradient-to-b from-[#0a0f2c] via-[#0b133a] to-[#020617]
      px-6 md:px-24 py-16 text-white"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-12">
        Experience
      </h1>

      <div className="flex flex-wrap items-center justify-between gap-12">

        {/* Skills */}
        <div className="flex flex-wrap md:w-2/5 gap-6">
          {[
            <SiRedis color="#FF4438" size={42} />,
            <FaHtml5 color="#E34F26" size={42} />,
            <FaCss3 color="#1572b6" size={42} />,
            <FaReact color="#61DAFB" size={42} />,
            <FaJs color="#F7DF1E" size={42} />,
            <FaFigma color="#F24E1E" size={42} />,
            <SiMongodb color="#47A248" size={42} />,
          ].map((icon, index) => (
            <span
              key={index}
              className="p-4 bg-white/5 backdrop-blur-md rounded-2xl
              shadow-lg hover:scale-110 transition duration-300"
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6">

          {/* Google */}
          <div className="flex gap-6 items-center p-5 rounded-2xl
          bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02]
          transition duration-300">
            <FaGoogle color="#4285F4" size={42} />
            <span>
              <h2 className="text-lg md:text-xl font-semibold">
                Software Engineer, Google
              </h2>
              <p className="text-sm opacity-80">
                Sept 2023 – Present
              </p>
            </span>
          </div>

          {/* Netflix */}
          <div className="flex gap-6 items-center p-5 rounded-2xl
          bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02]
          transition duration-300">
            <RiNetflixFill color="#E50914" size={42} />
            <span>
              <h2 className="text-lg md:text-xl font-semibold">
                Software Engineer, Netflix
              </h2>
              <p className="text-sm opacity-80">
                Sept 2023 – Present
              </p>
            </span>
          </div>

          {/* Amazon */}
          <div className="flex gap-6 items-center p-5 rounded-2xl
          bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02]
          transition duration-300">
            <FaAmazon color="#FF9900" size={42} />
            <span>
              <h2 className="text-lg md:text-xl font-semibold">
                Software Engineer, Amazon
              </h2>
              <p className="text-sm opacity-80">
                Sept 2023 – Present
              </p>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;