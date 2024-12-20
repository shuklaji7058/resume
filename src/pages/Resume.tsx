import React, { useEffect, useState } from "react";
import img1 from "../assets/resume1.jpg";
import img2 from "../assets/resume2.jpg";

const Resume: React.FC = () => {
  const [imageWidth, setImageWidth] = useState("80%");

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setImageWidth("90%"); // Mobile view
      } else if (width < 1000) {
        setImageWidth("70%"); // Tablet view
      } else {
        setImageWidth("50%"); // Desktop view
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="mt-10 md:pt-10 md:mt-6 bg-primary min-h-screen">
      <div className="flex justify-center">
        {/* Render the image with dynamic width based on screen size */}
        <img
          src={img1}
          alt="Resume"
          style={{
            width: imageWidth, // Dynamically set width
            maxWidth: "100%", // Ensure it doesn't overflow
            height: "auto", // Maintain aspect ratio
          }}
        />
        <img
          src={img2}
          alt="Resume"
          style={{
            width: imageWidth, // Dynamically set width
            maxWidth: "100%", // Ensure it doesn't overflow
            height: "auto", // Maintain aspect ratio
          }}
        />
      </div>
      <div className="text-center mt-6 sm:mt-0">
        <a href={img1} download>
          <button className="px-2 py-1 my-10 bg-primary text-xs text-secondary/80 border border-secondary/30">
            Download Resume
          </button>
        </a>
        <a href={img2} download>
          <button className="px-2 py-1 my-10 bg-primary text-xs text-secondary/80 border border-secondary/30">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
