const initialState = {
  name: "anonim",
  status: undefined
};

export function userReducer(state = initialState, action) {
  switch(action.type){
    case 'VERIFICATE_USER': 
      return { ...state, name: action.payload, status: action.status };
    case 'LOCAL_USER':
      return { ...state, name: action.payload };
    case 'LOGOUT_USER':
      return { ...state, name: action.payload, status: action.status };
    default: return state;
  }
}
