import { TiTick } from "react-icons/ti"; 
import { PiWarningCircleLight } from "react-icons/pi";  

interface SubscriptionCardsProps {
    variant: string,
    title: string,
    content: string,
    monthlySubscription: number,
    features: string[],
    yearly:number
}

const SubscriptionCards = ({variant, title, content, monthlySubscription, features, yearly}: SubscriptionCardsProps) => {
   return (
     <div className={`relative w-[90vw] sm:w-[50vw] lg:w-[25vw] h-[32rem] border ${variant=="primary"?"border-[#27272A]":"border-white"} bg-[#09090B] rounded-lg overflow-hidden`}>
       <div className={`${variant=="secondary"?"flex":"hidden"} items-start absolute top-0 left-0 w-full h-24 z-10`}>
         <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[20vw] h-10 bg-[#c0ae3f] blur-[50px]  rounded-full`}></div>
       </div>
       <div className="flex flex-col items-start justify-center gap-3 max-w-[100%] p-7 z-50">
             <div className="flex flex-col items-start justify-start gap-2 h-20">
             <h2 className="text-[#FAFAFA] text-md font-semibold flex gap-2">
                {title} 
                <div className={`${variant=="secondary"?"flex":"hidden"}  items-center justify-center `}>
                    <span className="bg-[#FAFAFA] text-[#27272A] text-[10px] font-extralight rounded-xl p-1 px-1.5">Most popular</span>
                </div>
             </h2>
             <p className="text-[#A1A1AA] text-xs">{content}</p>
             </div>
             <h2 className="text-white text-3xl">${monthlySubscription}<span className="text-[#A1A1AA] text-xs">{yearly?"/month billed yearly":"/month"}</span></h2>
             <div className="w-full">
                    <button
                    className={`${
                        variant == "primary"
                        ? "bg-[#27272A] text-[#FAFAFA] hover:bg-[#3f3f46]"
                        : "bg-[#FAFAFA] text-[#27272A] hover:hover:bg-[#cecdcd]"
                    } text-xs w-full rounded-lg h-10 mb-3 active:scale-95`}
                    onClick={() => window.location.href = "https://v1.chainsight.network/pricing"}
                    >
                    Subscribe
                    </button>
                </div>

             <div className="flex flex-col gap-3 w-full">
                 <div className="text-[#FAFAFA] text-xs">What's included:</div>
                 <div className="flex flex-col gap-4">
                     {
                         features.map((feature,index)=>{
                             return(
                                 <div className="flex justify-between items-center text-xs w-full" key={index}>
                                     <div className="flex gap-3"><TiTick /> <span className="text-[#A1A1AA]">{feature}</span></div>
                                     <div className="text-[#A1A1AA]"><PiWarningCircleLight /></div>
                                 </div>
                             )
                         })
                     }
                 </div>
             </div>
       </div>
     </div>
   ) 
}

export default SubscriptionCards