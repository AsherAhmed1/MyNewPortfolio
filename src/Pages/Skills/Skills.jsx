import React from "react";
import SkillsCards from "./SkillsCards/SkillsCards";
import InterSkillsCards from "./SkillsCards/InterPersonalSkills";

const Skills = React.forwardRef((props, ref) => {
  return (
    <div className="mt-20 md:mt-36">
      <section ref={ref}>
        <h1 className="text-gray-600 md:text-4xl text-2xl text-center font-extrabold">
          SKILLS
        </h1>

        <SkillsCards />
      </section>

      <h1 className="text-gray-600 md:text-4xl text-2xl mt-20 md:mt-36 text-center font-extrabold">
        INTERPERSONAL SKILLS
      </h1>
      <InterSkillsCards />
    </div>
  );
});

export default Skills;
