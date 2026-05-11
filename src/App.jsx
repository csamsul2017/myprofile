import React from 'react';
import { FaUserLarge, FaEnvelope, FaLocationDot, FaBriefcase, FaRegUser, FaChevronDown, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa6';

const App = () => {
  return (
    <div>
      <section className="py-4 bg-[#02040F] text-white lg:flex lg:flex-col lg:justify-center lg:items-center">
        <header className="h-14 border-b px-6 lg:w-full">
          <h2 className="text-2xl font-semibold">MyProfile.</h2>
        </header>

        <div className="lg:w-1/2">
          <div className="flex flex-col items-center px-6 md:flex-row md:gap-12 md:pt-24 md:justify-center">
            <div className="shrink-0  ring-4  ring-[#6756FD]/50 bg-amber-50 h-72 w-72 rounded-full overflow-hidden my-10">
              <img src="./hero.webp" className="h-full w-full object-cover object-[center_24px]" alt="Muhamad Samsul - Developer" />
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xl text-[#7e6fff]">Hi, I'm</span>
              <h1 className="text-6xl">Samsul</h1>
              <span className="text-2xl text-[#7e6fff]">Web Developer</span>
              <p className="text-lg tracking-wider">I build, responsive, and user-friendly websites that bring ideas to life.</p>
              <div className="flex flex-col gap-4 font-semibold md:flex-row whitespace-nowrap">
                <button className="bg-[#7e6fff] rounded-2xl py-4 flex justify-center items-center gap-2 md:px-8">
                  <FaRegUser />
                  <span>About Me</span>
                </button>
                <button className="border rounded-2xl py-4 flex justify-center items-center gap-2 md:px-8">
                  <FaChevronDown />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8 text-3xl justify-center my-12 pb-24 md:gap-24">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>About Me</h2>
          <p>I'm a passionate web developer who enjoys creating beautoful and functional websites. I love learning nw technologies and turning complex problems into simple, elegent solutions.</p>
          <div>
            <div>
              <div>
                <FaUser /> Name
              </div>
              <div>
                <FaEnvelope /> Email
              </div>
              <div>
                <FaLocationDot /> Location
              </div>
              <div>
                <FaBriefcase /> Freelance
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
