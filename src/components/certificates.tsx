import { motion } from "framer-motion";
import React, { useState } from "react";

interface Certificate {
  image: string;
}

const Certificates: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates: Certificate[] = [
    {
      image: "/certificates/certificate-api.jpg",
    },
    {
      image: "/certificates/gen-ai.jpg",
    },
    {
      image: "/certificates/react-redux.png",
    },
    {
      image: "/certificates/shopify-theme-dev.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-primary pt-12 md:pt-16 px-2 pb-6">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl md:text-3xl mb-2">Certificates</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-secondary/30 rounded-lg overflow-hidden bg-primary hover:bg-secondary/5 transition-colors cursor-pointer"
            onClick={() => setSelectedImage(cert.image)}
          >
            <div className="relative aspect-[3/2] w-full">
              <img
                src={cert.image}
                alt="Certificate"
                className="absolute w-full h-full object-contain p-1"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 right-0 text-white text-xl p-2"
            >
              ✕
            </button>
            <div className="bg-white/5 rounded-lg p-2">
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto max-h-[70vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
