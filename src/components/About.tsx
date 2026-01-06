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
          Entry-level Data Analyst with strong self-driven experience in Python,
          SQL, Excel, Power BI, and data visualization. Skilled in collecting,
          cleaning, analyzing, and presenting data to derive actionable
          insights. Hands-onexperience building analytical and AI-assisted
          applications, dashboards, and reporting solutions. Seeking ajunior
          data analyst role to apply analytical skills in real-world business
          environments.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
