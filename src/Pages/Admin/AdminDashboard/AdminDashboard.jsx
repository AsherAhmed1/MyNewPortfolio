import React, { useState } from "react";

const AdminDashboard = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-600">Admin Panel</h1>
      </div>

      {/* Starting of the toggle buttons */}

      {/* Buttons to toggle sections */}
      <div className="space-x-4 mb-6 mt-10">
        <button
          className={`p-3 ${
            activeSection === "landing"
          } bg-gray-500 hover:bg-gray-600 duration-300 text-white hover:scale-105 rounded-lg`}
          onClick={() => setActiveSection("landing")}
        >
          Landing Page
        </button>
        <button
          className={`p-3 ${
            activeSection === "projects"
          } bg-gray-500 hover:bg-gray-600 duration-300 text-white hover:scale-105 rounded-lg`}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
        <button
          className={`p-3 ${
            activeSection === "skills"
          } bg-gray-500 hover:bg-gray-600 duration-300 text-white hover:scale-105 rounded-lg`}
          onClick={() => setActiveSection("skills")}
        >
          Skills
        </button>
      </div>

      {/* Ending of the Toggle buttons */}

      {/* Content Sections */}

      {/* Starting for the Landing page section */}
      <div className="w-full max-w-md">
        {activeSection === "landing" && (
          <div className="p-6 bg-green-200 rounded-lg shadow-2xl">
            <h2 className="text-lg font-bold mb-4 text-center text-gray-600">
              Landing Page
            </h2>

            <label className="block mb-2">Title:</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="p-2 rounded-md w-full mb-4"
            />

            <label className="block mb-2">Slogan:</label>
            <input
              placeholder="Enter Slogan"
              className="p-2 mb-4 rounded-md w-full"
            />

            <label className="block mb-2">Description:</label>
            <textarea
              placeholder="Enter Description"
              className="p-2 rounded-md mb-4 w-full"
            />

            <label className="block mb-2">Upload Image:</label>
            <input
              type="file"
              className="p-2 border-2 border-gray-300 rounded-md mb-4 w-full"
            />

            <label className="block mb-2">Upload Resume:</label>
            <input
              type="file"
              className="p-2 border-2 border-gray-300 rounded-md mb-4 w-full"
            />

            <label className="block mb-2">Github Link:</label>
            <input
              placeholder="Enter the Github Link"
              className="p-2 rounded-md mb-4 w-full"
            />

            <label className="block mb-2">Linkedin Link:</label>
            <input
              placeholder="Enter Linkedin Link"
              className="p-2 rounded-md mb-4 w-full"
            />
          </div>
        )}
        {/* Ending for the Landing page section */}

        {/* Starting for the Project page section */}
        {activeSection === "projects" && (
          <div className="p-6 bg-green-200 rounded-lg shadow-2xl">
            <h2 className="text-lg font-bold text-center text-gray-600 mb-4">
              Projects
            </h2>
            <label className="block mb-2">Project Name:</label>
            <input
              type="text"
              placeholder="Enter project name"
              className="p-2 rounded-md w-full mb-4"
            />

            <label className="block mb-2">Project Description:</label>
            <textarea
              placeholder="Enter project description"
              className="p-2 rounded-md w-full mb-4"
            />

            <label className="block mb-2">Github Link:</label>
            <input
              placeholder="Enter Github Link"
              className="p-2 rounded-md w-full mb-4"
            />

          </div>
        )}
        {/* Ending of the project page section */}

        {/* Starting of the skills page section */}
        {activeSection === "skills" && (
          <div className="p-6 bg-green-200 rounded-lg shadow-2xl">
            <h2 className="text-lg font-bold text-center text-gray-600 mb-4">Skills</h2>
            <label className="block mb-2">Skill Name:</label>
            <input
              type="text"
              placeholder="Enter skill name"
              className="p-2 border-2 border-gray-300 rounded-md w-full mb-4"
            />
          </div>
        )}
        {/* Ending of the skills page section  */}
      </div>
    </div>
  );
};

export default AdminDashboard;
