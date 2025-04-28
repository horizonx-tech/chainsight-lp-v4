import { Dispatch, SetStateAction } from "react";
type SlideParams = {
    setSlidePosition: React.Dispatch<React.SetStateAction<number>>;
    visibleCards: number;
    maxLength?: number;
  };

  export const handleTouchStart = (
    setTouchStartX: Dispatch<SetStateAction<number>>, 
    setTouchEndX: Dispatch<SetStateAction<number>>
  ) => (e: React.TouchEvent) => {
    const touchX = e.touches[0].clientX;
    setTouchStartX(touchX);
    setTouchEndX(touchX);
  };
  
  export const handleTouchMove = (
    setTouchEndX: Dispatch<SetStateAction<number>>
  ) => (e: React.TouchEvent) => {
    const touchX = e.touches[0].clientX;
    setTouchEndX(touchX);
  };
  
  interface HandleTouchEndProps {
    touchStartX: number;
    touchEndX: number;
    setSlidePosition: Dispatch<SetStateAction<number>>;
    maxLength: number;
    visibleCards: number;
  }
  
  export const handleTouchEnd = ({
    touchStartX,
    touchEndX,
    setSlidePosition,
    maxLength,
    visibleCards
  }: HandleTouchEndProps) => () => {
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50;
  
    if (swipeDistance < -swipeThreshold) {
      handleForward({ setSlidePosition, maxLength, visibleCards });
    } else if (swipeDistance > swipeThreshold) {
      handleBackward({ setSlidePosition, visibleCards });
    }
  };
  
  
export const handleForward = ({setSlidePosition, visibleCards, maxLength = 0 }: SlideParams) => {
  console.log("visibleCards",visibleCards)
    setSlidePosition(prev => {
        const cardShift = 100 / visibleCards;
        console.log("cars shift", cardShift)
        const totalShift = (maxLength + 1 - visibleCards) * cardShift;
        console.log("total shift", totalShift)
        const nextPosition = prev - cardShift;
        return nextPosition < -totalShift ? -totalShift : nextPosition;
    });
};

  
export const handleBackward = ({ setSlidePosition, visibleCards }: SlideParams) => {
    setSlidePosition((prev) => {
      const cardShift = 100 / visibleCards;
      const nextPosition = prev + cardShift;
      return nextPosition > 0 ? 0 : nextPosition;
    });
  };

  export const calculateTotalShift = (visibleCards: number, maxLength: number) => {
    const cardShift = 100 / visibleCards;
    return (maxLength + 1 - visibleCards) * cardShift;
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
  