import React from "react";
import Icon, { Icons } from "./Icon";

const TechGrid: React.FC = () => {
  const technologies = [
    {
      name: "VS Code",
      icon: "vscode",
      color: "#007ACC", // blue-500
    },
    {
      name: "Canva",
      icon: "canva",
      color: "#006CFF", // blue-600
    },

    {
      name: "Vercel",
      icon: "vercel",
      color: "#000000", // black
    },
    {
      name: "Postman",
      icon: "postman",
      color: "#FF6C37", // orange-600
    },
    {
      name: "Github",
      icon: "github",
      color: "#000000", // black
    },

    {
      name: "cursor",
      icon: "cursor",
    },
    {
      name: "pycharm",
      icon: "pycharm",
    },
    {
      name: "intellijidea",
      icon: "intellijidea",
    },
  ];

  return (
    <div>
      <div className="flex flex-col mb-4 gap-2">
        <h1 className="text-3xl">Tool Stack</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>
      <div className="mt-8 flex flex-row flex-wrap gap-4 items-center justify-center md:justify-start">
        {technologies.map((tech, index) => {
          return (
            <div
              key={index}
              className="group h-14 relative px-10 py-2 bg-blue-100 rounded-md flex flex-col items-center justify-center transition-all duration-300 "
            >
              <Icon
                icon={tech.icon as Icons}
                size={34}
                fill={tech.color}
                className="text-5xl transition-opacity duration-300 group-hover:opacity-0"
              />
              <p className="absolute opacity-0 text-black text-lg transition-opacity duration-300 group-hover:opacity-100">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechGrid;
