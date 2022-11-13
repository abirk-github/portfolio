import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          A driven Sivilingeniør from NTNU with experience working in
          international energy sector, and currently working as a software
          developer at Innovasjon Norge. Having experience in developing
          software, I have a good understanding in agile working methodology,
          and proven adaptability in programming. The main technologies that I
          am currently working on are React.js, JavaScript/TypeScript and
          Cypress.
        </p>
        <br />
        <p className="text-xl">
          Eager to progress my career, I developed profound competency in IT
          through work experience, side projects and certified courses. Keen to
          face a new challenge, I believe I can form an integral and valuable
          part of your company.
        </p>
      </div>
    </div>
  );
};

export default About;
