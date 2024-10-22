import React from "react";

const About: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">About</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="space-y-2 text-secondary/80">
        <p className="text-md">
          A 3rd-year Computer Science student from Pune, India, with a passion
          for FrontEnd development and Artificial Intelligence. I love to build
          things in public and write clean code. I Learn new tech by building
          projects with it. Constantly seeking new opportunities to learn and
          grow, I thrive in collaborative work and team environments. Beyond
          tech, I enjoy playing cricket, and watching movies.
        </p>
      </div>
    </div>
  );
};

export default About;
