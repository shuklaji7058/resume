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
          Results-driven Computer Science graduate from Pratibha College of
          Commerce & Computer Studies (SPPU) with strong knowledge in Python and
          web development (HTML, CSS, JavaScript, React). Demonstrated practical
          experience through development of multiple projects, including an
          AI-powered Pratibha Wizardry app and advanced chat applications.
        </p>
        <p className="text-md leading-relaxed">
          Working knowledge of database management with practical experience in
          SQL, enabling me to perform basic database operations and write
          fundamental queries. Currently expanding my database skills while
          building projects that require data persistence and management.
        </p>
        <p className="text-md leading-relaxed">
          Proficient in integrating AI technologies to create innovative
          solutions while maintaining clean code practices. Known for quick
          learning ability and effective collaboration in team environments.
          Seeking a Software Developer role to leverage my technical expertise
          while continuously growing professionally and expanding my skill set.
        </p>
      </div>
    </div>
  );
};

export default About;
