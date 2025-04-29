import React, { createContext } from 'react';

const OffsetContext = createContext<number>(0);
export default OffsetContext;

interface OffsetProviderProps {
  value: number;
  children: React.ReactNode;
}

export const OffsetProvider = ({ value, children }: OffsetProviderProps) => (
  <OffsetContext.Provider value={value}>
    {children}
  </OffsetContext.Provider>
);
