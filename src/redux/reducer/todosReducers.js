import * as actiontype from "../actions/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actiontype.ADDNEW_TODO:
      return [action.payload, ...state];
    case actiontype.GETALL_TODO:
      return action.payload;
    case actiontype.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
      case actiontype.UPDATE_TODO:
        return state.map((todo) => (
          todo._id === action.payload._id ? {...todo , data : action.payload.data} : todo
        ))
      case actiontype.DELETE_TODO :
        return state.filter(todo => todo._id !== action.payload._id)
    default:
      return state;
  }
};
