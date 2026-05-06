import React from 'react';
import { FaUserLarge } from 'react-icons/fa6';

const App = () => {
  return (
    <div>
      <section className="p-4 mt-11">
        <header>
          <h2>MyProfile</h2>
        </header>

        <div>
          <div>
            <img src="./hero.webp" alt="Muhamad Samsul - Developer" />
          </div>
          <div>
            <span>Hi, I'm</span>
            <h1>Your Name</h1>
            <span>Web Developer</span>
            <p>I build, responsive, and user-friendly websites that bring ideas to life.</p>
            <div>
              <button>About Me</button>
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
