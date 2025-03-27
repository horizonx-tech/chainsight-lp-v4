import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const Sponsors = () => {
  const sponsors = ["polygon", "plume", "bnb", "bevm", "nero", "berachain", "lumia", "movement", "optimism"];

  // Duplicate sponsors to create a seamless infinite scroll
  const scrollSponsors = [...sponsors, ...sponsors];

  return (
    <div className="flex relative w-full items-center justify-center border-b-2 border-[#111827]">
      <div className="hidden lg:flex absolute -bottom-1 left-[3.7vw] translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>
      <div className="hidden lg:flex absolute -bottom-1 right-[3.7vw] translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>
      
      <div className="overflow-hidden w-[90%]">
        <motion.div 
          className="flex items-center justify-center"
          initial={{ x: 0 }}
          animate={{ x: "-40%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {scrollSponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-4 my-2"
            >
              <img 
                src={`${sponsor}.svg`} 
                alt={sponsor} 
                className="w-[120px] h-[40px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;