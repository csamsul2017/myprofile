import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";

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

const Footer = () => {
  return (
    <footer className="py-8 bg-[#02040F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">
            <span className="text-[#7E6FFF]">My</span>Profile
            <span className="text-[#7E6FFF]">.</span>
          </h2>
          <div className="flex gap-6 text-xl">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                className="text-white/60 hover:text-[#7E6FFF] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-white/50 text-sm">
            2026 Cloude. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
