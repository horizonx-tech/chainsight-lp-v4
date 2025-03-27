import React, { useState } from "react";
import { motion } from "framer-motion";

const Connect = () => {
  const [click, setClick] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-6 my-10 px-4 sm:px-8 md:px-16 lg:px-20 w-full">
      <div className="flex flex-col gap-1 items-center text-center w-full max-w-md">
        <h3 className="text-[#FAFAFA] text-xl font-bold">Let’s connect</h3>
        <p className="text-[#71717A] text-xs sm:text-sm">
          Leave us a line, we contact you within a few hours.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex flex-col gap-6 items-center justify-center w-full max-w-md">
        <div className="bg-[#212123] text-[#A1A1AA] flex gap-2 rounded-full p-0.5 text-xs sm:text-sm relative w-full max-w-xs">
          {["Contact Us", "Customization"].map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer p-2 flex-1 text-center"
              onClick={() => setClick(index)}
            >
              {click === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </div>
          ))}
        </div>

        {/* Form Inputs */}
        <div className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            className="border bg-[#09090B] border-[#27272A] p-2 rounded-md w-full placeholder:text-xs placeholder:text-[#A1A1AA]"
            placeholder="Company Name*"
          />
          <input
            type="text"
            className="border bg-[#09090B] border-[#27272A] p-2 rounded-md w-full placeholder:text-xs placeholder:text-[#A1A1AA]"
            placeholder="Full Name*"
          />
          <input
            type="email"
            className="border bg-[#09090B] border-[#27272A] p-2 rounded-md w-full placeholder:text-xs placeholder:text-[#A1A1AA]"
            placeholder="Email Address*"
          />
          <textarea
            rows={4}
            className="border bg-[#09090B] border-[#27272A] p-2 rounded-md w-full resize-none placeholder:text-xs placeholder:text-[#A1A1AA]"
            placeholder="A brief summary of what you need."
          />
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 bg-transparent border border-gray-500 appearance-none cursor-pointer mt-1"
            />
            <div className="text-[#71717A] text-xs sm:text-sm">
              I agree to be contacted by TechStrata regarding this demo request *
            </div>
          </div>
        </div>

        <button className="w-full max-w-xs h-10 rounded-full bg-[#355DEA] text-sm sm:text-base">
          Send it over!
        </button>
      </div>
    </div>
  );
};

export default Connect;
