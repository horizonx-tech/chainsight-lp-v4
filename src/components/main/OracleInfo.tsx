
import { IoMdArrowRoundForward } from "react-icons/io";

const OracleInfo = () => {
  return (
    <div className='flex flex-col gap-5 my-10 md:my-15 items-center justify-center'>
        <div className=' h-auto flex items-center justify-center w-full'>
      <div className='flex flex-col p-5 md:p-10 items-center gap-10 w-[90%] md:w-[80%] bg-[#09090B] relative'>
      <div className="absolute inset-0 w-full h-full">
            <img src="/gridLines.svg" alt="" className="w-full h-full object-cover" />    
        </div>
        <div className="absolute inset-0 w-full h-full">
            <img src="/gridLines1.svg" alt="" className="w-full h-full object-cover" />  
        </div>
        <div className="absolute inset-0 w-full h-full">
            <img src="/greenEllipse.svg" alt="" className="w-full h-full object-cover" />  
        </div>
        <div className='flex flex-col items-start md:items-center justify-center gap-4 z-20'>
            <h2 className='text-[#FFE000] text-2xl md:text-4xl font-sans font-normal'>How to build & deploy oracles?</h2>
            <p className='text-[#FAFAFA] text-xs max-w-[90%] md:max-w-[60%] text-left md:text-center font-extralight'>You can do everything you need in a couple of minutes. You can do everything you need in a couple of minutes.</p>
            <button className='bg-[#FAFAFA] text-[#27272A] flex items-center justify-center text-xs gap-1.5 h-6 p-4 rounded-lg'>Launch Application <IoMdArrowRoundForward/>  </button>
        </div>
        <img src="/oracleInfo.svg" alt="Oracles" className='z-10' />
      </div>
    </div>
    <div className='bg-[#09090B] w-[90%] md:w-[80%] rounded-xl h-auto flex flex-col lg:flex-row items-center justify-center p-6 gap-4 text-center lg:text-left'>
    <div className='flex flex-col gap-3 flex-1'>
      <div className='text-xl font-bold'>Building <span className='text-[#FFE000]'>a New Data Economy.</span> </div>
      <div className='text-xs text-[#C0C3CB] '>Build custom dashboards for free, deploy oracles from $99/month.</div>
    </div>
    <button className='text-white bg-[#27272A] w-32 h-9 rounded-lg flex items-center justify-center text-xs gap-1'>
      See Pricing <IoMdArrowRoundForward/>
    </button>
  </div>
    </div>
  )
}

export default OracleInfo
