// useOffset.ts
import { useContext } from 'react';
import OffsetContext from '../utils/offsetContext';

const useOffset = () => useContext(OffsetContext);

export default useOffset;
