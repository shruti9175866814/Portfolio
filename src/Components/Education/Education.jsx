import React from "react";

const Education = () => {
  return (
    <section
      id="Education"
      className="min-h-screen bg-gradient-to-b from-[#0a0f2c] via-[#0b133a] to-[#020617]
      text-white px-6 md:px-20 py-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Education
      </h1>

      <div className="max-w-5xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20"></div>

        {/* 2023-2025 - Right Side (BCA) */}
        <div className="flex items-center mb-16">
          <div className="w-1/2"></div>

          {/* Timeline Dot */}
          <div className="w-12 h-12 bg-[#1f2937] border border-white/30 rounded-full flex items-center justify-center text-xs font-semibold z-10 text-center px-1">
            2023-25
          </div>

          {/* Right Card */}
          <div className="w-1/2 ml-6 bg-[#22c55e] text-white px-6 py-4 rounded-lg shadow-lg">
            <h2 className="font-bold uppercase">
              Bachelor of Computer Application (BCA)
            </h2>
            <p className="text-sm mt-1 opacity-90">
              Regal College of Technology, Chiplun  
              <br />
              SNDT Women’s University, Mumbai  
              <br />
              <span className="font-semibold">CGPA: 7.66</span>
            </p>
          </div>
        </div>

        {/* 2021 - Left Side (HSC) */}
        <div className="flex items-center mb-16">
          {/* Left Card */}
          <div className="w-1/2 mr-6 bg-[#f59e0b] text-white px-6 py-4 rounded-lg shadow-lg text-right">
            <h2 className="font-bold uppercase">HSC</h2>
            <p className="text-sm mt-1 opacity-90">
              Shriman Chandulal Shet Highschool & Junior College, Khed  
              <br />
              Konkan Board  
              <br />
              <span className="font-semibold"></span>
            </p>
          </div>

          {/* Timeline Dot */}
          <div className="w-12 h-12 bg-[#1f2937] border border-white/30 rounded-full flex items-center justify-center text-sm font-semibold z-10">
            2021
          </div>

          <div className="w-1/2"></div>
        </div>

        {/* 2019 - Right Side (SSC) */}
        <div className="flex items-center">
          <div className="w-1/2"></div>

          {/* Timeline Dot */}
          <div className="w-12 h-12 bg-[#1f2937] border border-white/30 rounded-full flex items-center justify-center text-sm font-semibold z-10">
            2019
          </div>

          {/* Right Card */}
          <div className="w-1/2 ml-6 bg-[#3b82f6] text-white px-6 py-4 rounded-lg shadow-lg">
            <h2 className="font-bold uppercase">SSC</h2>
            <p className="text-sm mt-1 opacity-90">
              Shriman Chandulal Shet Highschool, Khed  
              <br />
              Konkan Board  
              <br />
              <span className="font-semibold"></span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
