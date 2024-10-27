import React from 'react';

const SkillsCards = () => {
  // List of skills
  const skills = [
    'OOP', 'DSA', 'Python', 'C++',
    'HTML5', 'CSS3', 'JavaScript', 'PHP',
    'LARAVEL', 'MySQL', 'MongoDB','Express.js',
    'React.js', 'Node.js', 'TailwindCSS', 'BootStrap5',
    'GitHub', 'Git'
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

export default SkillsCards;
