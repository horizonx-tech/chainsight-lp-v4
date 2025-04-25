import {useState} from 'react'
import {motion} from "framer-motion"
import SubscriptionCards from '../sub/SubscriptionCards';
import Button from '../sub/Button';
import theme from '../../constants/theme';
const Subscription = () => {
  const [click, setClick] = useState(0);
  return (
    <div className='flex flex-col items-center gap-5 justify-center my-5 md:my-10 mt-15 px-4' id="subscription">
      <div className='flex flex-col gap-2 items-center justify-center text-center'>
        <h2 className='text-2xl text-[#FAFAFA] font-semibold' style={{color: theme.colors.text.secondary}}>Portal Subscription Plans</h2>
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
            click==index ? "text-white " : "text-[#A1A1AA]"
          }`}
        >
          {item}
        </span>
      </div>
    );
  })}
</motion.div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-4xl'>
        <SubscriptionCards variant="primary" title='Basic' content={`Always‑on essentials for small projects.`} monthlySubscription={click?89:99} features={["$99 / month (Annually: $89)","85,000 monthly credits","Create & monitor indexers from the UI","Deploy your relayer from the UI"]} yearly={click}/>
        <SubscriptionCards variant="secondary" title='Plus' content="Scale your pipelines with higher limits and zkTLS security." monthlySubscription={click?449:499} features={["$499 / month (Annually: $449)","600,000 monthly credits — Get credits at a better value than the Basic plan","Create several indexers with zkTLS proofs","Create your advanced indexers","Deploy your relayer with deviation threshold settings"]} yearly={click}/>
        <SubscriptionCards variant="primary" title='Premium' content="Power for high-frequency, multi-oracle workflows." monthlySubscription={click?899:999} features={["$999 / month (Annually: $899)","1.65 million monthly credits — Get credits at a better value than the Pro plan","Create 4 base indexers + 4 advanced indexers","Deploy several relayers with faster frequency"]} yearly={click}/>
      
      </div>
      <div className='bg-[#09090B] border border-[#27272A] w-[90vw] sm:w-[50vw] lg:w-full max-w-4xl rounded-xl h-auto flex flex-col lg:flex-row items-start lg:items-center justify-center p-6 gap-4 text-center lg:text-left'>
        <div className='flex flex-col items-start gap-3 flex-1'>
          <div className='text-md font-medium'>Customizable</div>
          <div className='text-xs text-[#C0C3CB] text-left md:text-center '>Get Chainsight Enterprise for your team members, speak with us.</div>
        </div>
        <Button variant='tertiary' className='flex items-center cursor-pointer hover:bg-green justify-center text-white bg-[#27272A] w-32 z-50 h-9 rounded-lg '
        onClick={() => {
          const contactSection = document.querySelector("#Contact_Us");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
          window.dispatchEvent(new CustomEvent("switch-tab", { detail: "customization" }));
        }}
          >
          Go
        </Button>
      </div>
    </div>
  )
}

export default Subscription
