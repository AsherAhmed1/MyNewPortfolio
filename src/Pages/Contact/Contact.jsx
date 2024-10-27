import React from "react";

const Skills = React.forwardRef((props, ref) => {
  return (
    <div className="mt-20">
      <section ref={ref}>
        <h1 className="text-gray-600 md:text-4xl text-2xl text-center font-extrabold">
          CONTACT ME
        </h1>

        <div className="text-center mt-10 mb-16">
          <a href="mailto:ahmedasher444@gmail.com">
            <button className="border-2 border-gray-500 p-3 pl-6 pr-6 text-gray-600 hover:bg-gray-600 hover:border-gray-600 hover:text-white duration-500 font-semibold">
              Email Me!
            </button>
          </a>
        </div>

      </section>
    </div>
  );
});

export default Skills;
