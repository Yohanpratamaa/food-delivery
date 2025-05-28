import React from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen px-10">
        {/* Image */}
        <div className="bg-gray-300 p-8 rounded-xl shadow-md w-80 h-100"></div>

        {/* Title */}
        <div className="text-center mt-8">
          <div className="mt-10 font-bold text-2xl tracking-wider">
            All your favorites
          </div>

          <div className="w-100 tracking-wider text-gray-500 mt-4">
            Get all your loved foods in one once place, you just place the orer
            we do the rest
          </div>
        </div>

        {/* Page circle */}
        <div className="inline-flex space-x-5 mt-8">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-[3rem] bg-orange-500 text-white w-full h-14 px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 font-bold"
        >
          NEXT
        </button>

        <div className="mt-5 text-gray-500 cursor-pointer hover:text-orange-600 transition duration-300 font-semibold">
          Skip
        </div>
      </div>
    </>
  );
};

export default Onboarding;
