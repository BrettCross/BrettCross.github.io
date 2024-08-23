import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-gray-900">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            Hi, I'm Brett.
            <br className="hidden lg:inline-block" />
            I love to build amazing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a dedicated software developer with a strong foundation in JavaScript and Python. 
            I'm passionate about coding and am always eager to tackle new challenges.
            What started as a curiousity to understand how things work evolved 
            into a career of solving complex problems and building innovative solutions. 
            <br/>
            <br/>
            I am constantly learning and staying updated with the latest industry trends and advancements. 
            Whether it's exploring new programming languages or diving into emerging technologies, 
            I am committed to expanding my knowledge and enhancing my skill set. I'm also an aspiring bug bounty hunter!
            <br/>
            <br/>
            When I'm not coding or smashing bugs, I enjoy spending time with family, watching sports or playing video games.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}