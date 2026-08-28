import React from "react";
import { LuExternalLink } from "react-icons/lu";

const projectList = [
  {
    title: "Ship Agency PT. Gerbang Pelabuhan Indonesia",
    description: "Company profile and ship agency website",
    tags: ["React", "Tailwind"],
    image: "/gpi-mock.png",
    link: "https://gerbangpelabuhan.com",
  },
  {
    title: "Modern Bussines Landing Page",
    description: "Modern landing page for business promotion",
    tags: ["React", "Tailwind"],
    image: "/modern-bussines-mock.png",
    link: "https://modern-business.samsul.dev",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio and project showcase",
    tags: ["React", "Tailwind", "Vite"],
    image: "/myprofile-mock.png",
    link: "https://samsul.dev",
  },
  {
    title: "WPU Clone",
    description: "Clone of WPU landing page design",
    tags: ["React", "Tailwind"],
    image: "https://placehold.co/600x400/1a1a2e/7E6FFF?text=WPU+Clone",
    link: "https://wpu-clone.samsul.dev",
  },
  {
    title: "Custom Dashboard Web App",
    description: "Modern custom dashboard web application",
    tags: ["React", "Tailwind", "Express", "Zustand", "PostgreSQL"],
    image: "/dashboard-web-app.webp",
    link: "https://dashboard.samsul.dev",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#F7F8FB] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-[#7E6FFF]">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work and projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#7E6FFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#eeecff] text-[#7E6FFF] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <LuExternalLink className="text-gray-400 group-hover:text-[#7E6FFF] transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
