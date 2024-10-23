import React from "react";
import { useOutletContext } from "react-router-dom";
import About from "../components/About";
import Github from "../components/Github";
import Landing from "../components/Landing";
import MailMe from "../components/MailMe";
import Projects2 from "../components/Projects2";
import Reveal from "../components/Reveal";
import TechGrid from "../components/TechGrid";
import ToolGrid from "../components/ToolGrid";

const Home: React.FC = () => {
  const { theme } = useOutletContext<{ theme: string }>();
  return (
    <div className="px-4 pb-20 space-y-14 md:px-0 md:max-w-[80%] lg:max-w-[50%] m-auto">
      <Landing theme={theme} />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <TechGrid />
      </Reveal>
      <Reveal>
        <ToolGrid />
      </Reveal>
      <Reveal>
        <Projects2 />
      </Reveal>
      <Reveal>
        <Github theme={theme} />
      </Reveal>
      <Reveal>
        <MailMe />
      </Reveal>
    </div>
  );
};

export default Home;
