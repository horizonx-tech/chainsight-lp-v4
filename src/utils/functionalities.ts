type SlideParams = {
  setSlidePosition: React.Dispatch<React.SetStateAction<number>>;
  visibleCards: number;
  maxLength?: number;
};

export const handleForward = ({ setSlidePosition, visibleCards, maxLength = 0 }: SlideParams) => {
  console.log("hellop")
  setSlidePosition((prev) => {
    const totalSlides = maxLength + 1 - visibleCards;
    const cardShift = 100 / (maxLength + 1);
    const maxSlidePosition = -(totalSlides * cardShift);
    const nextPosition = prev - cardShift;

    return nextPosition < maxSlidePosition ? maxSlidePosition : nextPosition;
  });
};

export const handleBackward = ({ setSlidePosition, visibleCards }: SlideParams) => {
  console.log("hellob")
  setSlidePosition((prev) => {
    const cardShift = 100 / visibleCards;
    const nextPosition = prev + cardShift;
    return nextPosition > 0 ? 0 : nextPosition;
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
  