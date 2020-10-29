import { Todo, ActionTypes } from "../actions";
import { Action} from '../actions/types'


export const todosReducer = (state: Todo[] = [],action: Action ) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;               
        case ActionTypes.deleteTodo:
            return 
        default:
            return state;
    }
}