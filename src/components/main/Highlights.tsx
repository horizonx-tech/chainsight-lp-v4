const Highlights = () => {
  const features = [
      {
        icon: "security.svg",
        title: 'Security',
        description: '+300 Million USD gets lost every month on Web 3.0, we can help prevent that.',
        bgClass: 'bg-[#1A1A1A]',
        iconColor: '#FF6B6B'
      },
      {
        icon: "flexibility.svg",
        title: 'User-Driven Flexibility',
        description: 'Things take months, even a year to get completed. But with ChainSight, you can build your oracle in minutes.',
        bgClass: 'bg-[#0E0E0E]',
        iconColor: '#6B7FF6'
      },
      {
        icon: "multichain.svg",
        title: 'Multichain Support',
        description: 'Chains can be quite limiting if they aren\'t connected. We do that.',
        bgClass: 'bg-[#121212]',
        iconColor: '#4ECDC4'
      },
      {
        icon: "analytics.svg",
        title: 'Real-time Analytics',
        description: 'Index Data, Analyze it. Build complex logic and have it made for you.',
        bgClass: 'bg-[#0C0C0C]',
        iconColor: '#FFD93D'
      }
  ];

  return (
      <div className="flex items-center justify-center px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-[90vw] md:max-w-[80vw] border border-[#2E2E2E] my-10 md:my-20 rounded-2xl overflow-hidden">
              {features.map((feature, index) => {
                  return (
                      <div 
                          key={feature.title}
                          className={`relative w-full 
                              ${index % 2 === 0 ? 'bg-[#020202]' : 'bg-[#0F0F0F]'} 
                              border border-[#2E2E2E] 
                              h-[350px] 
                              flex 
                              flex-col 
                              items-center 
                              justify-start 
                              py-4
                              px-4 
                              text-center 
                              sm:text-left`}
                      >
                          <img 
                              src="/arrow.svg" 
                              alt="arrow" 
                              className="absolute top-2 right-0 hidden sm:block" 
                          />
                          
                          <div className="flex flex-col items-start w-full h-full">
                              <div className="flex-3/5 flex items-center justify-start w-full mb-4">
                                  <img 
                                      src={feature.icon} 
                                      alt={feature.icon} 
                                      className="mt-4 max-w-full max-h-[200px] object-contain" 
                                  />
                              </div>
                              <div className="flex-2/5 flex flex-col w-[90%] sm:items-start justify-start text-left sm:text-left gap-[4px]">
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