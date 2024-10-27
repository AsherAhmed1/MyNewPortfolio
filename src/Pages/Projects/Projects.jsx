import React from "react";
import VisuMeet from "./Cards/VisuMeet";
import QuizAt from "./Cards/QuizAt";
import JobPortal from "./Cards/JobPortal";
import Portfolio1 from "./Cards/Portfolio1";
import Portfolio2 from "./Cards/Portfolio2";
import ShoeMate from "./Cards/ShoeMate";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="mt-20 md:mt-36">
      <section ref={ref}>
        <h1 className="text-gray-600 md:text-4xl text-2xl text-center font-extrabold">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-auto">
          <VisuMeet />
          <Portfolio2 />
          <QuizAt />
          <JobPortal />
          <Portfolio1 />
          <ShoeMate />
        </div>
      </section>
    </div>
  );
});

export default Projects;
