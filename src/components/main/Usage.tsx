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
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const userTypes = [
    {name: "Developers", image: (
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 13L21 7L15 1M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )},
    {name: "Traders", image: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L1 19H19M5 10V15H17V6L12 11L8 7L5 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )},
    {name: "Enterprises", image: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 21H19M11.5619 3.26592C11.6051 3.18753 11.6685 3.12216 11.7456 3.07663C11.8226 3.0311 11.9104 3.00708 11.9999 3.00708C12.0894 3.00708 12.1773 3.0311 12.2543 3.07663C12.3314 3.12216 12.3948 3.18753 12.4379 3.26592L15.3899 8.86992C15.4603 8.99969 15.5586 9.11225 15.6776 9.19954C15.7967 9.28683 15.9336 9.34668 16.0785 9.37478C16.2235 9.40289 16.3728 9.39856 16.5159 9.3621C16.6589 9.32564 16.7921 9.25797 16.9059 9.16392L21.1829 5.49992C21.265 5.43315 21.3662 5.39414 21.4719 5.38853C21.5776 5.38291 21.6823 5.41097 21.771 5.46867C21.8598 5.52637 21.9279 5.61073 21.9656 5.70961C22.0033 5.8085 22.0087 5.9168 21.9809 6.01892L19.1469 16.2649C19.0891 16.4746 18.9645 16.6597 18.7919 16.7921C18.6194 16.9246 18.4084 16.9972 18.1909 16.9989H5.80994C5.59227 16.9974 5.38105 16.9249 5.20833 16.7924C5.03561 16.66 4.91083 16.4748 4.85294 16.2649L2.01994 6.01992C1.99219 5.9178 1.99756 5.8095 2.03528 5.71061C2.073 5.61173 2.14112 5.52737 2.22984 5.46967C2.31855 5.41197 2.42329 5.38391 2.52898 5.38953C2.63466 5.39514 2.73583 5.43415 2.81794 5.50092L7.09394 9.16492C7.20773 9.25897 7.34094 9.32664 7.484 9.3631C7.62705 9.39956 7.77641 9.40389 7.92134 9.37578C8.06626 9.34768 8.20317 9.28783 8.32223 9.20054C8.44129 9.11325 8.53954 9.00069 8.60994 8.87092L11.5619 3.26592Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )}
  ];
  
  const cardVariants: CardVariant[] = ['primary', 'secondary', 'tertiary', 'quartinary'];
  const maxLength = cardVariants.length - 1;
    /** 🔥 Handle Touch Gestures */
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStartX(e.touches[0].clientX);
    };
  
    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEndX(e.touches[0].clientX);
    };
  
    const handleTouchEnd = () => {
      const swipeThreshold = 50; // Minimum distance to register a swipe
  
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe Left (Next Slide)
        handleForward({ setSlidePosition, maxLength, visibleCards });
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe Right (Previous Slide)
        handleBackward({ setSlidePosition, visibleCards });
      }
    };
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
      <div className="flex flex-col gap-4 items-start justify-center bg-[#09090B] rounded-xl max-w-[90vw] md:w-[80%] p-5">
        <h2 className="text-xl text-white">Who can use ChainSight?</h2>
        <div className='flex justify-between w-full'>
          <div  style={{scrollbarWidth: "none" }} className="text-[#FFFFFF] bg-[#121212] flex gap-1 rounded-full p-1 text-sm relative w-full md:w-[50%] overflow-x-scroll overflow-y-hidden md:overflow-hidden">
            {userTypes.map((item, index) => (
              <div
                key={index}
                className="relative cursor-pointer flex  justify-center px-1 min-w-[150px] md:min-w-[100px] py-2 md:w-full items-center gap-2"
                onClick={() => setClick(index)}
              >
                {click === index && (
                  <motion.div
                    layoutId="activeTab4"
                    className="absolute inset-0 bg-[#212121] text-[#FFE000] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 flex gap-2 items-center justify-center ${click === index ? "text-[#FFE000]" : ""}`}>
                <span className='z-10 hidden md:flex transition-all duration-300'>{item.image}</span>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <div className='hidden md:flex gap-3 w-[25%] md:w-[10%] mt-2'>
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
        transition={{ duration: 0.5, ease: "easeInOut" }}
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