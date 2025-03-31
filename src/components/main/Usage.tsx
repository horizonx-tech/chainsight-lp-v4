import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import UsageCards from '../sub/UsageCards';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { handleBackward, handleForward } from '../../utils/functionalities';

type CardVariant = "primary" | "secondary" | "tertiary" | "quartinary";

const Usage = () => {
  const [click, setClick] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  
  const userTypes = [
    {name: "Developers", image: "/dataIndexing.svg"},
    {name: "Traders", image: "/oracleDeployment.svg"},
    {name: "Enterprises", image: "apiAcess.svg"}
  ];
  
  const cardVariants: CardVariant[] = ['primary', 'secondary', 'tertiary', 'quartinary'];
  const maxLength = cardVariants.length - 1;

  // Update visible cards count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex items-center justify-center mb-10">
      <div className="flex flex-col gap-4 items-start justify-center bg-[#09090B] rounded-xl max-w-[90vw] md:max-w-[80vw] p-5">
        <h2 className="text-xl text-white">Who can use ChainSight?</h2>
        <div className='flex justify-between w-full'>
          <div  style={{scrollbarWidth: "none" }} className="text-[#FFFFFF] flex gap-1 rounded-full p-1 text-sm relative w-[80%] overflow-x-scroll overflow-y-hidden md:overflow-hidden">
            {userTypes.map((item, index) => (
              <div
                key={index}
                className="relative cursor-pointer flex min-w-[150px] justify-center px-1 py-2 md:w-full items-center gap-2"
                onClick={() => setClick(index)}
              >
                {click === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#212121] text-[#FFE000] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={`z-10 ${click === index ? "fill-[#FFE000]" : "fill-white"}`} 
                />
                <span className={`relative z-10 flex ${click === index ? "text-[#FFE000]" : ""}`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <div className='flex gap-3 w-[25%] md:w-[10%] mt-2'>
            <div 
              className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition >= 0 ? 'opacity-50' : 'opacity-100'}`}
              onClick={() => handleBackward({setSlidePosition, visibleCards})}
            >
              <IoArrowBackSharp size={14} />
            </div>
            <div 
              className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition <= -((cardVariants.length - visibleCards) * 100) ? 'opacity-50' : 'opacity-100'}`}
              onClick={() => handleForward({setSlidePosition, maxLength, visibleCards})}
            >
              <IoMdArrowRoundForward size={14} />
            </div>
          </div>
        </div>
        
        <div className="w-full overflow-hidden">
        <motion.div 
        className='flex gap-7 lg:gap-4 '
        animate={{ x: `${slidePosition}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {cardVariants.map((variant, index) => (
          <div key={index} className="flex-0 w-full md:w-[30%]">
            <UsageCards variant={variant} />
          </div>
        ))}
      </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Usage;