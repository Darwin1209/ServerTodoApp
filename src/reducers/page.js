export const initialState = {
  todoData: [],
};

export function pageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_TODO":
      return { ...state, todoData: payload };
    case "DELETE_ITEM":
      return { ...state, todoData: payload };
    case "TOOGLE":
      return { ...state, todoData: payload };
    case "FETCH_TODO_SUCCESS":
      return {...state, todoData : payload};
    default:
      return state;
  }
}
