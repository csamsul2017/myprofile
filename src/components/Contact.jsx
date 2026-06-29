import React from "react";
import { LuPlane, LuMail, LuMapPin, LuBriefcaseBusiness } from "react-icons/lu";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-[#7E6FFF]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
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
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                I'm always open to new opportunities and exciting projects.
                Let's discuss how I can help bring your ideas to life.
              </p>
              <a
                href="https://wa.me/6287718272510"
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#7E6FFF] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#6b5ce7] transition-all hover:scale-105"
              >
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
  );
};

export default Contact;
