import { TiTick } from "react-icons/ti"; 
import { PiWarningCircleLight } from "react-icons/pi";  

interface SubscriptionCardsProps {
    variant: string,
    title: string,
    content: string,
    monthlySubscription: number,
    features: string[]
}

const SubscriptionCards = ({variant, title, content, monthlySubscription, features}: SubscriptionCardsProps) => {
   return (
     <div className={`relative w-[16rem] sm:w-[20rem] h-[30rem] border ${variant=="primary"?"border-[#27272A]":"border-white"} bg-[#09090B] rounded-lg overflow-hidden`}>
       <div className={`${variant=="secondary"?"flex":"hidden"} items-start absolute top-0 left-0 w-full h-24 z-10`}>
         <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[20vw] h-10 bg-[#c0ae3f] blur-[50px]  rounded-full`}></div>
       </div>
       <div className="flex flex-col items-start justify-center gap-3 max-w-[100%] p-7 z-50">
             <h2 className="text-[#FAFAFA] text-md font-semibold flex gap-2">
                {title} 
                <div className={`${variant=="secondary"?"flex":"hidden"}  items-center justify-center mb-3`}>
                    <span className="bg-[#FAFAFA] text-[#27272A] text-[10px] font-extralight rounded-xl p-1 px-1.5">Most popular</span>
                </div>
             </h2>
             <p className="text-[#A1A1AA] text-xs">{content}</p>
             <h2 className="text-white text-3xl">${monthlySubscription}<span className="text-[#A1A1AA] text-xs">/month</span></h2>
             <button className={`${variant=="primary"?"bg-[#27272A] text-[#FAFAFA]":"bg-[#FAFAFA] text-[#27272A]"} text-xs w-full rounded-lg h-10 mb-3`}>Subscribe</button>
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