import { useEffect, useRef} from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import Button from "../sub/Button";
import { scrollToElement } from "../../utils/functionalities";

const OracleInfo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentVideo = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentVideo) {
          currentVideo.play().catch(() => {});
        } else if (currentVideo) {
          currentVideo.pause();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  return (
    <div id="product" className='flex flex-col gap-5 my-10 md:my-15 items-center justify-center rounded-xl'>
      <div className='h-auto flex items-center justify-center w-full'>
        <div className='flex flex-col p-5 md:p-10 items-center gap-10 max-w-[90vw] md:max-w-[80vw] xl:max-w-screen-lg bg-[#09090B] rounded-xl relative'>

          <div className="absolute inset-0 w-full h-full">
            <img src="/gridLines.svg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 w-full h-full p-2">
            <img src="/gridLines1.svg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 w-full h-full">
            <img src="/greenEllipse.svg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className='flex flex-col items-start md:items-center justify-center gap-4 z-20'>
            <h2 className='text-[#FFE000] text-2xl md:text-4xl font-sans font-normal'>Intuitively Build & Deploy Oracles</h2>
            <p className='text-[#FAFAFA] text-xs max-w-[90%] md:max-w-[60%] text-left md:text-center font-extralight'>
              Fetch, index, insert logic & sync the data to any network. Deploy & monetize your oracles.
            </p>
            <button className='bg-[#FAFAFA] hover:scale-110 text-[#27272A] cursor-pointer flex items-center justify-center text-xs gap-1.5 h-6 p-4 rounded-lg transition-transform duration-200 active:scale-95' onClick={()=>window.open("https://v1.chainsight.network/", "_blank")}>
              Enter Portal<IoMdArrowRoundForward />
            </button>
          </div>

          <div className="relative w-full z-10">
            <video
              ref={videoRef}
              src="/demo.mp4"
              className="w-full "
              muted
              playsInline
              loop
              preload="metadata"
              controls
            >
            <track src="/demo.vtt" kind="captions" srcLang="en" label="english_captions"/>
            </video>
          </div>
        </div>
      </div>
      <div className='bg-[#09090B] w-[90%] md:w-[80%] xl:max-w-screen-lg rounded-xl h-auto flex flex-col lg:flex-row items-center justify-center p-6 gap-4 text-center lg:text-left'>
        <div className='flex flex-col gap-3 flex-1'>
          <div className='text-xl font-bold'>Building <span className='text-[#FFE000]'>a New Data Economy.</span> </div>
          <div className='text-xs text-[#C0C3CB] '>Build custom dashboards for free, deploy oracles from $99/month.</div>
        </div>
        <Button
          variant="tertiary"
          className='text-white bg-[#27272A] w-32 h-9 cursor-pointer rounded-lg flex items-center justify-center text-xs gap-1 z-50 '
          onClick={() => scrollToElement('#subscription')}
        >
          See Pricing <IoMdArrowRoundForward />
        </Button>
      </div>
    </div>
  );
};

export default OracleInfo;
