
import { MdArrowOutward } from "react-icons/md";

const UsageCards = ({variant}:{variant:'primary'|'secondary'|'tertiary'|'quartinary'}) => {
  const variants={
    primary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#3a1b0c] via-[30%] to-[#FF712A] to-[50%]',
    secondary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#0a1712] via-[30%] to-[#0f4136] to-[50%]',
    tertiary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#0f0a0a] via-[30%] to-[#250F1B] to-[50%]',
    quartinary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#0A0B10] via-[30%] to-[#15192A] to-[50%]'
  }
  return (
    <div className={`h-80 relative w-70 ${variants[variant]} rounded-xl`}>
      <div className="absolute w-[75%]"> <img src="/ellipses.svg" alt="" /> </div>
      <div className='flex flex-col justify-between h-full  relative p-5'>
        <div className='flex gap-2'><img src="/indexing.svg" alt="" /> <span className="mt-2 text-xl w-[60%]">Building Oracles</span></div>
        <div className='flex flex-col gap-4'>
            <p className='text-[#FFFFFF] text-sm md:text-md'>“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”</p>
            <div className='flex justify-between items-center'>
                <div className="text-xs">Read Case Study</div>
                <div><MdArrowOutward/></div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default UsageCards
