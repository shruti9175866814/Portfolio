import React from "react";

const ProfileSkills = () => {
  return (
    <section
      id="ProfileSkills"
      className="min-h-screen bg-gradient-to-b from-[#0a0f2c] via-[#0b133a] to-[#020617]
      text-white px-6 md:px-20 py-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* ===== PROFILE SECTION ===== */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Profile</h1>

          <ul className="space-y-3 opacity-90 mb-6">
            <li>• Frontend Developer & Java Full Stack Learner</li>
            <li>• Knowledge of React, Angular, HTML, CSS, JavaScript</li>
            <li>• Basic understanding of REST APIs and Full Stack Architecture</li>
            <li>• MySQL Database Management</li>
          </ul>

          <div className="space-y-3">
            <p><span className="font-semibold">Name:</span> Shruti Jadhav</p>
            <p><span className="font-semibold">Education:</span> BCA (2023-2025)</p>
            <p><span className="font-semibold">College:</span> Regal College of Technology, Chiplun (SNDT University)</p>
            <p><span className="font-semibold">Phone:</span> +91 9175866814</p>
            <p><span className="font-semibold">E-Mail:</span> Jadhavshruti1304@gmail.com</p>
            <p><span className="font-semibold">Location:</span> Pune, Maharashtra, India</p>
          </div>
        </div>

        {/* ===== SKILLS SECTION ===== */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Skills</h1>

          {/* Skill Bar Component */}
          {[
            { name: "HTML, CSS", percent: 85 },
            { name: "React", percent: 80 },
            { name: "Angular", percent: 70 },
            { name: "JavaScript", percent: 65 },
            { name: "Core Java", percent: 75 },
            { name: "MySQL", percent: 70 }
          ].map((skill, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-purple-500 h-3 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProfileSkills;
