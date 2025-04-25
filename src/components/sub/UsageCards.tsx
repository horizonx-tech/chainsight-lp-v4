
const UsageCards = ({variant}:{variant:'primary'|'secondary'|'tertiary'|'quartinary'}) => {
  const variants={
    primary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#3D1E06] via-[30%] to-[#7F2C01] to-[50%]',
    secondary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#0a1712] via-[30%] to-[#0f4136] to-[50%]',
    tertiary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#0f0a0a] via-[30%] to-[#250F1B] to-[50%]',
    quartinary:'bg-linear-to-b from-[#050505] from-[15%]  via-[#0A0B10] via-[30%] to-[#15192A] to-[50%]'
  }
  const Usage={
    primary:{
      icon:"signing.svg",
      title:"Data Signing",
      description:"Securely sign and publish any data source on-chain using Chain-key cryptography, enabling verifiable feeds like VRF, TWAP, Volatility indices & more."
    },
    secondary:{
      icon:"pipelines.svg",
      title:"Modular Data Pipelines",
      description:"Build flexible pipelines by combining community-driven oracles, indexer & tools like the MultiOracle Aggregator."
    },
    tertiary:{
      icon:"protocol.svg",
      title:"Protocol-Owned Oracles",
      description:"Take control of your data with protocol-owned oracles, deployable to any chain & easily manage data flows through Portal v1."
    },
    quartinary:{
      icon:"indices.svg",
      title:"On-Chain Analytics & Indices",
      description:"Leverage powerful tools like Index Kit, Volatility Kit, and Stablecoin Rating Feed to create fully on-chain analytics &  indices via Portal v1."
    }
  }
  return (
    <div className={`h-80 relative w-65 ${variants[variant]} rounded-xl`}>
      <div className="absolute w-[75%]"> <img src="/ellipses.svg" alt="" /> </div>
      <div className='flex flex-col justify-between h-full  relative p-5'>
        <div className=' flex gap-2 items-center justify-center'><img src={Usage[variant].icon} className="w-5 h-5" alt="" /> <span className="text-lg w-[80%]">{Usage[variant].title}</span></div>
        <div className=' h-[120px] flex flex-col justify-start gap-4'>
            <p className='text-[#FFFFFF] text-sm md:text-md'>{Usage[variant].description}</p>
        </div>

      </div>
    </div>
  )
}

export default UsageCards
