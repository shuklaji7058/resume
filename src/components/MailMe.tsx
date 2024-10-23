/* eslint-disable react/react-in-jsx-scope */
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-gray-300 transition-colors">
            Contact Me
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Phone Card */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-500/10 p-3 md:p-4 rounded-full">
                <Phone className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold">Phone</h2>

              <p className="text-blue-400 text-base md:text-lg break-words w-full">
                +91 7058601500
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-500/10 p-3 md:p-4 rounded-full">
                <Mail className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold">Email</h2>

              <a
                href="mailto:contact@example.com"
                className="text-blue-400 hover:text-blue-300 transition-colors text-base md:text-lg break-words w-full"
              >
                shuklaanish040@gmail.com
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-500/10 p-3 md:p-4 rounded-full">
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold">Address</h2>

              <p className="text-blue-400 text-base md:text-lg break-words w-full">
                Pimpri-Chinchwad,Pune
                <br />
                India,411033
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12 md:mt-16 text-gray-400">
          <p>Copyright© 2024 Anish Shuka</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
