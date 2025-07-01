import React from "react";

const About: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">About</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="space-y-4 text-secondary/80">
        <p className="text-md leading-relaxed">
          I am a Computer Science undergraduate with a strong foundation in
          Python, SQL (MySQL & PostgreSQL), and front-end web development,
          including HTML, CSS, and JavaScript. I am passionate about software
          development and eager to contribute to impactful tech projects by
          writing clean, efficient code. I also have knowledge of Generative AI,
          which adds to my ability to work on modern, innovative solutions. I am
          actively seeking an entry-level opportunity in Python development, web
          development, or any tech role where I can grow, learn, and bring value
          to the team.
        </p>
      </div>
    </div>
  );
};

export default About;
