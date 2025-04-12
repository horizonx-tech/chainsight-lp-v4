import React from 'react';

interface ResourceCardProps {
  imgSrc: string;
  title: string;
  date: string;
  description: string;
  link: string;
  variant?: 'dark' | 'darker'; 
}

const ResourcesCards: React.FC<ResourceCardProps> = ({
  imgSrc,
  title,
  date,
  description,
  link,
  variant = 'dark',
}) => {
  const bgClass = variant === 'dark' ? 'bg-[#090909]' : 'bg-[#000000]';

  const handleClick = () => {
    window.location.href = link;
  };


  return (
    <div
      onClick={handleClick}
      className={`rounded-lg overflow-hidden border border-[#27272A] shadow-lg text-white h-full cursor-pointer transition-transform hover:scale-[1.05] hover:shadow-xl ${bgClass}`}
    >
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="px-4 py-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <div className="text-xs text-gray-400 mb-2">{date}</div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ResourcesCards;
