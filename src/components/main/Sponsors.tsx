import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import React from "react";

const Sponsors = () => {
  const sponsors = ["polygon", "plume", "bnb", "bevm", "nero", "berachain", "lumia", "movement", "optimism"];

  return (
    <div className="flex relative w-full items-center justify-center md:border-b-2 border-[#111827] mt-8 md:mt-0">
      <div className="hidden lg:flex absolute -bottom-1 left-[3.7vw] translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>
      <div className="hidden lg:flex absolute -bottom-1 right-[3.7vw] translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>
      <div className="flex relative max-w-[90vw] overflow-hidden ">
          <motion.div
            transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translateX: '-50%'}}
            animate={{ translateX:0 }}
            className="flex flex-none gap-16 pr-16 py-5"
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {sponsors.map((src,index) => (
                  <img
                    key={index}
                    src={`${src}.svg`}
                    alt={src}
                    className="h-5 w-auto flex-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      
      <div className="overflow-hidden max-w-[80vw]">
        
      </div>
    </div>
  );
};

export default Sponsors;