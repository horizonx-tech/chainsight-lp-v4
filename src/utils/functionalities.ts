export const handleForward = ({ setSlidePosition, maxLength, visibleCards }: {
  setSlidePosition: React.Dispatch<React.SetStateAction<number>>;
  maxLength: number;
  visibleCards: number;
}) => {
  setSlidePosition(prev => {
    const cardWidth = 110 / visibleCards; // Move by one card width
    const newPos = prev - cardWidth;
    const maxOffset = -((maxLength - (visibleCards - 1)) * cardWidth);
    return newPos <= maxOffset ? maxOffset : newPos;
  });
}
export const handleBackward = ({ setSlidePosition, visibleCards }: {
    setSlidePosition: React.Dispatch<React.SetStateAction<number>>;
    visibleCards: number;
  }) => {
    setSlidePosition(prev => {
      const cardWidth = 100 / visibleCards;
      const newPos = prev + cardWidth;
      return newPos >= 0 ? 0 : newPos;
    });
  };

export  const scrollToElement = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  export const downloadAllFiles = () => {
    const files = [
      "/downloads/20240724_ChainSight_Rating_Stablecoins.pdf",
      "/downloads/20250316_ChainSight_Rating_Stablecoins.pdf",
      "/downloads/Chainsight.pdf",
      "/downloads/20240906_ChainSight_SharpeRatio.pdf",
      "/downloads/20240502_ChainSight_Rating_Stablecoin.pdf",
      "/downloads/20230714_ChainSight.pdf"
    ];
  
    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() ?? "downloaded-file"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  