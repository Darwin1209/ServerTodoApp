const initialState = {
  name: "anonim",
  fetching: true,
};

export function userReducer(state = initialState, action) {
  switch(action.type){
    case 'VERIFICATE_USER': 
      return { ...state, name: action.payload };
    default: return state;
  }
}
