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
          Results-driven Computer Science graduate from Pratibha College of
          Commerce & Computer Studies (SPPU) with strong expertise in Python and
          web development (HTML, CSS, JavaScript, React). Demonstrated practical
          experience through development of multiple projects, including an
          AI-powered Pratibha Wizardry app and advanced chat applications.
          Proficient in integrating AI technologies to create innovative
          solutions. Known for quick learning ability, clean coding practices,
          and effective teamwork. Seeking a Software Developer role to
          contribute technical expertise while continuously growing
          professionally and driving innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
