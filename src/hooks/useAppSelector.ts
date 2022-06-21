import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/rootReducer';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
