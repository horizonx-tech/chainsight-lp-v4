import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import UsageCards from '../sub/UsageCards';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { handleBackward, handleForward } from '../../utils/functionalities';

type CardVariant = "primary" | "secondary" | "tertiary" | "quartinary";

const Usage = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  
  const cardVariants: CardVariant[] = ['primary', 'secondary', 'tertiary', 'quartinary'];
  const maxLength = cardVariants.length - 1;
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50; 
  
    if (swipeDistance < -swipeThreshold) {
      setSlidePosition(-((cardVariants.length - visibleCards+0.2) * 100));
    } else if (swipeDistance > swipeThreshold) {
      setSlidePosition(0);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if(window.innerWidth < 1900){
        setVisibleCards(3);
      }
      else{
        setVisibleCards(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex items-center justify-center mb-10">
      <div className="flex flex-col gap-4 items-start justify-center bg-[#09090B] rounded-xl max-w-[90vw] md:w-[80%] xl:max-w-screen-lg p-5">
        <h2 className="text-xl text-white">Who can use ChainSight?</h2>
        <div className='flex justify-between w-full'>
          <div>

          </div>
          <div className={visibleCards!=4?`hidden md:flex gap-3 w-[25%] md:w-[10%] mt-2`:`hidden`}>
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
        className='flex gap-7 xl:gap-4 '
        animate={{ x: `${slidePosition}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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