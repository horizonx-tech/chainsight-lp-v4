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
