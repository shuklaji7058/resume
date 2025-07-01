import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";

const Landing: React.FC<{ theme: string }> = ({ theme }) => {
  const roles = ["Web Developer", "FrontEnd Developer", "Python Developer"];
  const q = ["Build", "Ship", "Innovate"];
  const [i, setI] = useState(0);
  const iconfill = theme === "dark" ? "white" : "black";
  const colorControls = useAnimationControls();

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    colorControls.start({
      color: ["#FF0000", "#00FF00", "#0000FF"],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [colorControls]);

  return (
    <motion.div
      className="w-full px-4 py-8 min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          नमस्ते👋, I&apos;m{" "}
          <span className="relative inline-block">
            <span className="text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Anish
            </span>
            <span className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-4xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I&apos;m a{" "}
          <motion.span
            className="font-semibold text-blue-500 px-2 mx-2 bg-secondary"
            animate={{ opacity: [1, 0.5, 1], ...colorControls }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {roles[i]}
          </motion.span>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          based in <span className="font-semibold">Pune, India</span>
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I
          <motion.span
            className="font-semibold text-blue-500 px-2 mx-2 bg-secondary"
            animate={{ opacity: [1, 0.75, 1], ...colorControls }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {q[i]}
          </motion.span>
          <span className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            THINGS
          </span>
        </motion.h2>

        <motion.div
          className="flex gap-6 items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <a
            href="https://github.com/shuklaji7058"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Icon icon="github" size={32} fill={iconfill} />
          </a>
          <a
            href="http://linkedin.com/in/anish-shukla-07633b2bb"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Icon icon="linkedin" size={32} fill={iconfill} />
          </a>
          <a
            href="https://x.com/AnishDineshShu1"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Icon icon="twitter" size={32} fill={iconfill} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
