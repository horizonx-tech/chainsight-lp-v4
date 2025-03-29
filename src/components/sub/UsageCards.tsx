
import { MdArrowOutward } from "react-icons/md";
const UsageCards = () => {
  return (
    <div>
      <div className='flex flex-col justify-between items-center'>
        <div className='flex gap-2'><img src="/dataIndexing.svg" alt="" /> Building Oracles</div>
        <div className='flex flex-col gap-4'>
            <p className='text-[#FFFFFF]'>“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”</p>
            <div className='flex justify-between items-center'>
                <div>Read Case Study</div>
                <div><MdArrowOutward/></div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default UsageCards
