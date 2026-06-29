import React from "react";

const Header = ({ scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#02040F]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h2 className="text-2xl font-bold">
            <span className="text-[#7E6FFF]">My</span>Profile
            <span className="text-[#7E6FFF]">.</span>
          </h2>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-white/80 hover:text-[#7E6FFF] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-white/80 hover:text-[#7E6FFF] transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="text-white/80 hover:text-[#7E6FFF] transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="text-white/80 hover:text-[#7E6FFF] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="bg-[#7E6FFF] px-6 py-2 rounded-full hover:bg-[#6b5ce7] transition-colors"
            >
              Contact
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
