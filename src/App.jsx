import React from 'react';
import { FaUserLarge, FaEnvelope, FaLocationDot, FaBriefcase, FaRegUser, FaChevronDown, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaUser, FaCode, FaGraduationCap, FaAward } from 'react-icons/fa6';
import { LuUser, LuMail, LuMapPin, LuBriefcaseBusiness, LuExternalLink, LuPlane } from 'react-icons/lu';
import { html5, cssIcon, jsIcon, reactIcon, tailwindIcon, githubIcon } from './assets';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Placeholder data - replace with real data
const identities = [
  { Icon: <LuUser />, title: 'Full Name', value: 'Samsul Dev', borderB: true },
  { Icon: <LuMail />, title: 'Email', value: 'team@samsul.dev', borderB: true },
  { Icon: <LuMapPin />, title: 'Location', value: 'Bandung, Indonesia', borderB: true },
  { Icon: <LuBriefcaseBusiness />, title: 'Experience', value: '1 Years', borderB: false },
];

const skillList = [
  { img: html5, title: 'HTML', value: 90 },
  { img: cssIcon, title: 'CSS', value: 85 },
  { img: jsIcon, title: 'JavaScript', value: 80 },
  { img: reactIcon, title: 'React', value: 75 },
  { img: tailwindIcon, title: 'Tailwind CSS', value: 80 },
  { img: githubIcon, title: 'Git & GitHub', value: 70 },
];

// const projectList = [
//   {
//     title: 'Ship Agency PT. Gerbang Pelabuhan Indonesia',
//     description: 'Full-stack e-commerce solution with payment integration',
//     tags: ['React', 'Tailwind'],
//     image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=Ship+Agency',
//     link: 'https://gerbangpelabuhan.com',
//   },
//   {
//     title: 'Modern Bussines Landing Page',
//     description: 'Collaborative task management with real-time updates',
//     tags: ['React', 'Tailwind'],
//     image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=Landing+Page',
//     link: 'https://modern-bussines.samsul.dev',
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'Personal portfolio showcasing projects and skills',
//     tags: ['React', 'Tailwind', 'Vite'],
//     image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=Portfolio',
//     link: '#',
//   },
//   {
//     title: 'WPU Clone',
//     description: 'Real-time weather information with beautiful UI',
//     tags: ['React', 'Tailwind'],
//     image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=WPU+Clone',
//     link: 'https://wpu-clone.samsul.dev',
//   },
// ];

const projectList = [
  {
    title: 'Ship Agency PT. Gerbang Pelabuhan Indonesia',
    description: 'Company profile and ship agency website',
    tags: ['React', 'Tailwind'],
    image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=Ship+Agency',
    link: 'https://gerbangpelabuhan.com',
  },
  {
    title: 'Modern Bussines Landing Page',
    description: 'Modern landing page for business promotion',
    tags: ['React', 'Tailwind'],
    image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=Landing+Page',
    link: 'https://modern-bussines.samsul.dev',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio and project showcase',
    tags: ['React', 'Tailwind', 'Vite'],
    image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=Portfolio',
    link: '#',
  },
  {
    title: 'WPU Clone',
    description: 'Clone of WPU landing page design',
    tags: ['React', 'Tailwind'],
    image: 'https://placehold.co/600x400/1a1a2e/7E6FFF?text=WPU+Clone',
    link: 'https://wpu-clone.samsul.dev',
  },
];

const services = [
  { Icon: FaCode, title: 'Web Development', description: 'Building modern and responsive websites' },
  { Icon: FaGraduationCap, title: 'Online Courses', description: 'Learn programming from scratch' },
  { Icon: FaAward, title: 'Freelancing', description: 'Available for project collaboration' },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/csamsul2017', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/csamsul2017/', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
];

const App = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#02040F] text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#02040F]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h2 className="text-2xl font-bold">
              <span className="text-[#7E6FFF]">My</span>Profile<span className="text-[#7E6FFF]">.</span>
            </h2>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" onClick={e => scrollToSection(e, 'home')} className="text-white/80 hover:text-[#7E6FFF] transition-colors">
                Home
              </a>
              <a href="#about" onClick={e => scrollToSection(e, 'about')} className="text-white/80 hover:text-[#7E6FFF] transition-colors">
                About
              </a>
              <a href="#skills" onClick={e => scrollToSection(e, 'skills')} className="text-white/80 hover:text-[#7E6FFF] transition-colors">
                Skills
              </a>
              <a href="#projects" onClick={e => scrollToSection(e, 'projects')} className="text-white/80 hover:text-[#7E6FFF] transition-colors">
                Projects
              </a>
              <a href="#contact" onClick={e => scrollToSection(e, 'contact')} className="bg-[#7E6FFF] px-6 py-2 rounded-full hover:bg-[#6b5ce7] transition-colors">
                Contact
              </a>
            </nav>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
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
              <span className="inline-block px-4 py-2 bg-[#7E6FFF]/20 text-[#7E6FFF] rounded-full text-sm font-medium mb-4">👋 Welcome to my portfolio</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-[#7E6FFF]">Samsul Dev</span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#7E6FFF] font-medium mb-4">Full Stack Developer</p>
              <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">I build amazing web experiences with modern technologies. Passionate about creating beautiful, functional, and user-friendly applications.</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#about" onClick={e => scrollToSection(e, 'about')} className="bg-[#7E6FFF] px-8 py-4 rounded-full font-semibold hover:bg-[#6b5ce7] transition-all flex items-center justify-center gap-2">
                  <FaRegUser />
                  <span>About Me</span>
                </a>
                <a
                  href="https://cv.samsul.dev"
                  target="_blank"
                  // onClick={e => scrollToSection(e, 'contact')}
                  className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:border-[#7E6FFF] hover:bg-[#7E6FFF]/10 transition-all flex items-center justify-center gap-2"
                >
                  <FaChevronDown />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start mt-10 text-2xl">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" className="text-white/60 hover:text-[#7E6FFF] transition-colors" aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F7F8FB] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-[#7E6FFF]">Me</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get to know more about me, my background, and what I do</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <div className="relative">
              <div className="bg-linear-to-br from-[#7E6FFF] to-[#6756FD] rounded-3xl p-1 ">
                <img src="/coding-desk-purple.avif" alt="About" className="w-full rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-4xl font-bold text-[#7E6FFF]">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">A passionate developer creating modern web solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a dedicated full-stack developer with a strong focus on creating elegant and efficient web applications. With X years of experience, I have worked with various technologies including React, Node.js, and modern CSS
                frameworks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My goal is to build software that not only meets the technical requirements but also provides an exceptional user experience. I believe in clean code, continuous learning, and staying updated with the latest industry trends.
              </p>

              {/* Identity Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {identities.map((identity, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#7E6FFF]/10 rounded-lg flex items-center justify-center text-[#7E6FFF]">{identity.Icon}</div>
                      <div>
                        <div className="text-sm text-gray-500">{identity.title}</div>
                        <div className="font-semibold text-gray-900">{identity.value}</div>
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
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#7E6FFF]/30 transition-all">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My <span className="text-[#7E6FFF]">Skills</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {skillList.map((skill, index) => (
                <div key={index} className="bg-[#F7F8FB] rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <img src={skill.img} alt={skill.title} className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{skill.title}</h4>
                      <span className="text-sm text-[#7E6FFF]">{skill.value}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7E6FFF] to-[#6756FD] rounded-full" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Detail List */}
            <div className="bg-[#F7F8FB] rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Detailed Skills</h3>
              <div className="space-y-6">
                {skillList.map((skill, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img src={skill.img} alt={skill.title} className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.title}</span>
                        <span className="text-[#7E6FFF] font-semibold">{skill.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#7E6FFF] rounded-full transition-all duration-1000" style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#F7F8FB] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My <span className="text-[#7E6FFF]">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Check out some of my recent work and projects</p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectList.map((project, index) => (
              <a key={index} href={project.link} target="_blank" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#7E6FFF] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-[#eeecff] text-[#7E6FFF] rounded-full text-sm">
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

          {/* View More Button */}
          {/* <div className="text-center mt-12">
            <button className="bg-[#7E6FFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6b5ce7] transition-all">View All Projects</button>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-[#7E6FFF]">Touch</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Have a project in mind? Let's work together to create something amazing.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* CTA Card */}
            <div className="bg-linear-to-br from-[#02040F] to-[#0a0a1a] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7E6FFF]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6756FD]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#7E6FFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <LuPlane size={40} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Let's Work <span className="text-[#7E6FFF]">Together!</span>
                </h3>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">I'm always open to new opportunities and exciting projects. Let's discuss how I can help bring your ideas to life.</p>
                <a href="https://wa.me/6287718272510" target="_blank" className="inline-flex items-center gap-3 bg-[#7E6FFF] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#6b5ce7] transition-all hover:scale-105">
                  <LuMail size={24} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#F7F8FB] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7E6FFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LuMail className="text-[#7E6FFF]" size={24} />
                </div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600 text-sm">team@samsul.dev</p>
              </div>
              <div className="bg-[#F7F8FB] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7E6FFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LuMapPin className="text-[#7E6FFF]" size={24} />
                </div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-600 text-sm">Bandung, Indonesia</p>
              </div>
              <div className="bg-[#F7F8FB] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#7E6FFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LuBriefcaseBusiness className="text-[#7E6FFF]" size={24} />
                </div>
                <h4 className="font-semibold mb-1">Status</h4>
                <p className="text-gray-600 text-sm">Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#02040F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">
              <span className="text-[#7E6FFF]">My</span>Profile<span className="text-[#7E6FFF]">.</span>
            </h2>
            <div className="flex gap-6 text-xl">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" className="text-white/60 hover:text-[#7E6FFF] transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-white/50 text-sm">© 2026 Cloude. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
