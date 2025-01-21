import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const MailMe: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col mb-6 gap-2">
        <h1 className="text-3xl">Contact Me</h1>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Phone Card */}
        <div className="border border-secondary/30 p-4 md:p-6 rounded-lg bg-primary hover:bg-secondary/5 transition-colors duration-300">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-2 md:p-3 rounded-full border border-secondary/20">
              <Phone className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
            </div>
            <h2 className="text-base md:text-lg font-medium">Phone</h2>
            <p className="text-sm md:text-base text-secondary/80 break-all">
              +91 7058601500
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="border border-secondary/30 p-4 md:p-6 rounded-lg bg-primary hover:bg-secondary/5 transition-colors duration-300">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-2 md:p-3 rounded-full border border-secondary/20">
              <Mail className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
            </div>
            <h2 className="text-base md:text-lg font-medium">Email</h2>
            <a
              href="mailto:shuklaanish040@gmail.com"
              className="text-sm md:text-base text-secondary/80 hover:text-secondary transition-colors break-all"
            >
              shuklaanish040@gmail.com
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="border border-secondary/30 p-4 md:p-6 rounded-lg bg-primary hover:bg-secondary/5 transition-colors duration-300">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-2 md:p-3 rounded-full border border-secondary/20">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
            </div>
            <h2 className="text-base md:text-lg font-medium">Location</h2>
            <div className="text-sm md:text-base text-secondary/80">
              <p className="break-words">
                Pimpri-Chinchwad, Pune
                <br />
                India, 411033
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 md:mt-10 text-secondary/60 text-xs md:text-sm">
        Copyright© 2024 Anish Shukla
      </div>
    </div>
  );
};

export default MailMe;
