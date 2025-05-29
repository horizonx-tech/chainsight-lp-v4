import { useState, useEffect } from 'react';
import { fetchProtocolsTVL } from '../../utils/tvlService';

const TVS = () => {
  const [tvl, setTvl] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTVL = async () => {
      try {
        const total = await fetchProtocolsTVL();
        setTvl(total);
      } catch (error) {
        console.error('Failed to fetch TVL:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTVL();
    // Refresh every 5 minutes
    const interval = setInterval(loadTVL, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTVL = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className='flex items-center justify-center overflow-hidden'>
      <div className="relative h-15 bg-[#080808] w-[100%] md:w-[100%] xl:max-w-screen-lg flex items-center justify-center rounded-sm overflow-hidden text-[#FAFAFA] text-md font-semibold md:text-md mt-2 p-4">
        {/* Yellow Blur */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] h-[15px] md:h-[20px] blur-2xl bg-[#FFE000] rounded-full filter opacity-80 pointer-events-none" />
        {/* Text content */}
        <div className="z-10 flex w-full  justify-between items-center text-center">
          <div className="text-[12px] font-medium flex-col text-left gap-2">
            Protected by <img src="/logo.svg" alt="ChainSight" width={100} height={100} className="mt-1"/>
          </div>
          <p>
            {loading ? (
              <span className="opacity-50">Loading...</span>
            ) : (
              formatTVL(tvl)
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TVS;