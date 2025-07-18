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
          I am a Computer Science graduate with a strong foundation in Python,
          SQL (MySQL, PostgreSQL), and front-end web development including HTML,
          CSS, and JavaScript. I also have hands-on experience with Generative
          AI and large language models using APIs like Google Gemini. I am
          passionate about software development and eager to contribute to
          innovative tech projects by writing clean, efficient code. I am
          actively seeking an entry-level opportunity in Python development,
          AI/ML, or any tech role where I can grow, learn, and bring value to
          the team.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
