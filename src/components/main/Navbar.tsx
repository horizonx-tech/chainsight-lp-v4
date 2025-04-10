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

  const menuItems = [
    { name: "Resources", url: "/resources" },
    { name: "Ecosystem", url: "/ecosystem" },
    { name: "Product", url: "#product" },
    { name: "Docs", url: "https://docs.chainsight.network/" },
    { name: "Contact Us", url: "#Contact_Us" },
  ];
  
  const scrollToElement = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

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
          <div 
            className="hidden lg:flex bg-[#18181B] text-[#FAFAFA] rounded-full" 
            style={{ color: theme.colors.text.primary }}
          >
            <div className="flex p-1.5 font-semibold text-xs font-sans ">
            {menuItems.map((item, index) => (
              <div className="relative group" key={index}>
                <div key={index} className="transition-all ease-in-out duration-700 group-hover:bg-[#27272A] absolute inset-0 rounded-full mx-1 p-4"></div>
              <div
                onClick={() => {
                  if (item.url.startsWith("http")) {
                    window.open(item.url, "_blank");
                  } else if (item.url.startsWith("#")) {
                    scrollToElement(item.url);
                  } else {
                    window.location.href = item.url;
                  }
                  setIsOpen(false);
                }}
                className={`my-3 px-3 h-2 flex items-center justify-center hover:cursor-pointer relative group-hover:text-[#FFE000] ${
                  index < 4
                    ? "after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-2 after:border-r-2 after:border-[#27272A]"
                    : ""
                }`
              }
              >
                {item.name}
              </div>
              </div>
              
            ))}
            </div>
          </div>

          <Button variant="primary" size="lg" className="hidden lg:flex items-center justify-center gap-1 p-2 py-3 text-xs">
            <MdOutlineArrowOutward size={20} className="mt-0.5" />
            Launch App
          </Button>
          <div className="lg:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <></> : <RxHamburgerMenu size={30} />}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-screen/2 bg-[#09090B] flex flex-col items-start p-5 justify-center space-y-5 z-40"
          >
            <div className="absolute top-5 right-5 z-50 cursor-pointer" onClick={() => setIsOpen(false)}>
              <AiOutlineClose size={20} className="text-white" />
            </div>
            {menuItems.map((item, index) => (
              <div className="relative group" key={index}>
                <div key={index} className="transition-all ease-in-out duration-700 group-hover:bg-[#27272A] absolute inset-0 rounded-full mx-1 p-4"></div>
              <div
                onClick={() => {
                  if (item.url.startsWith("http")) {
                    window.open(item.url, "_blank");
                  } else if (item.url.startsWith("#")) {
                    scrollToElement(item.url);
                  } else {
                    window.location.href = item.url;
                  }
                  setIsOpen(false);
                }}
                className={`my-3 px-3 h-2 flex items-center justify-center hover:cursor-pointer relative group-hover:text-[#FFE000] `
              }
              >
                {item.name}
              </div>
              </div>
              
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
