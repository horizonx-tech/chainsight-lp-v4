
import { useEffect, useState, useMemo } from "react";
import { calculateTotalShift, handleTouchEnd, handleTouchMove, handleTouchStart, handleBackward, handleForward } from '../utils/functionalities';

export const useCarousel = (maxItems: number, cardRef, containerRef) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  
  const maxLength = maxItems - 1;
  const totalShift = useMemo(() => {
    return calculateTotalShift(visibleCards, maxLength); 
  }, [visibleCards, maxLength]);

  useEffect(() => {
    const handleResize = () => {
        if (containerRef.current && cardRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          console.log("container",containerWidth)
          const cardWidth = cardRef.current.offsetWidth;
          console.log("card",cardWidth)
          const computedStyle = window.getComputedStyle(containerRef.current.querySelector('div')!);
          const gapSize = parseFloat(computedStyle.gap) || 0;
          const effectiveCardWidth = cardWidth + gapSize;
          const calculatedVisibleCards = containerWidth / effectiveCardWidth;
          setVisibleCards(calculatedVisibleCards);
        }
      };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    slidePosition,
    setSlidePosition,
    visibleCards,
    touchStartX,
    setTouchStartX,
    touchEndX,
    setTouchEndX,
    containerRef,
    cardRef,
    maxLength,
    totalShift,
    handleBackward: () => handleBackward({ setSlidePosition, visibleCards }),
    handleForward: () => handleForward({ setSlidePosition, visibleCards, maxLength }),
    touchHandlers: {
      onTouchStart: handleTouchStart(setTouchStartX, setTouchEndX),
      onTouchMove: handleTouchMove(setTouchEndX),
      onTouchEnd: handleTouchEnd({ touchStartX, touchEndX, setSlidePosition, maxLength, visibleCards })
    }
  };
};
