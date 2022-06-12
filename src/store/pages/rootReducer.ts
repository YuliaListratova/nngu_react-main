import { combineReducers } from 'redux';
import { UsersReducer } from './UsersPage/reduces';

const reducers = {
  user: UsersReducer,
};

export const rootReducer = combineReducers(reducers);
