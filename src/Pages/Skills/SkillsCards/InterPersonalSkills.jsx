
import React from 'react';

const InterSkillsCards = () => {
  // List of skills
  const skills = [
    'Proficient in Microsoft Office Suite (Word, Excel, PowerPoint)', 'Coding', 'Problem Solving', 'Eager to Learn',
    '(CAN DO) Attitude', 'Analytical Thinking', 'Strong Communication', 'Adobe PhotoShop',
    'Adobe Illustrator', 'Adobe Premier Pro', 'Adobe Animate','Blender',
  ];

  return (
    <div className="p-8">

      {/* Skills grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-gray-600 text-white shadow-md rounded-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 "
          >
            <h1 className="font-semibold">{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterSkillsCards;
