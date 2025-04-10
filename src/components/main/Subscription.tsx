import {useState} from 'react'
import {motion} from "framer-motion"
import SubscriptionCards from '../sub/SubscriptionCards';
import Button from '../sub/Button';
const Subscription = () => {
  const [click, setClick] = useState(0);
  console.log("click",click)
  return (
    <div className='flex flex-col items-center gap-5 justify-center my-5 md:my-10 mt-15 px-4'>
      <div className='flex flex-col gap-2 items-center justify-center text-center'>
        <h2 className='text-2xl text-[#FAFAFA] font-semibold'>Portal Subscription Plans</h2>
        <p className='text-[#A1A1AA] text-xs font-extralight max-w-lg'>Build unlimited data pipelines, only pay for what you need with flexibility & efficiency.</p>
      </div>
      <motion.div
        className="bg-[#212123] text-[#A1A1AA] flex gap-1 rounded-full p-1 text-xs relative w-fit mx-auto"
        layout
        initial={false}
      >
      {["Monthly", "Annually"].map((item, index) => {
      return (
      <div
        key={index}
        className="relative cursor-pointer px-4 py-2 rounded-full"
        onClick={() => setClick(index)}
      >
        {(click==index) ? (
          <motion.div
            layoutId="activeTab2"
            layout
            className="absolute inset-0 bg-black rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        ):<></>}
        <span
          className={`relative z-10 transition-colors duration-200 ${
            click==index ? "text-white font-semibold " : "text-[#A1A1AA]"
          }`}
        >
          {item}
        </span>
      </div>
    );
  })}
</motion.div>


      <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-4xl'>
        <SubscriptionCards variant="primary" title='Basic' content={`Always free, limited functionalities.`} monthlySubscription={0} features={["$0 / month","No monthly credits included","Dashboard features access"]} yearly={click}/>
        <SubscriptionCards variant="secondary" title='Plus' content="Unlock advanced features with extra credits." monthlySubscription={99} features={["$99 / month (Annually: $89)","85,000 monthly credits","Index new data from UI","Make oracles from UI"]} yearly={click}/>
        <SubscriptionCards variant="primary" title='Premium' content="Transform your multi-oracle workflow with enough power." monthlySubscription={999} features={["$999 / month (Annually: $899)","1.65 million monthly credits","Everything in Plus"]} yearly={click}/>
      </div>
      <div className='bg-[#09090B] border border-[#27272A] w-[90vw] sm:w-[50vw] lg:w-full max-w-4xl rounded-xl h-auto flex flex-col lg:flex-row items-start lg:items-center justify-center p-6 gap-4 text-center lg:text-left'>
        <div className='flex flex-col items-start gap-3 flex-1'>
          <div className='text-md font-medium'>Customizable</div>
          <div className='text-xs text-[#C0C3CB] text-left md:text-center '>Get Chainsight Enterprise for your team members, speak with us.</div>
        </div>
        <Button variant='tertiary' className='flex items-center justify-center text-white bg-[#27272A] w-32 h-9 rounded-lg '>
          Go
        </Button>
      </div>
    </div>
  )
}

export default Subscription
