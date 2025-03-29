import {useState} from 'react';
import {motion} from "framer-motion";
const Usage = () => {
    const [click, setClick] = useState(0);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-start justify-center bg-[#09090B] w-[80%] p-5">
        <h2 className="text-xl text-[#FAFAFA]">Who can use ChainSight?</h2>
        <div className='w-[60%]'>
        <div className=" text-[#FFFFFF] flex gap-1 rounded-full p-1 text-sm relative w-full">
          {[{name:"Builders & Developers",image:"/dataIndexing.svg"}, {name:"Traders",image:"/oracleDeployment.svg"},{name:"Enterprises", image:"apiAcess.svg"}].map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer flex justify-center px-1 py-2 w-full items-center  gap-2"
              onClick={() => setClick(index)}
            >
              {click === index && (
                    <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#212121] text-[#FFE000] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
              )}
                <img src={item.image} alt={item.name} className={`z-10 ${click === index ? "fill-[#FFE000]" : "fill-white"}`} />
                <span className={`relative z-10 flex ${click == index? "text-[#FFE000]":""}`}>{item.name}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Usage
