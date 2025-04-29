import clsx from 'clsx';
const Highlights = () => {
  const features = [   
      {
        icon: "flexibility.svg",
        title: 'User Driven Composability',
        description: 'Build your oracle. Register data from any source. No coding necessary.',
        bgClass: 'bg-[#0E0E0E]',
        iconColor: '#6B7FF6'
      },
      {
        icon: "multichain.svg",
        title: 'Multichain Support',
        description: 'Bring any data onchain. Any network. EVM, SVM & non-EVMs.',
        bgClass: 'bg-[#121212]',
        iconColor: '#4ECDC4'
      },
      {
        icon: "analytics.svg",
        title: 'Real-Time Analytics ',
        description: 'Fetch, index, insert logic & sync the data to any network.',
        bgClass: 'bg-[#0C0C0C]',
        iconColor: '#FFD93D'
      },
      {
        icon: "security.svg",
        title: 'Verifiability & Security ',
        description: 'With DKG, Chain-Key cryptography & zkTLS.',
        bgClass: 'bg-[#1A1A1A]',
        iconColor: '#FF6B6B'
      },
  ];

  return (
      <div className="flex items-center justify-center px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-[90vw] md:max-w-[80vw] xl:max-w-screen-lg border-2 border-[#2E2E2E] my-10 md:my-20 rounded-2xl overflow-hidden">
              {features.map((feature, index) => {
                const isFirst = index === 0;
                const isLast = index === features.length - 1;
                  return (
                    <div 
                    key={feature.title}
                    className={clsx(
                      'relative w-full h-[350px] flex flex-col items-center justify-start py-4 px-4 text-center sm:text-left',
                      index % 2 === 0 ? 'bg-[#020202]' : 'bg-[#0F0F0F]',
                      isLast||'border-r-2 border-r-[#2E2E2E]',
                      {
                        'rounded-l-2xl sm:rounded-none': isFirst,
                        'rounded-r-2xl sm:rounded-none': isLast,
                      }
                    )}
                  >       
                          <div className="flex flex-col items-start w-full h-full">
                              <div className="flex-2/3 md:flex-3/5 flex items-end md:items-center md:justify-start w-full mb-6 md:mb-4">
                                  <img 
                                      src={feature.icon} 
                                      alt={feature.icon} 
                                      className="mt-4 max-w-full max-h-[300px] md:max-h-[200px] object-contain" 
                                  />
                              </div>
                              <div className="flex-1/3 md:flex-2/5  flex flex-col w-[90%] sm:items-start justify-start text-left sm:text-left gap-[10px]">
                                  <div className="text-[20px] text-left font-bold font-sans tracking-tighter text-white">
                                      {feature.title}
                                  </div>
                                  <div className="text-xs text-left font-sans font-semibold text-[#838383]">
                                      {feature.description}
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

export default Highlights;