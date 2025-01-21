import React, { useEffect, useState } from "react";
import resumeImage from "../assets/resume.jpg";
import resumePDF from "../assets/resume.pdf";

const Resume: React.FC = () => {
  const [imageWidth, setImageWidth] = useState("80%");

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setImageWidth("90%");
      } else if (width < 1000) {
        setImageWidth("70%");
      } else {
        setImageWidth("50%");
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Function to download PDF
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Anish_Shukla_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-10 md:pt-10 md:mt-6 bg-primary min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <img
            src={resumeImage}
            alt="Resume"
            style={{
              width: imageWidth,
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Download button */}
        <div className="text-center mt-6 mb-10">
          <button
            onClick={downloadResume}
            className="px-4 py-2 bg-primary text-secondary border border-secondary/30 hover:bg-secondary/10 transition-colors duration-300"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
