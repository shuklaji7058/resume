import React, { useEffect, useState } from "react";
import resume1 from "../assets/resume1.jpg";
import resume2 from "../assets/resume2.jpg"; // Add your second image

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

  // Function to download both images
  const downloadBothImages = () => {
    // Create invisible anchor elements for each download
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");

    // Set download attributes
    link1.href = resume1;
    link1.download = "resume1.jpg";
    link2.href = resume2;
    link2.download = "resume2.jpg";

    // Trigger downloads
    link1.click();
    setTimeout(() => {
      link2.click();
    }, 100); // Small delay between downloads

    // Cleanup
    link1.remove();
    link2.remove();
  };

  return (
    <div className="mt-10 md:pt-10 md:mt-6 bg-primary min-h-screen">
      <div className="flex flex-col items-center gap-8">
        {/* First Image */}
        <div className="flex justify-center">
          <img
            src={resume1}
            alt="Resume Page 1"
            style={{
              width: imageWidth,
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Second Image */}
        <div className="flex justify-center">
          <img
            src={resume2}
            alt="Resume Page 2"
            style={{
              width: imageWidth,
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Single download button for both images */}
      <div className="text-center mt-6 sm:mt-0">
        <button
          onClick={downloadBothImages}
          className="px-2 py-1 my-10 bg-primary text-xs text-secondary/80 border border-secondary/30"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
