import { useState } from 'react';
import ResourcesCards from '../sub/ResourcesCards';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const resourcesData = [
    {
      id: 3,
      imgSrc: "/resources1.png",
      title: "Rating Stablecoins",
      date: "2025/03/16",
      description: "Shortly describe how this feature solves a specific user problem.",
      link: "/resources/3"
    },
    {
      id: 1,
      imgSrc: "/resources1.png",
      title: "Optimal Altcoins for Bitcoin Portfolio Diversification",
      date: "2024/09/06",
      description: "Research identifying the six altcoins that consistently improve portfolio performance when held alongside Bitcoin, based on Sharpe ratio analysis.",
      link: "/resources/1"
    },
    {
      id: 2,
      imgSrc: "/resources1.png",
      title: "Information disclosure on crypto assets by Chainsight",
      date: "2023/07/14",
      description: "Shortly describe how this feature solves a specific user problem.",
      link: "/resources/2"
    },
  ];

  // Filter resources by title or description
  const filteredResources = resourcesData.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black border-t-2 border-[#111827] text-white min-h-screen px-4 py-8 md:px-8 lg:px-16" style={{ width: '100vw', maxWidth: '100%' }}>
      <div className="max-w-4xl mx-auto text-center my-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Resources</h1>
        <p className="text-sm text-[#A1A1AA] mb-8">
          Stay informed with the latest developments, technical insights, and success stories from the ChainSight ecosystem. Our blog provides in-depth analysis, tutorials, and updates to help you maximize the potential of blockchain data infrastructure.
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 rounded-md bg-[#272A2D] text-white border border-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <ResourcesCards
                key={resource.id}
                imgSrc={resource.imgSrc}
                title={resource.title}
                date={resource.date}
                description={resource.description}
                link={resource.link}
                variant={index % 2 === 0 ? 'dark' : 'darker'}
              />
            ))
          ) : (
            <p className="text-[#A1A1AA] col-span-full text-center">No matching results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
