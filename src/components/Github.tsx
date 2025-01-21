import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="text-center text-2xl font-bold">GitHub Contributions</div>
      <div className="flex justify-center opacity-80 pb-8 w-full">
        <GitHubCalendar
          username="shuklaji7058"
          blockSize={11}
          blockMargin={3}
          errorMessage="Could not load GitHub calendar of shuklaji7058"
          colorScheme={theme === "light" ? "dark" : "light"}
          fontSize={10}
        />
      </div>
      <a
        href="https://github.com/shuklaji7058"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 border border-secondary/30 hover:bg-secondary/10 transition-colors duration-300 rounded-md"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default Github;
