import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../../constants/theme";
import Button from "../sub/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { scrollToElement } from "../../utils/functionalities";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const menuItems = [
    { name: "Product", url: "/#product" },
    { name: "Blog", url: "/blog" },
    {
      name: "Ecosystem",
      url: "/soon",
    },
    { name: "Contact Us", url: "/#Contact_Us" },
    { name: "Docs", url: "https://docs.chainsight.network/" }
  ];

  return (
    <div className="relative top-7 left-0 w-full mb-20 sm:mb-0 flex justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-24 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30vw] h-40 bg-[#4A4A4A] blur-[100px] opacity-35 rounded-full"></div>
      </div>

      <div className="flex flex-col relative items-center justify-center w-full z-10">
        <div className="w-[85vw] flex items-center justify-between">
          <div className="flex">
            <a
              href="/"
              className="w-[124px] h-[20px]  cursor-pointer bg-[#000000]"
            >
              <img src="/logo.svg" alt="ChainSight" />
            </a>
          </div>
          <div className="hidden lg:flex flex-col items-center relative">
              <div
                className="bg-[#18181B] text-[#FAFAFA] rounded-full flex p-1.5 font-semibold text-xs font-sans"
                style={{ color: theme.colors.text.primary }}
              >
                {menuItems.map((item, index) => (
                  <div className="relative group" key={index}>
                    <a
                      href={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      aria-label={item.name}
                      className={`
                        px-4 py-1 min-w-[48px] min-h-[48px]
                        flex items-center justify-center relative rounded-full
                        group-hover:text-[#FFE000] text-xs font-semibold transition-colors
                        overflow-hidden
                        before:content-[''] before:absolute before:inset-0 before:rounded-full
                        before:bg-[#27272A] before:opacity-0 before:transition-opacity before:duration-700
                        group-hover:before:opacity-100
                        ${index < 4 ? "after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:border-r-2 after:border-[#27272A]" : ""}
                      `}
                    >
                      <span className="relative z-10">{item.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="hidden lg:flex items-center justify-center cursor-pointer gap-1 p-2 py-3 text-xs"
              onClick={()=>window.open("https://v1.chainsight.network/", "_blank")}
            >
              <MdOutlineArrowOutward size={20} className="mt-0.5" />
              Enter Portal
            </Button>
          <div className="lg:hidden cursor-pointer h-5 z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose size={24} className="text-white" /> : <RxHamburgerMenu size={24} />}
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
              {menuItems.map((item, index) => (
                <div className="relative w-full" key={index}>
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
                    className="w-full px-4 py-3 text-white font-medium text-sm hover:text-[#FFE000] transition-all cursor-pointer"
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
