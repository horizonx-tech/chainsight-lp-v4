import { motion } from "framer-motion";
import UsageCards from '../sub/UsageCards';
import { useCarousel } from '../../hooks/useCarousel';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";

type CardVariant = "primary" | "secondary" | "tertiary" | "quartinary";

const Usage = () => {
  const cardVariants: CardVariant[] = ['primary', 'secondary', 'tertiary', 'quartinary'];
  const { containerRef, cardRef, slidePosition, handleBackward, handleForward, touchHandlers, totalShift } = useCarousel(cardVariants.length);

 
  return (
    <div className="w-full flex items-center justify-center mb-10">
      <div className="flex flex-col gap-4 items-start justify-center bg-[#09090B] rounded-xl max-w-[90vw] md:w-[80%] xl:max-w-screen-lg p-5">
        <h2 className="text-xl text-white">ChainSight's Use Cases</h2>
        <div className='flex justify-between w-full'>
          <div>

          </div>
          <div className={`hidden lg:flex gap-3 w-[25%] lg:w-[10%] mt-2`}>
            <div 
              className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition !== 0 ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => handleBackward()}
            >
              <IoArrowBackSharp size={14} />
            </div>
            <div 
              className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition > -totalShift ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => handleForward()}
            >
              <IoMdArrowRoundForward size={14} />
            </div>
          </div>
        </div>
        
        <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div 
        className='flex gap-4'
        animate={{ x: `${slidePosition}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onTouchStart={touchHandlers.onTouchStart}
        onTouchMove={touchHandlers.onTouchMove}
        onTouchEnd={touchHandlers.onTouchEnd}
      >
        {cardVariants.map((variant, index) => (
          <div key={index} ref={index === 0 ? cardRef : null} className="flex-0 w-full lg:w-[30%]">
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