import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { AppDispatch } from '../store.interface';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
