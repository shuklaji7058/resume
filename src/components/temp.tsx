import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Icon from "./Icon";

const Landing: React.FC<{ theme: string }> = ({ theme }) => {
  const [img, setImg] = useState(() => {
    return theme === "light" ? "img1" : "img2";
  });

  useEffect(() => {
    setImg(theme === "light" ? "img1" : "img2");
  }, [theme]);

  return (
    <div className="w-full mb-72 lg:mb-80">
      <div className="flex flex-col mt-12 md:mt-24">
        <h1
          className="text-3xl md:text-4xl font-bold z-10"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          नमस्ते👋,
        </h1>{" "}
        <h1 className="text-3xl md:text-6xl z-10">
          I am
          <span className="text-5xl md:text-7xl font-extrabold">
            Anish Shukla
          </span>
        </h1>
        <div className="flex flex-row flex-wrap gap-4 z-10">
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Frontend Developer",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="span"
            speed={90}
            style={{
              fontSize: "1.5em",
              background: "-webkit-linear-gradient(blue, skyblue)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </div>
        <p className="text-2xl z-10">based in Pune, India </p>
        <h1 className="text-4xl mt-4 z-10">
          and I <span className="text-orange-400 text-5xl">Build</span>{" "}
          <span className="text-6xl my-1 px-1 text-orange-600 font-bold">
            THINGS
          </span>
        </h1>
        <Link to="projects" className="z-10 mt-3">
          <p className="italic text-pink-500 "></p>
        </Link>
        <div className="flex flex-row gap-5 mt-6 z-10">
          <a
            href="https://github.com/shuklaji7058"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Icon icon="github" />
          </a>
          <a
            href="https://linkedin.com/in/anish-shukla-07633b2bb"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Icon icon="linkedin" size={26} />
          </a>
          <a
            href="https://x.com/AnishDineshShu1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Icon icon="twitter" />
          </a>
        </div>
        <div
          className="bgimg bg-cover bg-center absolute top-0 left-0 w-full h-full z-0"
          style={{ backgroundImage: `url('${img}.png')` }}
        ></div>
      </div>
    </div>
  );
};

export default Landing;
