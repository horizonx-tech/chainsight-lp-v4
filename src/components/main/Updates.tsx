import { useState, useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { handleBackward,handleForward } from '../../utils/functionalities';
import { motion } from "framer-motion";
const Updates = () => {
    const [slidePosition, setSlidePosition] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const updates=['update1.svg','update1.svg','update1.svg','update1.svg','update1.svg','update1.svg']
    const maxLength=updates.length-1;

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 640) {
            setVisibleCards(2);
          } else if (window.innerWidth < 1024) {
            setVisibleCards(3);
          }
          else if (window.innerWidth < 2000) {
            setVisibleCards(4);
          }
          else {
            setVisibleCards(5);
          }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  return (
    <div className="  flex items-center justify-center">
      <div className="bg-[#09090B] max-w-[90vw] md:max-w-[80vw] rounded-xl">
      <div className="flex flex-col items-center gap-4 w-full p-5">
        <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl text-[#FAFAFA]">Our Updates</h2>
        <div className='flex gap-3 w-[20%] md:w-[10%] mt-2'>
                    <div 
                      className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition >= 0 ? 'opacity-50' : 'opacity-100'}`}
                      onClick={()=>handleBackward({setSlidePosition, visibleCards})}
                    >
                      <IoArrowBackSharp size={14} />
                    </div>
                    <div 
                      className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition > -(updates.length * 5)  ? 'opacity-50' : 'opacity-100'}`}
                      onClick={()=>handleForward({setSlidePosition,maxLength,visibleCards})}
                    >
                      <IoMdArrowRoundForward size={14} />
                    </div>
            </div>
            </div>
            <div className="w-full overflow-hidden">
            <motion.div 
                className='flex gap-1 w-full'
                animate={{ x: `${slidePosition}%` }}
                transition={{ duration: 2 }}
                style={{ width: `${(updates.length / visibleCards) * 100}%` }}
            >
                {updates.map((update, index) => (
                <div key={index} className="gap-2">
                    <img src={`${update}`} alt="" className="w-3xl md:w-5xl md:h-60" />
                </div>
                ))}
            </motion.div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Updates
