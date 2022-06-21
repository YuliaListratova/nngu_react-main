import { Dispatch } from 'redux';
import { IFetchTodosParams, TodosActionTypes } from './interfaces';
import { TodosService } from './todos-service';

export const fetchTodos = ({ _page, _limit }: IFetchTodosParams) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await TodosService.getTodos(_page, _limit);
      dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: TodosActionTypes.FETCH_TODOS_FAILURE, payload: 'Ошибка' });
    }
  };
};
