import React from "react";
import {
  FaRegUser,
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/csamsul2017",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/csamsul2017/",
    label: "LinkedIn",
  },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
];

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#02040F] via-[#0a0a1a] to-[#02040F]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7E6FFF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#6756FD]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="shrink-0 order-1 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#7E6FFF]/30 rounded-full blur-2xl scale-110" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-[#7E6FFF]/50">
                <img
                  src="https://api.dicebear.com/7.x/micah/svg?seed=samsul&backgroundColor=0a0a1a&earrings=none&hair=short02&hairColor=1a1a2e&hat=beanie&hatColor=7E6FFF&eyeType=wink&eyebrowType=default&noseType=pointed&mouthType=serious&face=%23F2E6FF&size=400"
                  className="w-full h-full"
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left order-2">
            <span className="inline-block px-4 py-2 bg-[#7E6FFF]/20 text-[#7E6FFF] rounded-full text-sm font-medium mb-4">
              👋 Welcome to my portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-[#7E6FFF]">Samsul Dev</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#7E6FFF] font-medium mb-4">
              Full Stack Developer
            </p>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              I build amazing web experiences with modern technologies.
              Passionate about creating beautiful, functional, and
              user-friendly applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="bg-[#7E6FFF] px-8 py-4 rounded-full font-semibold hover:bg-[#6b5ce7] transition-all flex items-center justify-center gap-2"
              >
                <FaRegUser />
                <span>About Me</span>
              </a>
              <a
                href="https://cv.samsul.dev"
                target="_blank"
                className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:border-[#7E6FFF] hover:bg-[#7E6FFF]/10 transition-all flex items-center justify-center gap-2"
              >
                <FaChevronDown />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-10 text-2xl">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-white/60 hover:text-[#7E6FFF] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
