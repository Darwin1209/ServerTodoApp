const initialState = {
  todoData: [],
};

export function pageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_TODO":
      let array = state.todoData;
      array.push(payload);
      return { ...state, todoData: array };
    case "DELETE_ITEM":
      return { ...state, todoData: payload };
    case "TOOGLE_DONE":
      const arrayDone = state.todoData;
      let idDone = arrayDone.findIndex(el => el.id === payload);
      arrayDone[idDone]["done"] = !arrayDone[idDone]["done"];
      return { ...state, todoData: arrayDone };
    case "TOOGLE_IMPORTANT":
      const arrayImportant = state.todoData;
      let idImportant = arrayImportant.findIndex(el => el.id === payload);
      arrayImportant[idImportant]["important"] = !arrayImportant[idImportant][
        "important"
      ];
      return { ...state, todoData: arrayImportant };
    case "FETCH_TODO_SUCCESS":
      return {...state, todoData : payload};
    default:
      return state;
  }
}
