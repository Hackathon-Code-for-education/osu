import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/AppDispatch.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
