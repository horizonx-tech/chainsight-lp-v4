import theme from "../../constants/theme";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import Button from "../sub/Button";
import { GoPlus } from "react-icons/go";

const Hero = () => {
  return (
    <section className="w-full relative lg:border-y-2 border-[#111827]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:flex absolute -top-1 left-[3.4%] xl:left-[4.2%] -translate-y-3 text-white font-extralight text-xl md:text-2xl lg:text-3xl"><GoPlus/></div>
        <div className="hidden lg:flex absolute -top-1 right-[3.4%] xl:right-[4.2%] -translate-y-3 text-white text-xl md:text-2xl lg:text-3xl"><GoPlus/></div>
        <div className="hidden lg:flex absolute -bottom-1 left-[3.4%] xl:left-[4.2%] translate-y-3 text-white text-xl md:text-2xl lg:text-3xl"><GoPlus/></div>
        <div className="hidden lg:flex absolute -bottom-1 right-[3.4%] xl:right-[4.2%] translate-y-3 text-white text-xl md:text-2xl lg:text-3xl"><GoPlus/></div>
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center font-sans gap-10 md:gap-12 px-4 md:px-10 lg:px-12">
        <div className="w-full flex sm:hidden items-center justify-center">
          <img src="/animation2.svg" alt="animation" className="w-full"/>
        </div>
        <div className="flex flex-col items-start px-4 sm:px-0 sm:items-center justify-center text-center w-full gap-3 sm:gap-0 max-w-4xl pt-4 md:pt-7">
          <div 
            className="mb-1 text-base md:text-[20px]" 
            style={{color:theme.colors.text.secondary}}
          >
            The Trustless Data Layer
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
          <div className="flex gap-3 md:gap-[15px] mt-4 md:mt-6">
            <Button 
              variant="secondary" 
              size="sm" 
              className="flex gap-2 text-xs md:text-sm text-[#FAFAFA]"
            >
              View Docs
              <MdArrowOutward size={15} className="mt-0.5 md:mt-1"/> 
            </Button>
            <Button 
              variant="tertiary" 
              size="sm" 
              className="flex gap-2 text-xs md:text-sm text-[#FAFAFA]"
            >
              Build Oracle
              <IoMdArrowRoundForward size={15} className="mt-1 md:mt-1.5"/> 
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex w-full max-w-[1178px] h-auto md:h-[215px] mt-4 md:mt-[10px] px-4 md:px-0">
          <img 
            src="/animation.svg" 
            alt="Animation" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;