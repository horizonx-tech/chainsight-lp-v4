import theme from "../../constants/theme";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import Button from "../sub/Button";
import { GoPlus } from "react-icons/go";
import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";
import animationData2 from "../../assets/animation2.json";

const Hero = () => {
  return (
    <section className="w-full relative lg:border-y-2 border-[#111827]"  style={{ width: '100vw', maxWidth: '100%' }}>
      <div className="absolute inset-0 pointer-events-none w-full" >
      <div className="hidden lg:flex absolute -top-1 left-[3.8vw] large-screen-left  -translate-y-3 text-white font-extralight text-xl md:text-2xl lg:text-3xl" >
        <GoPlus />
      </div>
      <div className="hidden lg:flex absolute -top-1 right-[3.8vw]  large-screen-right -translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>
      <div className="hidden lg:flex absolute -bottom-1 left-[3.8vw] large-screen-bottom-left translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>
      <div className="hidden lg:flex absolute -bottom-1 right-[3.8vw] large-screen-bottom-right translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>

      </div>
      <div className="flex flex-col min-h-screen items-center justify-center font-sans gap-10 md:gap-12 px-4 md:px-10 lg:px-12 mx-auto w-full">
        <div className="w-full flex sm:hidden items-center justify-center">
          <Lottie 
            animationData={animationData2} 
            loop 
            autoplay 
            className="w-full"
            style={{ transform: "scale(1)", transformOrigin: "center" }}

          />
        </div>
        <div className="flex flex-col items-start px-4 sm:px-0 sm:items-center justify-center text-center w-full gap-3 sm:gap-0 max-w-4xl pt-4 md:pt-7">
          <div 
            className="mb-1 text-base md:text-[20px]" 
            style={{color:theme.colors.text.secondary}}
          >
            The Permissionless Data Layer
          </div>
          <h2 
            className="text-3xl sm:text-5xl text-left sm:text-center md:text-5xl font-normal leading-tight md:leading-[1.3] inline-block mb-0 -mt-1 md:-mt-2 max-w-full" 
            style={{
              background: "linear-gradient(to right, #FFFFFF, #999999)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Bring any data on-chain
          </h2>
          <div 
            className="text-sm text-left md:text-xs mt-2 md:mt-3 max-w-xl sm:text-center" 
            style={{color:theme.colors.text.tertiary}}
          >
            Securely register data from any source, verify its integrity & deploy it to any network.
          </div>
          <div className="flex gap-3 md:gap-[15px] mt-4 md:mt-6 ">
          <a 
            href="https://docs.chainsight.network/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="secondary" 
              size="sm" 
              className="flex gap-2 text-xs md:text-sm text-[#FAFAFA] justify-center items-center"
            >
              View Docs
              <MdArrowOutward size={15} />
            </Button>
          </a>
          <a 
            href="https://v1.chainsight.network/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="tertiary" 
              size="sm" 
              className="flex gap-2 text-xs md:text-sm text-[#FAFAFA]  justify-center items-center "
            >
              Oracle Builder
              <IoMdArrowRoundForward size={15} className=""/> 
            </Button>
            </a>
          </div>
        </div>
        <div className="hidden max-w-[80vw] sm:flex w-full h-auto md:h-[215px] mt-4 md:mt-[10px] px-0">
          <Lottie 
            animationData={animationData} 
            loop 
            autoplay 
            className="w-full h-full"
            style={{ transform: "scale(1.3)", transformOrigin: "center" }}

          />
        </div>
      </div>
    </section>
  );
};

export default Hero;