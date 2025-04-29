// useOffset.ts
import { useContext } from 'react';
import OffsetContext from '../utils/OffsetContext';

const useOffset = () => useContext(OffsetContext);

export default useOffset;
