import React from "react";
import { FaGithub } from "react-icons/fa";

const QuizAt = () => {
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
                QuizAt
              </h1>
            </div>
            {/* Ending of the card heading */}

            {/* Starting of the card description */}
            <div className="mt-8">
              <h1 className="text-white text-justify">
                The MERN Stack Quiz App is a web-based platform where users can
                easily create custom quizzes, take quizzes, and share them
                through a generated shareable link. With a smooth user
                experience, it enables quiz creators to design quizzes and
                distribute them effortlessly, allowing others to participate
                using the shared link. Perfect for educational, training, or fun
                quizzes.
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
                href="https://github.com/AsherAhmed1/quizat-reactjs"
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

export default QuizAt;
