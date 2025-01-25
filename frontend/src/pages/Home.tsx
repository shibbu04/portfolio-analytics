import React from "react";
import { BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-yellow-50">
        <div className="container mx-auto px-4 py-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
                Empower Your Portfolio Analysis
              </h1>
              <p className="text-lg text-gray-600">
                Discover actionable insights, strategies, and market updates 
                with our user-friendly analytics platform. Track performance and 
                make informed decisions effortlessly.
              </p>
              <div className="mt-4 flex justify-center lg:justify-start space-x-4">
                <button
                  onClick={() => navigate("/register")}
                  className="px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg shadow hover:bg-yellow-700 focus:outline-none transition"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 bg-white text-yellow-600 border border-yellow-600 font-medium rounded-lg shadow hover:bg-yellow-50 focus:outline-none transition"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58epMH2g81ae7q3oiT4NNm1meVdmJrU1lXQ&s"
                alt="Analytics Illustration"
                className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
