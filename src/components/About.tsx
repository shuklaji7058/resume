import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl mb-1">About</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="text-secondary/80">
        <p className="text-md leading-relaxed m-0">
          ”Motivated Computer Science graduate with hands-on project experience
          in Python, SQL, web development, and AI/ML technologies. Self-driven
          learner with demonstrated ability to master new technologies
          independently. Seeking to leverage technical foundation and enthusiasm
          for modern development practices in a challenging technology
          role.”{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
