import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../../constants/theme";
import Button from "../sub/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { scrollToElement, downloadAllFiles } from "../../utils/functionalities";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const resourcesRef = useRef<HTMLDivElement | null>(null);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const menuItems = [
    { name: "Resources", url: "/resources" },
    { name: "Ecosystem", url: "/ecosystem" },
    { name: "Product", url: "#product" },
    { name: "Docs", url: "https://docs.chainsight.network/" },
    { name: "Contact Us", url: "#Contact_Us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resourcesRef.current &&
        event.target instanceof Node &&
        !resourcesRef.current.contains(event.target)
      ) {
        setShowResources(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="hidden lg:flex flex-col items-center relative" ref={resourcesRef}>
            <div
              className="bg-[#18181B] text-[#FAFAFA] rounded-full flex p-1.5 font-semibold text-xs font-sans"
              style={{ color: theme.colors.text.primary }}
            >
              {menuItems.map((item, index) => {
                const isResources = item.name === "Resources";
                return (
                  <div className="relative group" key={index}>
                    <div className="transition-all ease-in-out duration-700 group-hover:bg-[#27272A] absolute inset-0 rounded-full mx-1 p-4"></div>
                    <div
                      onClick={() => {
                        if (isResources) {
                          setShowResources((prev) => !prev);
                        } else {
                          setShowResources(false);
                          if (item.url.startsWith("http")) {
                            window.open(item.url, "_blank");
                          } else if (item.url.startsWith("#")) {
                            scrollToElement(item.url);
                          } else {
                            window.location.href = item.url;
                          }
                        }
                      }}
                      className={`my-3 px-3 h-2 flex items-center justify-center hover:cursor-pointer relative group-hover:text-[#FFE000] ${
                        index < 4
                          ? "after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-2 after:border-r-2 after:border-[#27272A]"
                          : ""
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <AnimatePresence>
              {showResources && (
                <motion.div
                  className="absolute top-full mt-1 bg-[#18181B] text-white border-2 border-[#222222] rounded-lg shadow-lg w-full py-1 px-1 z-50"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                >
                  <div className="py-1.5 text-xs flex items-center gap-2 font-sans">
                    <img src="/download.svg" alt="" /> 20240724_ChainSight_Rating_Stablecoins
                  </div>
                  <div className="py-1.5 text-xs flex items-center gap-2 font-sans">
                    <img src="/download.svg" alt="" /> 20250316_ChainSight_Rating_Stablecoins
                  </div>
                  <div className="py-1.5 text-xs flex items-center gap-2 font-sans">
                    <img src="/download.svg" alt="" /> Chainsight
                  </div>
                  <div className="py-1.5 text-xs flex items-center gap-2 font-sans">
                    <img src="/download.svg" alt="" /> 20240906_ChainSight_SharpeRatio
                  </div>
                  <div className="py-1.5 text-xs flex items-center gap-2 font-sans">
                    <img src="/download.svg" alt="" /> 20240502_ChainSight_Rating_Stablecoin
                  </div>
                  <div className="py-1.5 text-xs flex items-center gap-2 font-sans">
                    <img src="/download.svg" alt="" /> 20230714_ChainSight
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-3 border-t border-[#27272A] p-2 cursor-pointer"  onClick={downloadAllFiles}>
                    <img src="/downloadAll.svg" alt="" /> Download All
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="https://v1.chainsight.network/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="lg"
              className="hidden lg:flex items-center justify-center gap-1 p-2 py-3 text-xs"
            >
              <MdOutlineArrowOutward size={20} className="mt-0.5" />
              Launch App
            </Button>
          </a>
          <div className="lg:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose size={24} className="text-white" /> : <RxHamburgerMenu size={30} />}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={menuVariants}
        className="absolute top-full left-1/2 -translate-x-1/2 w-full bg-[#09090B] flex flex-col items-start p-5 justify-center space-y-1 mt-4 z-40"
      >
        {menuItems.map((item, index) => {
          const isResources = item.name === "Resources";
          return (
            <div className="relative w-full" key={index}>
              <div
                onClick={() => {
                  if (isResources) {
                    setShowResources((prev) => !prev);
                  } else {
                    setShowResources(false);
                    if (item.url.startsWith("http")) {
                      window.open(item.url, "_blank");
                    } else if (item.url.startsWith("#")) {
                      scrollToElement(item.url);
                    } else {
                      window.location.href = item.url;
                    }
                    setIsOpen(false);
                  }
                }}
                className="w-full px-4 py-3 text-white font-medium text-sm hover:text-[#FFE000] transition-all cursor-pointer"
              >
                {item.name}
              </div>
              {isResources && showResources && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="bg-[#18181B] border border-[#27272A] rounded-md mt-1 mb-3 mx-2 p-3 text-white text-xs flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 font-sans">
                    <img src="/download.svg" alt="" className="w-4 h-4" />
                    20230714_ChainSight
                  </div>
                  <div className="flex items-center gap-2 font-sans pt-2 mt-2">
                    <img src="/download.svg" alt="" className="w-4 h-4" />
                    20250316_ChainSight_Rating_Stablecoins
                  </div>
                  <div className="flex items-center gap-2 font-sans pt-2 mt-2">
                    <img src="/download.svg" alt="" className="w-4 h-4" />
                    20250316_ChainSight_Rating_Stablecoins
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-3 border-t border-[#27272A] p-2 cursor-pointer" onClick={downloadAllFiles}>
                    <img src="/downloadAll.svg" alt="" /> Download All
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>
    )}
  </AnimatePresence>
</div>


    </div>
  );
};

export default Navbar;
