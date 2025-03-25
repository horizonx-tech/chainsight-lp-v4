import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../../constants/theme";
import Button from "../sub/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -50, 
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3
      }
    })
  };

  const menuItems = ["Resources", "Ecosystem", "Products", "Docs", "Contact Us"];

  return (
    <div className="absolute top-10 left-0 w-full flex justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-[85vw] flex items-center justify-between">
          <div className="flex gap-1">
            <div className="w-[22.82px] h-[13.48px] mt-[9.6px]">
              <img src="/logo.svg" alt="ChainSight"/>
            </div>
            <div style={{ color: theme.colors.text.primary }}>
              ChainSight
            </div>
          </div>

          {/* Desktop Navigation */}
          <div 
            className="hidden lg:flex text-[#FAFAFA] rounded-full" 
            style={{ 
              color: theme.colors.text.primary, 
              backgroundColor: theme.colors.background.secondary 
            }}
          >
            <div className="flex p-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`my-3 px-3 h-3 flex items-center justify-center ${
                    index < 4 ? "border-r-2 border-[#27272A]" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="primary" 
            size="lg" 
            className="hidden lg:flex gap-2 p-2 py-4 text-sm"
          >
            <MdOutlineArrowOutward size={20} className="mt-1"/> 
            Launch App
          </Button>

          {/* Mobile Menu Toggle */}
          <div 
            className="lg:hidden cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose size={30}/> : <RxHamburgerMenu size={30}/>}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="flex flex-col items-center justify-center w-full gap-5 mt-3 lg:hidden"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                  className={`my-3 px-3 h-3 flex items-center justify-center ${
                    index < 4 ? "border-r-2 border-[#27272A]" : ""
                  }`}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;