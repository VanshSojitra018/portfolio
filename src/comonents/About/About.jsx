import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side start */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vansh Sojitra
          </h2>
          {/* skill heading with typing effect */}
          <h3 className=" flex items-center justify-center md:justify-start gap-2 text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a</span>
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Coder"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack Developer and fresher. Skilled in both front-end
            and back-end developer . I specialize in the MERN stack and other
            modern technologies to create seamless user experience and efficient
            solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1twmuKnJ0Uh_clzKmGzyzq2S86npGxFNQ/view?usp=sharing"
            target="_blank"
            rel="nooper noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Left side end */}

        {/* right side start */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full overflow-visible">
            <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-full h-full rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]">
              <div className="w-full h-full border-4 border-purple-700 rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Vansh Sojitra"
                  className="w-full h-full object-cover"
                />
              </div>
            </Tilt>
          </div>
        </div>
        {/* right side end */}
      </div>
    </section>
  );
};

export default About;
