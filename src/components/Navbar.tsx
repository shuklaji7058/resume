import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon, { Icons } from "./Icon";

const Navbar: React.FC<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}> = ({ theme, setTheme }) => {
  const location = useLocation();
  const path = location.pathname;
  const darkTheme = theme === "dark";

  useEffect(() => {
    const page = navelements.find((element) => element.link === path);
    document.title = `Anish | ${page?.name}`;
  }, [path]);

  const navelements = [
    {
      name: "Home",
      link: "/",
      logo: "home",
      size: 22,
    },
    {
      name: "Projects",
      link: "/projects",
      logo: "projects",
      size: 18,
    },
    {
      name: "Resume",
      link: "/resume",
      logo: "resume",
      size: 18,
    },
    {
      name: "Certificates",
      link: "/certificates",
      logo: "certificate",
      size: 18,
    },
  ];

  const handleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="z-20 h-20 w-screen fixed top-0 text-secondary">
      {/* Desktop Navigation */}
      <div className="hidden md:flex h-full backdrop-blur-sm justify-center items-center">
        <div className="flex items-center text-md rounded-full border border-secondary/28 bg-primary">
          {navelements.map((element) => {
            const active =
              path === element.link ? "text-pink-600" : "text-secondary";
            return (
              <Link
                to={element.link}
                key={element.name}
                className={`w-28 p- rounded-full hover:text-pink-500 text-center ${active}`}
              >
                {element.name}
              </Link>
            );
          })}
          <button
            onClick={handleTheme}
            className="w-27 p-3 rounded-full hover:text-pink-500 text-center"
          >
            {theme === "dark" ? (
              <Icon icon="lightmode" size={22} />
            ) : (
              <Icon icon="darkmode" size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-lg bg-secondary/10 border border-secondary/30">
          {navelements.map((element) => {
            const active =
              path === element.link ? "#db2777" : darkTheme ? "white" : "black";
            return (
              <Link to={element.link} key={element.name} className="p-2">
                <Icon
                  icon={element.logo as Icons}
                  size={element.size}
                  fill={active}
                />
              </Link>
            );
          })}
          <button
            onClick={handleTheme}
            className="p-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Icon icon="lightmode" size={22} fill="white" />
            ) : (
              <Icon icon="darkmode" size={22} fill="black" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
