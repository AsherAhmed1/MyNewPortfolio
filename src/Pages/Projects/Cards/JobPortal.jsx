import React from "react";
import { FaGithub } from "react-icons/fa";

const JobPortal = () => {
  return (
    <div>
      {/* starting of the cards */}
      <div className="mt-12 flex justify-center ">
        <div
          className="block rounded-lg bg-gray-600 p-6 shadow-2xl duration-300 hover:scale-110"
          style={{ height: "560px", width: "380px" }}
        >
          <div className="flex flex-col h-full">
            {/* Starting of the card Heading */}
            <div>
              <h1 className="text-center text-white font-extrabold text-4xl">
                JobPortal
              </h1>
            </div>
            {/* Ending of the card heading */}

            {/* Starting of the card description */}
            <div className="mt-8">
              <h1 className="text-white text-justify">
                A MERN Stack job portal that enables users to create job
                listings, search for job opportunities, and perform all
                essential job portal functions. This platform provides a
                seamless experience for employers to post jobs and for job
                seekers to find suitable positions, complete with intuitive
                navigation and real-time updates.
              </h1>
            </div>
            {/* ending of the card description */}

            {/* starting of the technologies */}
            <div className="flex space-x-4 text-white font-bold justify-center mt-6">
              <h1>MERN</h1>
              <h1>TailwindCSS</h1>
            </div>
            {/* Ending of the technologies */}

            {/* Starting of the github button */}
            <div className="flex justify-center">
              <a
                href="https://github.com/AsherAhmed1/Job-Portal"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="mt-6 text-3xl text-gray-300 hover:text-gray-400 duration-300" />
              </a>
            </div>
            {/* Ending of the github buttons */}
          </div>
        </div>
      </div>
      {/* Ending of the cards */}
    </div>
  );
};

export default JobPortal;
