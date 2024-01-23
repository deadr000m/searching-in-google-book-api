import { useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import { TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
