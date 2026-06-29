import React from "react";
import {
  html5,
  cssIcon,
  jsIcon,
  reactIcon,
  tailwindIcon,
  githubIcon,
} from "../assets";

const skillList = [
  { img: html5, title: "HTML", value: 90 },
  { img: cssIcon, title: "CSS", value: 85 },
  { img: jsIcon, title: "JavaScript", value: 80 },
  { img: reactIcon, title: "React", value: 75 },
  { img: tailwindIcon, title: "Tailwind CSS", value: 80 },
  { img: githubIcon, title: "Git & GitHub", value: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-[#7E6FFF]">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillList.map((skill, index) => (
              <div
                key={index}
                className="bg-[#F7F8FB] rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{skill.title}</h4>
                    <span className="text-sm text-[#7E6FFF]">
                      {skill.value}%
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#7E6FFF] to-[#6756FD] rounded-full"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
