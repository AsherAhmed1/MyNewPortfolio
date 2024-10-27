import React from "react";
import asherImage from "../../../Assets/Images/Asher_Landing_Page_Image.jpg";
import myResume from "../../../Assets/Resume/Ashers_Resume_Updated.pdf";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="mt-12">
      <section>
      <div className="md:flex">
        {/* Starting of the left side of the page */}
        <div>
          <div className="ml-8 md:ml-24">
            <h1 className="bg-gradient-to-r from-green-400 to-gray-600 text-transparent bg-clip-text md:text-6xl text-5xl font-extrabold">
              Hi, I am Asher Ahmed.
            </h1>
            <h1 className="text-gray-600 text-3xl font-extrabold mt-6">
              A Full-Stack Web Developer.
            </h1>
            <h1 className="text-gray-600 mt-6 text-justify mx-auto max-w-2xl mr-8">
              As a fullstack web developer, my portfolio showcases expertise in
              both front-end and back-end development. With a strong foundation
              in MERN stack and additional proficiency in Laravel, I am able to
              build dynamic, scalable web applications. My academic background
              in computer science and continuous learning have equipped me with
              the necessary skills to handle diverse development challenges,
              from responsive design to robust server-side logic, delivering
              full-fledged web solutions.
            </h1>
          </div>
        </div>
        {/* Ending of the left side of the page */}

        {/* Starting of the right side of the page */}
        <div className="flex justify-center items-center h-full">
          <div className="w-56 mt-12 md:mt-0 md:w-64 md:mx-auto md:ml-44">
            <img
              className="rounded-xl hover:scale-105 duration-300 hover:shadow-gray-600 shadow-2xl"
              src={asherImage}
              alt="Asher-Pic"
            />
          </div>
        </div>
        {/* Ending of the right side of the page */}
      </div>

      {/* Starting of the landing page buttons */}
      <div className="mt-12">
        <div className="flex ml-0 mx-auto justify-center items-center space-x-8">
          {/* Starting of the resume button */}
          <div>
            <a href={myResume} download target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-gray-500 p-2 pr-5 pl-5 rounded-md hover:border-gray-600 hover:bg-gray-600 hover:text-white duration-500">
                Resume
              </button>
            </a>
          </div>
          {/* Ending of the resume button */}

          {/* Starting of the Github Logo */}
          <div>
            <a href="https://github.com/AsherAhmed1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-gray-500 hover:text-gray-600 duration-300" />
            </a>
          </div>
          {/* Ending of the github logo */}

          {/* Starting of the linkedin logo */}
          <div>
            <a href="https://www.linkedin.com/in/asherahmed1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-gray-500 hover:text-gray-600 duration-300" />
            </a>
          </div>
          {/* Ending of the linkedin logo */}
        </div>
      </div>
      {/* Ending of the landing page buttons */}

      </section>
    </div>
  );
};

export default LandingPage;
