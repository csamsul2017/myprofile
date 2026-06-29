import React from "react";
import { FaCode, FaGraduationCap, FaAward } from "react-icons/fa6";
import { LuUser, LuMail, LuMapPin, LuBriefcaseBusiness } from "react-icons/lu";

const identities = [
  { Icon: <LuUser />, title: "Full Name", value: "Samsul Dev", borderB: true },
  { Icon: <LuMail />, title: "Email", value: "team@samsul.dev", borderB: true },
  {
    Icon: <LuMapPin />,
    title: "Location",
    value: "Bandung, Indonesia",
    borderB: true,
  },
  {
    Icon: <LuBriefcaseBusiness />,
    title: "Experience",
    value: "1 Years",
    borderB: false,
  },
];

const services = [
  {
    Icon: FaCode,
    title: "Web Development",
    description: "Building modern and responsive websites",
  },
  {
    Icon: FaGraduationCap,
    title: "Online Courses",
    description: "Learn programming from scratch",
  },
  {
    Icon: FaAward,
    title: "Freelancing",
    description: "Available for project collaboration",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F8FB] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-[#7E6FFF]">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative">
            <div className="bg-linear-to-br from-[#7E6FFF] to-[#6756FD] rounded-3xl p-1 ">
              <img
                src="/coding-desk-purple.avif"
                alt="About"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="text-4xl font-bold text-[#7E6FFF]">1+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              A passionate developer creating modern web solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I am a dedicated full-stack developer with a strong focus on
              creating elegant and efficient web applications. With X years of
              experience, I have worked with various technologies including
              React, Node.js, and modern CSS frameworks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My goal is to build software that not only meets the technical
              requirements but also provides an exceptional user experience. I
              believe in clean code, continuous learning, and staying updated
              with the latest industry trends.
            </p>

            {/* Identity Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {identities.map((identity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#7E6FFF]/10 rounded-lg flex items-center justify-center text-[#7E6FFF]">
                      {identity.Icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        {identity.title}
                      </div>
                      <div className="font-semibold text-gray-900">
                        {identity.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#7E6FFF]/30 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#7E6FFF] to-[#6756FD] rounded-xl flex items-center justify-center text-white mb-4">
                <service.Icon size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
