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
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.3 },
    }),
  };

  const menuItems = ["Resources", "Ecosystem", "Product", "Docs", "Blogs", "Contact Us"];

  return (
    <div className="relative top-7 left-0 w-full mb-20 sm:mb-0 flex justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-24 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30vw] h-40 bg-[#4A4A4A] blur-[100px] opacity-35 rounded-full"></div>
      </div>

      <div className="flex flex-col relative items-center justify-center w-full z-10">
        <div className="w-[85vw] flex items-center justify-between">
          <div className="flex">
            <div className="w-[122px] h-[25px]">
              <img src="/logo.svg" alt="ChainSight" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div 
            className="hidden lg:flex bg-[#18181B] text-[#FAFAFA] rounded-full" 
            style={{ color: theme.colors.text.primary }}
          >
            <div className="flex p-1.5 font-semibold text-xs font-sans ">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`my-3 px-3 h-2 flex items-center justify-center hover:text-[#FFE000] hover:scale-110 hover:cursor-pointer ${
                    index < 5 ? "border-r-2 border-[#27272A]" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Button variant="primary" size="lg" className="hidden lg:flex items-center justify-center gap-1 p-2 py-3 text-xs">
            <MdOutlineArrowOutward size={20} className="mt-0.5" />
            Launch App
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <></> : <RxHamburgerMenu size={30} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (Absolute Positioned) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center space-y-5 z-40"
          >
            {/* Close Button (Separate, Always on Top) */}
            <div className="absolute top-5 right-5 z-50 cursor-pointer" onClick={() => setIsOpen(false)}>
              <AiOutlineClose size={35} className="text-white" />
            </div>

            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                className="text-white text-lg"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
