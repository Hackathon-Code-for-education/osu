import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types/RootState.ts';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
