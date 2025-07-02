import { Analytics } from "@vercel/analytics/react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollTop";

interface OutletContextValue {
  theme: string;
}

const Root: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return storedTheme !== null ? storedTheme : sysTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Set theme class on <html>
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const context: OutletContextValue = {
    theme,
  };

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollToTop />
      <div className="pt-10 bg-primary text-secondary min-h-screen">
        <Outlet context={context} />
      </div>
      <Analytics />
    </>
  );
};

export default Root;
