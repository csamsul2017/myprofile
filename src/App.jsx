import React from 'react';
import { FaUserLarge, FaEnvelope, FaLocationDot, FaBriefcase, FaRegUser, FaChevronDown, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa6';
import { LuUser, LuMail, LuMapPin, LuBriefcaseBusiness } from 'react-icons/lu';
import { html5, cssIcon, jsIcon, reactIcon, tailwindIcon, githubIcon } from './assets';

const identities = [
  { Icon: <LuUser />, title: 'Name', value: 'Samsul', borderB: true },
  { Icon: <LuMail />, title: 'Email', value: 'team@samsul.dev', borderB: true },
  { Icon: <LuMapPin />, title: 'Location', value: 'Indonesia', borderB: true },
  { Icon: <LuBriefcaseBusiness />, title: 'Freelance', value: 'Available', color: '#7E6FFF', borderB: false },
];

const skillList = [
  { img: html5, title: 'HTML', value: 95 },
  { img: cssIcon, title: 'CSS', value: 90 },
  { img: jsIcon, title: 'JavaScript', value: 80 },
  { img: reactIcon, title: 'React', value: 80 },
  { img: tailwindIcon, title: 'Tailwind CSS', value: 80 },
  { img: githubIcon, title: 'Git & Gituhub', value: 80 },
];

const App = () => {
  const color = true;
  const borderB = false;

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

      <section className="py-12 bg-[#F7F8FB]">
        <div className="px-8 flex flex-col gap-4">
          <h2 className="flex gap-2 items-center text-2xl font-semibold">
            <FaUser color="#7E6FFF" /> About Me
          </h2>
          <p>I'm a passionate web developer who enjoys creating beautoful and functional websites. I love learning nw technologies and turning complex problems into simple, elegent solutions.</p>

          <div>
            <div className="flex flex-col bg-white rounded-2xl px-8 shadow-gray-600 text-lg font-medium">
              {identities.map(identity => (
                <div className={`flex gap-14 ${identity.borderB && 'border-b'}  border-b-gray-200 py-4`}>
                  <div className="flex flex-1 items-center gap-2">
                    {identity.Icon} {identity.title}
                  </div>
                  <div className="flex-2">
                    <span className={`${identity.color && 'text-[#7E6FFF]'}`}>{identity.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F7F8FB] px-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">
            <span className="text-[#7E6FFF] pr-2">{'</>'}</span> Skills
          </h2>
          {skillList.map(skill => (
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10">
                <img src={skill.img} alt="" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between font-semibold">
                  <span>{skill.title}</span>
                  <span>{`${skill.value} %`}</span>
                </div>
                <div className="h-2 rounded-4xl bg-gray-200 ">
                  <div style={{ width: `${skill.value}%` }} className={`h-full bg-[#7E6FFF] rounded-4xl ring-1 ring-gray-200`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
