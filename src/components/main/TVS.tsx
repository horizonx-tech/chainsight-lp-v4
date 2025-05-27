import { financialMetrics } from '../../constants/financialData';

const TVS = () => {
  return (
    <div className='flex items-center justify-center overflow-hidden'>
        <div className="relative h-80 w-[90%] md:w-[80%] xl:max-w-screen-lg flex items-center justify-center rounded-2xl overflow-hidden text-[#FAFAFA] bg-[#000000] font-semibold text-3xl md:text-6xl mt-10">
            {/* Yellow Blur */}
            <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[200px] md:w-[600px] h-[80px] md:h-[120px] bg-[#FFE000] rounded-full filter blur-3xl opacity-80 pointer-events-none" />

            {/* Green Blur */}
            <div className="absolute bottom-0 left-0 w-[120px] md:w-[180px] h-[100px] md:h-[150px] bg-[#10B981] rounded-full filter blur-3xl opacity-80 pointer-events-none" />

            {/* Lime Blur */}
            <div className="absolute top-0 right-0 w-[100px] md:w-[200px] h-[120px] md:h-[180px] bg-[#A3E635] rounded-full filter blur-3xl opacity-80 pointer-events-none" />

            {/* Text content */}
            <div className="z-10 text-center">
                <p className="text-sm flex items-center gap-2 justify-center font-light mb-4">Protected by <img src="/logo.svg" alt="ChainSight" className="mt-1"/></p>
                <p className="tracking-wide">{financialMetrics.tvl} USD</p>
            </div>
        </div>
    </div>
  )
}

export default TVS
