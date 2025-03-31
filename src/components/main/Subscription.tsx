import {useState} from 'react'
import {motion} from "framer-motion"
import SubscriptionCards from '../sub/SubscriptionCards';
const Subscription = () => {
  const [click, setClick] = useState(0);
  return (
    <div className='flex flex-col items-center gap-5 justify-center my-5 md:my-10 mt-15 px-4'>
      <div className='flex flex-col gap-2 items-center justify-center text-center'>
        <h2 className='text-2xl text-[#FAFAFA] font-semibold'>Portal Subscription Plans</h2>
        <p className='text-[#A1A1AA] text-xs font-extralight max-w-lg'>Add a concise value statement that addresses price sensitivity and showcases plan flexibility. Focus on transformation and results while keeping it under 2 lines. Align with your pricing table options.</p>
      </div>
      <div className="bg-[#212123] text-[#A1A1AA] flex gap-1 rounded-full p-1 text-xs relative">
      {["Monthly", "Annually"].map((item, index) => (
        <div
          key={index}
          className="relative cursor-pointer p-2 px-4 rounded-full"
          onClick={() => setClick(index)}
        >
          {click === index && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 w-full h-full bg-black rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item}</span>
        </div>
      ))}
    </div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-4xl'>
        <SubscriptionCards variant="primary" title='Free Plan' content="A short benefit statement that highlights the ideal user for this tier. " monthlySubscription={0} features={["One time credit trial","USD 0.60 per extra credit"]}/>
        <SubscriptionCards variant="secondary" title='Plus' content="Unlock premium features with some credits to start." monthlySubscription={99} features={["100,000 monthly credits","USD 0.40 per extra credit","Credit consumption report","1-to-1 Helpline support","5+ more exclusive features"]}/>
        <SubscriptionCards variant="primary" title='Premium' content="A short benefit statement that highlights the ideal user for this tier.  " monthlySubscription={399} features={["400,000 monthly credits","USD 0.20 per extra credit","Credit Consumption report","1-to-1 Helpline support","10+ more exclusive features","Exclusive invitation to all Chainsight events"]}/>
      </div>
      <div className='bg-[#09090B] border border-[#27272A] w-full max-w-4xl rounded-xl h-auto flex flex-col lg:flex-row items-center justify-center p-6 gap-4 text-center lg:text-left'>
        <div className='flex flex-col gap-3 flex-1'>
          <div className='text-md font-medium'>Customizable</div>
          <div className='text-xs text-[#C0C3CB] '>Get Chainsight Enterprise for your team members, speak with us.</div>
        </div>
        <button className='text-white bg-[#27272A] w-32 h-9 rounded-lg'>
          Go
        </button>
      </div>
    </div>
  )
}

export default Subscription
