import {useState} from 'react';
import {motion} from "framer-motion";
const Features = () => {
    const [click, setClick] = useState(0);
  return (
    <div>
    <div className='flex items-center justify-center'>
      <div className='bg-[#040507] flex items-center justify-center w-[80%] relative'>
        <div className="absolute inset-0 w-full h-full p-10">
            <img src="/databg.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className='flex flex-col gap-4 items-center justify-center w-[80%] relative z-50'>
        <h2 className='text-[#FAFAFA] text-xl md:text-2xl mt-5'>Everything You Need for Blockchain Data</h2>
        <div className="bg-[#09090B] text-[#FFFFFF] flex md:gap-2 rounded-full p-1 overflow-scroll md:overflow-hidden text-sm relative w-full">
          {[{name:"data indexing",image:"/dataIndexing.svg"}, {name:"Oracle deployment",image:"/oracleDeployment.svg"},{name:"API Access", image:"apiAcess.svg"},{name:"Analytics Dashboards",image:"/analyticsDashboard.svg"}].map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer flex justify-center px-1 py-2 w-full items-center min-w-[100px]  gap-2"
              onClick={() => setClick(index)}
            >
              {click === index && (
                    <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#212121] text-[#FFE000] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
              )}
                <img src={item.image} alt={item.name} className={` z-10 hidden md:flex  ${click === index ? "fill-[#FFE000]" : "fill-white"}`} />
                <span className={`relative z-10 text-xs flex ${click == index? "text-[#FFE000]":""}`}>{item.name}</span>
            </div>
          ))}
        </div>
        <div className='flex flex-col text-left gap-4'>
        <div className='flex gap-2'>
                <img src="/indexing.svg" alt="data indexing"/>
                <div className='mt-2'>Data Indexing</div>
            </div>
            <div className='text-[#FAFAFA] text-xs'>
            With single block finality and unrivalled scalability, Tendermint Consensus enables Kava to support the transaction needs of thousands of protocols and millions of users. With single block finality and unrivalled scalability, Tendermint Consensus enables Kava to support the transaction needs of thousands of protocols and millions of users,Tendermint Consensus enables Kava to support the transaction needs of thousands of protocols and millions of users.
            </div>
        </div>
        <img src="/ellipse.svg" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
